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
} from "lucide-react";

/**
 * Home Page - Premium Landing Page
 * Design: Purple-gold theme with asymmetric hero section
 * Sections: Hero, Why Choose Us, About & Transparency, How It Works, Featured Games, Footer
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Premium Virtual Casino Entertainment 🎮
              </h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Experience the thrill of casino gaming without any financial risk. Play slots, poker, roulette, and more with virtual coins. Completely free, 100% safe, and built for entertainment.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Zero Cost</p>
                    <p className="text-sm text-white/80">No real money</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Safe Gaming</p>
                    <p className="text-sm text-white/80">Age 18+ only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Compete</p>
                    <p className="text-sm text-white/80">Win achievements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Social</p>
                    <p className="text-sm text-white/80">Play with friends</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 font-semibold"
                >
                  <Play size={20} className="mr-2" />
                  Play Now
                </Button>
                <Link href="/how-to-play">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-white/70 mt-6">
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all cursor-pointer"
                >
                  <div className="text-5xl mb-3">{game.emoji}</div>
                  <p className="font-semibold text-lg">{game.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Aquastruct?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <motion.div key={i} variants={itemVariants}>
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow border-0 bg-white">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started in just 4 simple steps
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-center text-muted-foreground text-sm">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-6 w-12 h-1 bg-gradient-to-r from-primary to-accent"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Games</h2>
            <p className="text-lg text-muted-foreground">
              Start with our most popular games
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {games.map((game) => (
              <motion.div key={game.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow border-0">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl">
                    {game.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{game.name}</h3>
                    <p className="text-muted-foreground mb-6">{game.description}</p>
                    <Link href={`/games/${game.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Play Now
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/games">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Games
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About & Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Platform Philosophy</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We believe entertainment should be accessible to everyone without financial risk. Our platform is built on the principles of transparency, fairness, and responsible gaming.
                </p>
                <p>
                  Every game is designed to be fun first, with clear odds and mechanics. We prioritize player safety and provide tools for responsible gaming.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">What You Can Expect:</h3>
                <ul className="space-y-3">
                  {[
                    "100% free gaming with no hidden costs",
                    "Fair and transparent game mechanics",
                    "Secure account protection",
                    "Responsive customer support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Sparkles className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 border-0 bg-secondary">
                <h3 className="text-2xl font-semibold mb-4 text-accent">
                  Responsible Gaming Commitment
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're dedicated to promoting safe and responsible gaming practices.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Age verification (18+ only)",
                    "Self-exclusion options available",
                    "Time management tools",
                    "Links to gambling addiction support",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Shield size={16} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 border-0 bg-primary/10">
                <h3 className="text-2xl font-semibold mb-4">Safety & Compliance</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Certified fair play algorithms",
                    "Data encryption and protection",
                    "Regular security audits",
                    "Transparent terms and conditions",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Shield size={16} className="text-primary flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Icon placeholder components
function Coins() {
  return <Gamepad2 />;
}

function Download() {
  return <Sparkles />;
}
