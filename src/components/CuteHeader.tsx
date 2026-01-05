import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function CuteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b-4 border-pink-200 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎀</span>
              </div>
              <div className="absolute -top-1 -right-1 text-xl animate-bounce" style={{ animationDuration: '2s' }}>
                ✨
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                Милашки
              </span>
              <div className="text-xs text-muted-foreground">брелоки с душой</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-pink-500 transition-colors font-semibold relative group"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-foreground hover:text-purple-500 transition-colors font-semibold relative group"
            >
              Каталог
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-blue-500 transition-colors font-semibold relative group"
            >
              Отзывы
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-pink-500 transition-colors font-semibold relative group"
            >
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all"></span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:scale-110 transition-transform rounded-full"
            >
              <Icon name="ShoppingCart" size={22} />
              <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 text-xs flex items-center justify-center text-white font-bold shadow-lg">
                0
              </span>
            </Button>
            <Button 
              className="rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
            >
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-pink-200 animate-fade-in bg-white/90 backdrop-blur rounded-b-3xl">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
                className="text-left py-3 px-4 text-foreground hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all font-semibold"
              >
                🏠 Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-left py-3 px-4 text-foreground hover:text-purple-500 hover:bg-purple-50 rounded-2xl transition-all font-semibold"
              >
                🎪 Каталог
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left py-3 px-4 text-foreground hover:text-blue-500 hover:bg-blue-50 rounded-2xl transition-all font-semibold"
              >
                ⭐ Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-left py-3 px-4 text-foreground hover:text-pink-500 hover:bg-pink-50 rounded-2xl transition-all font-semibold"
              >
                📞 Контакты
              </button>
              <div className="flex gap-3 pt-2">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 hover:scale-105 transition-all"
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Корзина
                </Button>
                <Button 
                  className="flex-1 rounded-full shadow-lg hover:scale-105 transition-all"
                  style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
                >
                  <Icon name="User" size={18} className="mr-2" />
                  Войти
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
