import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  emoji: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Котик',
    emoji: '🐱',
    description: 'Милый брелок-котик с мягкой текстурой',
    price: 799,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/a550e00f-9ed4-42bf-9a5c-a1ca74ed0237.jpg',
    rating: 5.0,
    reviews: 89,
    color: '#FFB5E8',
  },
  {
    id: 2,
    name: 'Мишка',
    emoji: '🧸',
    description: 'Плюшевый брелок-медвежонок',
    price: 899,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/8f19c914-277e-4f29-b980-663b27958cb7.jpg',
    rating: 4.9,
    reviews: 124,
    color: '#B4E7CE',
  },
  {
    id: 3,
    name: 'Единорог',
    emoji: '🦄',
    description: 'Волшебный брелок-единорог с блёстками',
    price: 999,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/01adcdbb-21ee-45c9-a20d-ee012ccfae87.jpg',
    rating: 5.0,
    reviews: 156,
    color: '#E5CCFF',
  },
  {
    id: 4,
    name: 'Панда',
    emoji: '🐼',
    description: 'Милый брелок-панда с бамбуком',
    price: 849,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/a550e00f-9ed4-42bf-9a5c-a1ca74ed0237.jpg',
    rating: 4.8,
    reviews: 67,
    color: '#B5E8FF',
  },
  {
    id: 5,
    name: 'Зайчик',
    emoji: '🐰',
    description: 'Пушистый брелок-зайчик',
    price: 749,
    image: 'https://cdn.poehali.dev/projects/2b726e77-cf0f-4fa7-a35c-1a663c8e635d/files/8f19c914-277e-4f29-b980-663b27958cb7.jpg',
    rating: 4.9,
    reviews: 93,
    color: '#FFFFD1',
  },
];

export default function GameCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handlePrev = () => {
    setDirection('left');
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setSelectedIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const getPositionStyle = (index: number) => {
    const diff = index - selectedIndex;
    const totalProducts = products.length;
    
    let adjustedDiff = diff;
    if (Math.abs(diff) > totalProducts / 2) {
      adjustedDiff = diff > 0 ? diff - totalProducts : diff + totalProducts;
    }

    const isSelected = adjustedDiff === 0;
    const distance = Math.abs(adjustedDiff);
    
    if (isSelected) {
      return {
        transform: 'translateX(0) translateZ(200px) scale(1.3)',
        opacity: 1,
        zIndex: 50,
        filter: 'brightness(1.1)',
      };
    }

    const xOffset = adjustedDiff * 320;
    const zOffset = -distance * 150;
    const scale = Math.max(0.7, 1 - distance * 0.2);
    const opacity = Math.max(0.3, 1 - distance * 0.25);

    return {
      transform: `translateX(${xOffset}px) translateZ(${zOffset}px) scale(${scale})`,
      opacity,
      zIndex: 50 - distance,
      filter: distance > 1 ? 'brightness(0.6)' : 'brightness(0.8)',
    };
  };

  const selectedProduct = products[selectedIndex];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
      
      <div
        className="relative h-[500px] flex items-center justify-center mb-12"
        style={{
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <div className="relative w-full h-full">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
              style={{
                ...getPositionStyle(index),
                transformStyle: 'preserve-3d',
              }}
              onClick={() => {
                if (index !== selectedIndex) {
                  setDirection(index > selectedIndex ? 'right' : 'left');
                  setSelectedIndex(index);
                }
              }}
            >
              <Card
                className="w-[280px] hover:shadow-2xl transition-shadow duration-300 overflow-hidden border-4"
                style={{
                  borderColor: product.color,
                  background: `linear-gradient(135deg, white 0%, ${product.color}20 100%)`,
                }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-5xl animate-bounce" style={{ animationDuration: '2s' }}>
                      {product.emoji}
                    </div>
                    <Badge className="absolute top-4 right-4" style={{ background: product.color }}>
                      <Icon name="Star" size={14} className="mr-1" />
                      {product.rating}
                    </Badge>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <div className="text-3xl font-bold mb-3" style={{ color: product.color }}>
                      {product.price} ₽
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 items-center mb-8">
        <Button
          size="icon"
          onClick={handlePrev}
          className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
        >
          <Icon name="ChevronLeft" size={28} />
        </Button>

        <div className="flex gap-2">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => {
                setDirection(index > selectedIndex ? 'right' : 'left');
                setSelectedIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex ? 'w-12 h-4' : 'w-4 h-4'
              }`}
              style={{
                background: index === selectedIndex ? product.color : '#E5E7EB',
              }}
            />
          ))}
        </div>

        <Button
          size="icon"
          onClick={handleNext}
          className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          style={{ background: 'linear-gradient(135deg, #B5E8FF 0%, #B4E7CE 100%)' }}
        >
          <Icon name="ChevronRight" size={28} />
        </Button>
      </div>

      <div className="max-w-2xl mx-auto text-center px-4 animate-fade-in">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-4" style={{ borderColor: selectedProduct.color }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl">{selectedProduct.emoji}</span>
            <div>
              <h3 className="text-3xl font-bold">{selectedProduct.name}</h3>
              <div className="flex items-center gap-2 justify-center mt-1">
                <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold">{selectedProduct.rating}</span>
                <span className="text-xs text-muted-foreground">({selectedProduct.reviews} отзывов)</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">{selectedProduct.description}</p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold" style={{ color: selectedProduct.color }}>
              {selectedProduct.price} ₽
            </div>
            <Button size="lg" className="gap-2 shadow-lg" style={{ background: selectedProduct.color }}>
              <Icon name="ShoppingCart" size={20} />
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
