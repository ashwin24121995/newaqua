import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useRoute } from "wouter";

export default function GameDetail() {
  useScrollToTop();
  const [match, params] = useRoute("/games/:gameId");
  const gameId = params?.gameId;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 capitalize">{gameId}</h1>
            <p className="text-xl text-white/80">Experience premium gaming</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-secondary rounded-lg p-12 h-96 flex items-center justify-center text-4xl">
                  🎮 {gameId?.toUpperCase()}
                </div>
                <div className="mt-8">
                  <h2 className="text-3xl font-bold mb-4">How to Play</h2>
                  <p className="text-muted-foreground mb-4">
                    Learn the rules and strategies for this exciting game.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-secondary rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-6">Game Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Min Bet</p>
                      <p className="text-xl font-semibold">1 Coin</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Max Bet</p>
                      <p className="text-xl font-semibold">1000 Coins</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">RTP</p>
                      <p className="text-xl font-semibold">96%</p>
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-lg py-6">
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
