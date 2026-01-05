import Icon from '@/components/ui/icon';

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Key" size={20} className="text-background" />
              </div>
              <span className="text-xl font-bold">KeyStyle</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Премиальные брелоки ручной работы для тех, кто ценит качество и стиль.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('top')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Каталог
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Отзывы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Гарантия и возврат</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                info@keystyle.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                г. Москва
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 KeyStyle. Все права защищены.
          </p>
          <div className="flex gap-4">
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
