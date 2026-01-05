import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CuteHero() {
  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-6 animate-bounce" style={{ animationDuration: '2s' }}>
            <div className="text-8xl mb-4">
              🎀
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block hover:scale-110 transition-transform cursor-default">М</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">и</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">л</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">ы</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">е</span>
            <span className="mx-2"></span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">б</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">р</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">е</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">л</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">о</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">к</span>
            <span className="inline-block hover:scale-110 transition-transform cursor-default">и</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 inline-block hover:scale-105 transition-transform">
              для особенных людей ✨
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Каждый брелок создан с любовью и заботой. Подарите радость себе или близким! 💝
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToCatalog} 
              className="gap-2 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
            >
              <span className="text-2xl">🎪</span>
              Смотреть коллекцию
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 text-lg px-8 py-6 rounded-full border-4 hover:scale-105 transition-all bg-white/80 backdrop-blur"
            >
              <span className="text-2xl">🎁</span>
              Подарочные наборы
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all border-4 border-pink-200">
              <div className="text-4xl mb-3">🌟</div>
              <div className="font-bold text-lg mb-1">Премиум качество</div>
              <div className="text-sm text-muted-foreground">Только лучшие материалы</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all border-4 border-purple-200">
              <div className="text-4xl mb-3">🚀</div>
              <div className="font-bold text-lg mb-1">Быстрая доставка</div>
              <div className="text-sm text-muted-foreground">1-2 дня по всей стране</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all border-4 border-blue-200">
              <div className="text-4xl mb-3">💖</div>
              <div className="font-bold text-lg mb-1">5000+ клиентов</div>
              <div className="text-sm text-muted-foreground">Нам доверяют</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-4xl">
        👇
      </div>
    </section>
  );
}
