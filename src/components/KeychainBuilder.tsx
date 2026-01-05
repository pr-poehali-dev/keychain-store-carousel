import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SlotItem {
  id: number;
  name: string;
  emoji: string;
  price: number;
  image?: string;
}

const carabinerOptions: SlotItem[] = [
  { id: 1, name: 'Классический', emoji: '🔗', price: 0 },
  { id: 2, name: 'Золотой', emoji: '✨', price: 100 },
  { id: 3, name: 'Серебряный', emoji: '💎', price: 150 },
  { id: 4, name: 'Радужный', emoji: '🌈', price: 200 },
  { id: 5, name: 'Космос', emoji: '🚀', price: 250 },
];

const pendantOptions: SlotItem[] = [
  { id: 1, name: 'Котик', emoji: '🐱', price: 300 },
  { id: 2, name: 'Мишка', emoji: '🧸', price: 350 },
  { id: 3, name: 'Единорог', emoji: '🦄', price: 400 },
  { id: 4, name: 'Панда', emoji: '🐼', price: 380 },
  { id: 5, name: 'Зайчик', emoji: '🐰', price: 320 },
  { id: 6, name: 'Сердце', emoji: '💖', price: 290 },
  { id: 7, name: 'Звезда', emoji: '⭐', price: 310 },
];

const colorOptions: SlotItem[] = [
  { id: 1, name: 'Розовый', emoji: '🌸', price: 0 },
  { id: 2, name: 'Фиолетовый', emoji: '💜', price: 0 },
  { id: 3, name: 'Голубой', emoji: '💙', price: 0 },
  { id: 4, name: 'Жёлтый', emoji: '💛', price: 0 },
  { id: 5, name: 'Зелёный', emoji: '💚', price: 0 },
  { id: 6, name: 'Радужный', emoji: '🌈', price: 50 },
];

const materialOptions: SlotItem[] = [
  { id: 1, name: 'Пластик', emoji: '🎨', price: 0 },
  { id: 2, name: 'Дерево', emoji: '🌳', price: 100 },
  { id: 3, name: 'Металл', emoji: '⚙️', price: 150 },
  { id: 4, name: 'Кожа', emoji: '👜', price: 200 },
  { id: 5, name: 'Акрил', emoji: '✨', price: 120 },
];

interface SlotProps {
  title: string;
  options: SlotItem[];
  selectedIndex: number;
  onPrev: () => void;
  onNext: () => void;
  color: string;
}

