import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Games() {
  const games = [
    { 
      id: "slots", 
      name: "Slot Machines", 
      desc: "Classic slots with exciting themes and big wins",
      image: "/images/game-slots-premium.png"
    },
    { 
      id: "poker", 
      name: "Poker", 
      desc: "Strategic card game where skill meets luck",
      image: "/images/game-poker-premium.png"
    },
    { 
      id: "roulette", 
      name: "Roulette", 
      desc: "Spin the wheel and test your luck",
      image: "/images/game-roulette-premium.png"
    },
    { 
      id: "dice", 
      name: "Dice", 
      desc: "Roll the dice and win big",
      image: "/images/game-dice-premium.png"
    },
    { 
      id: "mines", 
      name: "Mines", 
      desc: "Navigate the minefield strategically",
      image: "/images/game-mines-premium.png"
    },
    { 
      id: "chicken", 
      name: "Chicken Run", 
      desc: "Chase the chicken and catch multipliers",
      image: "/images/game-chicken-premium.png"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-4">All Games</h1>
              <p className="text-xl text-white/80">Choose from our collection of premium games</p>
            </motion.div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {games.map((game) => (
                <motion.div
                  key={game.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="card-premium overflow-hidden group"
                >
                  {/* Game Image */}
                  <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Game Info */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{game.name}</h3>
                  <p className="text-white/70 mb-6">{game.desc}</p>

                  {/* Play Button */}
                  <Link href={`/play/${game.id}`}>
                    <button className="w-full btn-neon">
                      Play Now
                    </button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
