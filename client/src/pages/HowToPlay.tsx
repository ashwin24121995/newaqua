import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HowToPlay() {
  useScrollToTop();
  const [expandedGame, setExpandedGame] = useState(0);

  const games = [
    {
      name: "Slot Machines",
      icon: "🎰",
      overview: "Classic slot machine experience with exciting themes and big win potential",
      howToPlay: [
        "Select your bet amount using the bet controls",
        "Click the Spin button to start the reels",
        "Match symbols across paylines to win",
        "Special symbols like Wilds and Scatters trigger bonus features",
        "Land 3+ matching symbols on a payline to win prizes"
      ],
      features: [
        "Multiple paylines for more winning opportunities",
        "Wild symbols that substitute for other symbols",
        "Scatter symbols that trigger free spins",
        "Bonus rounds with multiplied winnings",
        "Progressive win indicators"
      ],
      tips: [
        "Understand the paytable before playing",
        "Bet responsibly and set limits",
        "Free spins are your best chance for big wins",
        "Higher bet amounts can lead to bigger payouts",
        "Play for entertainment, not as income"
      ]
    },
    {
      name: "Poker",
      icon: "🃏",
      overview: "Test your skills in classic poker games with strategic gameplay",
      howToPlay: [
        "Receive 5 cards in your hand",
        "Decide which cards to keep and which to discard",
        "Replace discarded cards with new ones",
        "Your final hand is compared against the payout table",
        "Win based on your hand ranking"
      ],
      features: [
        "Multiple poker variants available",
        "Clear hand rankings displayed",
        "Optimal play suggestions",
        "Adjustable bet amounts",
        "Real-time hand strength indicator"
      ],
      tips: [
        "Learn poker hand rankings: Royal Flush, Straight Flush, Four of a Kind, etc.",
        "Understand which cards are worth keeping",
        "Pair of Jacks or better usually wins",
        "Use the hold/discard strategy wisely",
        "Practice with lower bets first"
      ]
    },
    {
      name: "Roulette",
      icon: "🎡",
      overview: "Spin the wheel and predict where the ball will land",
      howToPlay: [
        "Place your bets on the roulette table",
        "Bet on single numbers, colors, or ranges",
        "Click Spin to start the wheel",
        "Watch as the ball lands on a number",
        "Winning bets are paid according to odds"
      ],
      features: [
        "European roulette with 37 numbers",
        "Multiple betting options available",
        "Color-coded betting areas",
        "Bet history tracking",
        "Clear payout information"
      ],
      tips: [
        "Red/Black bets have 48.6% win probability",
        "Odd/Even bets also have 48.6% win probability",
        "Single number bets pay 35:1 but are harder to win",
        "Combine multiple bets for varied strategies",
        "Set betting limits before you start"
      ]
    },
    {
      name: "Dice Games",
      icon: "🎲",
      overview: "Roll the dice and predict the outcome",
      howToPlay: [
        "Choose your prediction: Higher, Lower, or Specific Number",
        "Set your bet amount",
        "Click Roll to throw the dice",
        "If your prediction is correct, you win",
        "Payouts vary based on prediction difficulty"
      ],
      features: [
        "Simple and fast-paced gameplay",
        "Multiple prediction options",
        "Clear win/loss indicators",
        "Adjustable difficulty levels",
        "Quick round completion"
      ],
      tips: [
        "Higher/Lower predictions have better odds",
        "Specific number predictions pay more but are riskier",
        "Manage your bankroll carefully",
        "Start with easier predictions",
        "Track your win rate to improve strategy"
      ]
    },
    {
      name: "Mines",
      icon: "💣",
      overview: "Uncover safe tiles while avoiding hidden mines",
      howToPlay: [
        "Select a grid difficulty (Easy, Medium, Hard)",
        "Click on tiles to reveal them",
        "Safe tiles show numbers indicating nearby mines",
        "Avoid clicking on tiles with mines",
        "Cash out your winnings before hitting a mine"
      ],
      features: [
        "Progressive difficulty levels",
        "Increasing multipliers as you progress",
        "Mine count indicator",
        "Safe tile suggestions",
        "Cash out at any time"
      ],
      tips: [
        "Numbers show how many mines are nearby",
        "Use logic to deduce safe tiles",
        "Start with Easy difficulty to learn",
        "Higher risk = higher multipliers",
        "Cash out when you're ahead"
      ]
    },
    {
      name: "Chicken Run",
      icon: "🐔",
      overview: "Race chickens and predict the winner",
      howToPlay: [
        "Select which chicken you think will win",
        "Place your bet on your chosen chicken",
        "Click Start Race to begin",
        "Watch the chickens race to the finish line",
        "Win if your chicken crosses first"
      ],
      features: [
        "Multiple chickens with different odds",
        "Animated race sequences",
        "Live odds display",
        "Betting history",
        "Quick race completion"
      ],
      tips: [
        "Lower odds chickens win more often",
        "Higher odds chickens pay more when they win",
        "Study the chicken statistics",
        "Diversify your bets",
        "Set a budget and stick to it"
      ]
    }
  ];

  const generalTips = [
    {
      title: "Understand the Rules",
      desc: "Before playing any game, take time to understand the rules, payouts, and odds. Knowledge is your best tool for making informed decisions."
    },
    {
      title: "Set a Budget",
      desc: "Decide how many virtual coins you're willing to use before you start playing. Stick to your budget and never exceed it."
    },
    {
      title: "Play for Fun",
      desc: "Remember that these games are designed for entertainment. Play with the mindset of having fun, not making money."
    },
    {
      title: "Take Breaks",
      desc: "Gaming should be enjoyable. Take regular breaks to avoid fatigue and maintain perspective."
    },
    {
      title: "Use Bonuses Wisely",
      desc: "Take advantage of daily free coins and bonuses, but use them strategically as part of your gaming plan."
    },
    {
      title: "Know When to Stop",
      desc: "If you're not having fun or losing consistently, it's time to take a break. There's always another day to play."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold mb-6">How to Play</h1>
              <p className="text-2xl text-white/90 max-w-2xl">
                Master our games with comprehensive guides and pro tips for every game type
              </p>
            </motion.div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 text-white">Getting Started</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Create Account", desc: "Sign up on our platform in seconds" },
                  { step: "2", title: "Get Free Coins", desc: "Receive daily virtual coins to play" },
                  { step: "3", title: "Choose a Game", desc: "Pick from our collection of 6 games" },
                  { step: "4", title: "Start Playing", desc: "Have fun and enjoy the experience" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 text-center"
                  >
                    <div className="text-5xl font-bold text-[#00FF88] mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Game Guides */}
        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Game Guides</h2>
              <p className="text-lg text-white/70">Detailed instructions for each game</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {games.map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedGame(expandedGame === index ? -1 : index)}
                    className="w-full p-8 flex items-center justify-between hover:bg-[#00FF88]/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-5xl">{game.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                        <p className="text-white/70">{game.overview}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`text-[#00FF88] transition-transform duration-300 ${expandedGame === index ? 'rotate-180' : ''}`}
                      size={32}
                    />
                  </button>

                  {expandedGame === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#00FF88]/20 p-8 space-y-8"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#00FF88] mb-4">How to Play</h4>
                        <ol className="space-y-3">
                          {game.howToPlay.map((step, i) => (
                            <li key={i} className="flex gap-4 text-white/80">
                              <span className="text-[#00FF88] font-bold flex-shrink-0">{i + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#FF006E] mb-4">Features</h4>
                        <ul className="space-y-2">
                          {game.features.map((feature, i) => (
                            <li key={i} className="flex gap-3 text-white/80">
                              <span className="text-[#FF006E] font-bold">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-[#FFD700] mb-4">Pro Tips</h4>
                        <ul className="space-y-2">
                          {game.tips.map((tip, i) => (
                            <li key={i} className="flex gap-3 text-white/80">
                              <span className="text-[#FFD700] font-bold">💡</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* General Tips */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">General Gaming Tips</h2>
              <p className="text-lg text-white/70">Best practices for all players</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalTips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 hover:border-[#00FF88]/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#00FF88] mb-4">{tip.title}</h3>
                  <p className="text-white/70 leading-relaxed">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsible Gaming */}
        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Play Responsibly</h2>
              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  While our games are designed for entertainment, we encourage all players to maintain healthy gaming habits. Gaming should always be fun and never feel like an obligation.
                </p>
                <p className="leading-relaxed">
                  Set limits on your playtime and virtual coin usage. If you ever feel that gaming is affecting your well-being, our platform provides tools for self-exclusion and support resources.
                </p>
                <div className="mt-6 pt-6 border-t border-[#00FF88]/20">
                  <p className="text-sm font-semibold text-[#00FF88]">
                    Need help? Contact our support team at Support@playaquacasino.com or visit our Responsible Gaming page for more information.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Play?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your gaming adventure with our comprehensive guides and pro tips
              </p>
              <button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-4 px-12 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/50 text-lg">
                Play Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