function Slot({ title, options, selectedIndex, onPrev, onNext, color }: SlotProps) {
  const visibleCount = 3;
  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      let index = selectedIndex + i;
      if (index < 0) index = options.length + index;
      if (index >= options.length) index = index - options.length;
      items.push({ ...options[index], offset: i });
    }
    return items;
  };

  const visibleItems = getVisibleItems();
  const selectedItem = options[selectedIndex];

  return (
    <div className="relative">
      <div className="text-center mb-3">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{selectedItem.name}</p>
        {selectedItem.price > 0 && (
          <p className="text-xs font-semibold" style={{ color }}>+{selectedItem.price} ₽</p>
        )}
      </div>
      
      <div className="relative h-48 flex items-center justify-center">
        <Button
          size="icon"
          variant="ghost"
          onClick={onPrev}
          className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-8 w-8 rounded-full hover:scale-110 transition-transform"
          style={{ background: `${color}40` }}
        >
          <Icon name="ChevronUp" size={20} />
        </Button>

        <div className="relative w-full h-32">
          {visibleItems.map((item, idx) => {
            const offset = item.offset || 0;
            const isSelected = offset === 0;
            
            return (
              <div
                key={`${item.id}-${idx}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 transition-all duration-300"
                style={{
                  transform: `translateX(-50%) translateY(calc(-50% + ${offset * 45}px)) scale(${isSelected ? 1 : 0.7})`,
                  opacity: isSelected ? 1 : 0.4,
                  zIndex: isSelected ? 10 : 5 - Math.abs(offset),
                }}
              >
                <div
                  className={`w-24 h-24 rounded-2xl flex items-center justify-center text-5xl transition-all ${
                    isSelected ? 'shadow-xl' : ''
                  }`}
                  style={{
                    background: isSelected ? `linear-gradient(135deg, ${color}40 0%, white 100%)` : '#f3f4f6',
                    border: isSelected ? `3px solid ${color}` : '2px solid #e5e7eb',
                  }}
                >
                  {item.emoji}
                </div>
              </div>
            );
          })}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={onNext}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 h-8 w-8 rounded-full hover:scale-110 transition-transform"
          style={{ background: `${color}40` }}
        >
          <Icon name="ChevronDown" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default function KeychainBuilder() {
  const [carabinerIndex, setCarabinerIndex] = useState(0);
  const [pendantIndex, setPendantIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [materialIndex, setMaterialIndex] = useState(0);

  const totalPrice = 
    carabinerOptions[carabinerIndex].price +
    pendantOptions[pendantIndex].price +
    colorOptions[colorIndex].price +
    materialOptions[materialIndex].price +
    499;

  const handlePrev = (current: number, setter: (n: number) => void, length: number) => {
    setter(current > 0 ? current - 1 : length - 1);
  };

  const handleNext = (current: number, setter: (n: number) => void, length: number) => {
    setter(current < length - 1 ? current + 1 : 0);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Создай свой брелок 🎨
        </h2>
        <p className="text-muted-foreground text-lg">
          Выбери все части и собери уникальный брелок!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="p-8 border-4 border-pink-200 bg-white/80 backdrop-blur animate-slide-up">
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-6">
              <Slot
                title="Карабин"
                options={carabinerOptions}
                selectedIndex={carabinerIndex}
                onPrev={() => handlePrev(carabinerIndex, setCarabinerIndex, carabinerOptions.length)}
                onNext={() => handleNext(carabinerIndex, setCarabinerIndex, carabinerOptions.length)}
                color="#FF69B4"
              />
              
              <Slot
                title="Подвеска"
                options={pendantOptions}
                selectedIndex={pendantIndex}
                onPrev={() => handlePrev(pendantIndex, setPendantIndex, pendantOptions.length)}
                onNext={() => handleNext(pendantIndex, setPendantIndex, pendantOptions.length)}
                color="#DA70D6"
              />
              
              <Slot
                title="Цвет"
                options={colorOptions}
                selectedIndex={colorIndex}
                onPrev={() => handlePrev(colorIndex, setColorIndex, colorOptions.length)}
                onNext={() => handleNext(colorIndex, setColorIndex, colorOptions.length)}
                color="#87CEEB"
              />
              
              <Slot
                title="Материал"
                options={materialOptions}
                selectedIndex={materialIndex}
                onPrev={() => handlePrev(materialIndex, setMaterialIndex, materialOptions.length)}
                onNext={() => handleNext(materialIndex, setMaterialIndex, materialOptions.length)}
                color="#9370DB"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Card className="p-8 border-4 border-purple-200 bg-white/80 backdrop-blur">
            <CardContent className="p-0">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎀</div>
                <h3 className="text-2xl font-bold mb-2">Предпросмотр</h3>
                <p className="text-sm text-muted-foreground">Твой уникальный брелок</p>
              </div>

              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 mb-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-7xl">{carabinerOptions[carabinerIndex].emoji}</div>
                  <div className="h-16 w-1 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full"></div>
                  <div className="text-8xl animate-bounce" style={{ animationDuration: '2s' }}>
                    {pendantOptions[pendantIndex].emoji}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <div className="px-3 py-1 rounded-full bg-white/80 text-xs font-semibold">
                      {colorOptions[colorIndex].emoji} {colorOptions[colorIndex].name}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/80 text-xs font-semibold">
                      {materialOptions[materialIndex].emoji} {materialOptions[materialIndex].name}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Базовая цена:</span>
                  <span className="font-semibold">499 ₽</span>
                </div>
                {carabinerOptions[carabinerIndex].price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>{carabinerOptions[carabinerIndex].name}:</span>
                    <span className="font-semibold">+{carabinerOptions[carabinerIndex].price} ₽</span>
                  </div>
                )}
                {pendantOptions[pendantIndex].price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>{pendantOptions[pendantIndex].name}:</span>
                    <span className="font-semibold">+{pendantOptions[pendantIndex].price} ₽</span>
                  </div>
                )}
                {colorOptions[colorIndex].price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>{colorOptions[colorIndex].name}:</span>
                    <span className="font-semibold">+{colorOptions[colorIndex].price} ₽</span>
                  </div>
                )}
                {materialOptions[materialIndex].price > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>{materialOptions[materialIndex].name}:</span>
                    <span className="font-semibold">+{materialOptions[materialIndex].price} ₽</span>
                  </div>
                )}
                <div className="border-t-2 border-pink-200 pt-3 flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    {totalPrice} ₽
                  </span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg py-6 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
              >
                <Icon name="ShoppingCart" size={22} />
                Добавить в корзину
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
