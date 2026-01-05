import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Анна Петрова',
    rating: 5,
    date: '15 декабря 2024',
    comment: 'Отличное качество! Брелок выглядит стильно и дорого. Очень довольна покупкой.',
    productName: 'Премиум Геометрия',
  },
  {
    id: 2,
    author: 'Максим Иванов',
    rating: 5,
    date: '12 декабря 2024',
    comment: 'Кожа натуральная, приятная на ощупь. Отличный подарок получился!',
    productName: 'Классик Кожа',
  },
  {
    id: 3,
    author: 'Екатерина Смирнова',
    rating: 4,
    date: '10 декабря 2024',
    comment: 'LED подсветка реально работает! Удобно искать ключи в темноте. Минус - батарейка не меняется.',
    productName: 'Tech LED',
  },
  {
    id: 4,
    author: 'Дмитрий Козлов',
    rating: 5,
    date: '8 декабря 2024',
    comment: 'Заказал сразу два - себе и в подарок. Оба в восторге от качества и дизайна!',
    productName: 'Премиум Геометрия',
  },
];

export default function Reviews() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={i < rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
          <p className="text-muted-foreground text-lg">
            Более 500 довольных клиентов оценили наши брелоки
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{review.author}</h4>
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{review.comment}</p>
                <Badge variant="outline" className="text-xs">
                  {review.productName}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 p-8 rounded-2xl bg-card border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-sm text-muted-foreground">Средняя оценка</p>
          </div>
          <div className="h-16 w-px bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">378</div>
            <p className="text-sm text-muted-foreground">Отзывов</p>
          </div>
          <div className="h-16 w-px bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Рекомендуют</p>
          </div>
        </div>
      </div>
    </section>
  );
}
