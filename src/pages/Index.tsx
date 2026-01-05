import CuteHeader from '@/components/CuteHeader';
import CuteHero from '@/components/CuteHero';
import GameCarousel from '@/components/GameCarousel';
import Reviews from '@/components/Reviews';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CuteHeader />
      <CuteHero />
      <section id="catalog" className="py-12">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Выбери своего любимчика 🎮
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4">
            Пролистывай как в любимой игре и найди идеальный брелок!
          </p>
        </div>
        <GameCarousel />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;