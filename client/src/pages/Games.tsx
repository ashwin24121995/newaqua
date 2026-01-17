import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Games() {
  const games = [
    { id: "slots", name: "Slot Machines", desc: "Classic slots with exciting themes" },
    { id: "poker", name: "Poker", desc: "Strategic card game" },
    { id: "roulette", name: "Roulette", desc: "Spin and win" },
    { id: "dice", name: "Dice", desc: "Roll the dice" },
    { id: "mines", name: "Mines", desc: "Avoid the mines" },
    { id: "chicken", name: "Chicken", desc: "Chicken game" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">All Games</h1>
            <p className="text-xl text-white/80">Choose from our collection of premium games</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game) => (
                <Card key={game.id} className="p-6 hover:shadow-lg transition-shadow border-0">
                  <h3 className="text-2xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-muted-foreground mb-6">{game.desc}</p>
                  <Link href={`/games/${game.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">Play Now</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
