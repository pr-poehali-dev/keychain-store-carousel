import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              ✨ Новая коллекция 2024
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Брелоки для тех,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              кто ценит стиль
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Уникальные дизайнерские брелоки ручной работы. Каждый - произведение искусства 
            с вниманием к деталям.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToCatalog} className="gap-2 text-lg px-8 py-6">
              Смотреть каталог
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
              <Icon name="Play" size={20} />
              Посмотреть видео
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span className="text-muted-foreground">Гарантия качества</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={20} className="text-primary" />
              <span className="text-muted-foreground">Доставка 1-3 дня</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={20} className="text-primary" />
              <span className="text-muted-foreground">4.8 средний рейтинг</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
}
