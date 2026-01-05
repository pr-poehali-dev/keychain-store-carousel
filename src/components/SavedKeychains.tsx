import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SavedKeychain {
  id: string;
  carabiner: string;
  pendant: string;
  color: string;
  material: string;
  price: number;
  date: string;
}

interface SavedKeychainsProps {
  keychains: SavedKeychain[];
  onLoad: (keychain: SavedKeychain) => void;
  onDelete: (id: string) => void;
}

export default function SavedKeychains({ keychains, onLoad, onDelete }: SavedKeychainsProps) {
  if (keychains.length === 0) {
    return (
      <Card className="p-12 border-4 border-purple-200 bg-white/80 backdrop-blur text-center">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold mb-2">Пока пусто</h3>
        <p className="text-muted-foreground">Создай свой первый брелок и сохрани его!</p>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {keychains.map((keychain, index) => (
        <Card
          key={keychain.id}
          className="p-6 border-4 border-pink-200 bg-white/80 backdrop-blur hover:shadow-xl hover:scale-105 transition-all animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-0">
            <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-2xl p-6 mb-4">
              <div className="flex flex-col items-center gap-3">
                <div className="text-4xl">{keychain.carabiner}</div>
                <div className="h-8 w-0.5 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full"></div>
                <div className="text-5xl">{keychain.pendant}</div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {keychain.color}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {keychain.material}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary">{keychain.price} ₽</span>
              <span className="text-xs text-muted-foreground">{keychain.date}</span>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => onLoad(keychain)}
                className="flex-1 gap-2 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #FFB5E8 0%, #E5CCFF 100%)' }}
              >
                <Icon name="Download" size={16} />
                Загрузить
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onDelete(keychain.id)}
                className="rounded-xl hover:bg-red-50 hover:border-red-300 hover:text-red-500"
              >
                <Icon name="Trash2" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
