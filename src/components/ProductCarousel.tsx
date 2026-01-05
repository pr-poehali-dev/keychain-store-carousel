import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Премиум Геометрия',
    description: 'Современный брелок с геометрическим дизайном из металла премиум-качества',
    price: 1499,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/a550e00f-9ed4-42bf-9a5c-a1ca74ed0237.jpg',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Классик Кожа',
    description: 'Элегантный кожаный брелок с металлическим кольцом, ручная работа',
    price: 999,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/8f19c914-277e-4f29-b980-663b27958cb7.jpg',
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Tech LED',
    description: 'Футуристичный брелок со светодиодной подсветкой, водонепроницаемый',
    price: 1999,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/01adcdbb-21ee-45c9-a20d-ee012ccfae87.jpg',
    rating: 4.7,
    reviews: 156,
  },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const isActive = diff === 0;
    const isPrev = diff === -1 || (activeIndex === 0 && index === products.length - 1);
    const isNext = diff === 1 || (activeIndex === products.length - 1 && index === 0);

    if (isActive) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 3,
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-80%) scale(0.85) rotateY(25deg)',
        opacity: 0.5,
        zIndex: 1,
      };
    } else if (isNext) {
      return {
        transform: 'translateX(80%) scale(0.85) rotateY(-25deg)',
        opacity: 0.5,
        zIndex: 1,
      };
    } else {
      return {
        transform: 'scale(0.7)',
        opacity: 0,
        zIndex: 0,
      };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16">
      <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: '1500px' }}>
        {products.map((product, index) => (
          <Card
            key={product.id}
            className="absolute w-[380px] transition-all duration-700 ease-out cursor-pointer hover:shadow-2xl"
            style={getCardStyle(index)}
            onClick={() => setActiveIndex(index)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90">
                  <Icon name="Star" size={14} className="mr-1" />
                  {product.rating}
                </Badge>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MessageSquare" size={16} />
                  <span>{product.reviews} отзывов</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  <Button size="lg" className="gap-2">
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="h-12 w-12 rounded-full"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>
        <div className="flex items-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="h-12 w-12 rounded-full"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>
    </div>
  );
}
