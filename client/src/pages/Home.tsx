import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Gamepad2,
  Trophy,
  Shield,
  Zap,
  Users,
  Sparkles,
  Play,
  Download,
  Coins,
} from "lucide-react";

/**
 * Home Page - Premium Dark Casino Landing
 * Design: Dark theme with neon accents, gradient overlays, and smooth animations
 * Sections: Hero, Why Choose Us, How It Works, Featured Games, Platform Philosophy, Footer
 */

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Zero Cost, Maximum Fun",
      description: "No deposits or payments required. Play completely free.",
    },
    {
      icon: Coins,
      title: "Virtual Currency Only",
      description: "Use virtual coins with no real-world value.",
    },
    {
      icon: Shield,
      title: "Safe & Responsible",
      description: "Age restrictions, transparent mechanics, self-exclusion options.",
    },
    {
      icon: Download,
      title: "No Download Required",
      description: "Play directly from your browser on any device.",
    },
    {
      icon: Gamepad2,
      title: "Variety of Games",
      description: "Slots, Poker, Roulette, Dice, Mines, Chicken and more.",
    },
    {
      icon: Users,
      title: "Social Competition",
      description: "Compete with friends, join leaderboards, earn achievements.",
    },
  ];

  const games = [
    {
      id: "slots",
      name: "Slot Machines",
      description: "Classic slot machine experience with exciting themes and big wins.",
      image: "🎰",
    },
    {
      id: "poker",
      name: "Poker Tables",
      description: "Strategic card game where skill meets luck. Challenge opponents worldwide.",
      image: "🃏",
    },
    {
      id: "roulette",
      name: "Roulette",
      description: "Spin the wheel and test your luck. Multiple betting options available.",
      image: "🎡",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Visit Platform",
      description: "Access our website and create your account in seconds.",
    },
    {
      number: 2,
      title: "Get Virtual Coins",
      description: "Receive daily free coins to start playing immediately.",
    },
    {
      number: 3,
      title: "Choose Your Game",
      description: "Pick from our collection of exciting casino games.",
    },
    {
      number: 4,
      title: "Play & Enjoy",
      description: "Have fun, compete, and climb the leaderboards.",
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

      {/* Hero Section - Dark Theme with Neon Accents */}
      <section className="relative bg-gradient-to-br from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] text-white overflow-hidden py-20 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#00FF88] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF006E] rounded-full blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#7B2CBF] rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight gradient-text">
                Premium Virtual Casino Entertainment
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Experience the thrill of casino gaming without any financial risk. Play slots, poker, roulette, and more with virtual coins. Completely free, 100% safe, and built for entertainment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/30">
                  <Zap className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Zero Cost</p>
                    <p className="text-sm text-white/70">No real money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FF006E]/10 border border-[#FF006E]/30">
                  <Shield className="text-[#FF006E] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Safe Gaming</p>
                    <p className="text-sm text-white/70">Age 18+ only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/30">
                  <Trophy className="text-[#00FF88] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Compete</p>
                    <p className="text-sm text-white/70">Win achievements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30">
                  <Users className="text-[#FFD700] flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">Social</p>
                    <p className="text-sm text-white/70">Play with friends</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-neon">
                  <Play size={20} className="mr-2 inline" />
                  Play Now
                </button>
                <Link href="/how-to-play">
                  <button className="px-6 py-3 font-bold rounded-lg border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 transition-all duration-300">
                    How It Works
                  </button>
                </Link>
              </div>

              <p className="text-xs text-white/60 mt-6">
                ⚠️ Must be 18+ to play. This is a free entertainment platform with no real money involved.
              </p>
            </motion.div>

            {/* Right Column: Game Categories Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { emoji: "🎰", name: "Slots" },
                { emoji: "🃏", name: "Poker" },
                { emoji: "🎡", name: "Roulette" },
                { emoji: "🎲", name: "Dice" },
              ].map((game, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="game-card"
                >
                  <div className="text-5xl mb-3">{game.emoji}</div>
                  <p className="font-semibold text-lg text-white">{game.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Aquastruct?</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're committed to providing the best virtual casino experience with transparency, safety, and endless entertainment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="card-premium"
                >
                  <Icon className="text-[#00FF88] mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-lg text-white/70">Get started in just 4 simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B2CBF] to-[#00FF88] flex items-center justify-center mb-4 neon-glow"
                  >
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2 text-center">{step.title}</h3>
                  <p className="text-white/70 text-center text-sm">{step.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-[#00FF88] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Games</h2>
            <p className="text-lg text-white/70">Start with our most popular games</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {games.map((game) => (
              <motion.div
                key={game.id}
                variants={itemVariants}
                className="card-premium overflow-hidden group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {game.image}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{game.name}</h3>
                <p className="text-white/70 mb-6">{game.description}</p>
                <button className="btn-neon w-full">
                  Play Now
                </button>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/games">
              <button className="px-8 py-3 font-bold rounded-lg border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88]/10 transition-all duration-300">
                View All Games
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Our Platform Philosophy</h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                We believe entertainment should be accessible to everyone without financial risk. Our platform is built on the principles of transparency, fairness, and responsible gaming.
              </p>
              <p className="text-white/80 mb-6 leading-relaxed">
                Every game is designed to be fun first, with clear odds and mechanics. We prioritize player safety and provide tools for responsible gaming.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80">
                  <Sparkles className="text-[#00FF88]" size={20} />
                  100% free gaming with no hidden costs
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Sparkles className="text-[#00FF88]" size={20} />
                  Fair and transparent game mechanics
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Sparkles className="text-[#00FF88]" size={20} />
                  Secure account protection
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Sparkles className="text-[#00FF88]" size={20} />
                  Responsive customer support
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-premium">
                <h3 className="text-xl font-bold mb-3 text-[#00FF88]">Responsible Gaming Commitment</h3>
                <p className="text-white/80">We're dedicated to promoting safe and responsible gaming practices.</p>
                <ul className="mt-4 space-y-2 text-white/70 text-sm">
                  <li>✓ Age verification (18+ only)</li>
                  <li>✓ Self-exclusion options available</li>
                  <li>✓ Time management tools</li>
                  <li>✓ Links to gambling addiction support</li>
                </ul>
              </div>

              <div className="card-premium">
                <h3 className="text-xl font-bold mb-3 text-[#FF006E]">Safety & Compliance</h3>
                <p className="text-white/80">Your security and privacy are our top priorities.</p>
                <ul className="mt-4 space-y-2 text-white/70 text-sm">
                  <li>✓ Certified fair play algorithms</li>
                  <li>✓ Data encryption and protection</li>
                  <li>✓ Regular security audits</li>
                  <li>✓ Transparent terms and conditions</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
