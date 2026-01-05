import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Key" size={20} className="text-background" />
            </div>
            <span className="text-xl font-bold">KeyStyle</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Отзывы
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-background font-bold">
                0
              </span>
            </Button>
            <Button>
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Корзина
                </Button>
                <Button className="flex-1">
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
