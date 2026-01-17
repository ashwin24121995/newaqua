import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SlotDetail() {
  const [, setLocation] = useLocation();
  const [expandedRule, setExpandedRule] = useState<number | null>(0);

  const rules = [
    {
      title: "Basic Gameplay",
      description: "Click the SPIN button to start the reels. All three reels will spin and stop one by one. Match symbols to win coins based on the payout table.",
      details: [
        "Minimum bet: 10 coins",
        "Maximum bet: 5,000 coins",
        "Adjust your bet using +/- buttons before spinning",
        "Each spin costs your selected bet amount"
      ]
    },
    {
      title: "Winning Combinations",
      description: "Win by matching symbols across the reels. Different symbol combinations pay different amounts.",
      details: [
        "7️⃣ 7️⃣ 7️⃣ = 50x your bet (Jackpot!)",
        "💎 💎 💎 = 25x your bet",
        "🏆 🏆 🏆 = 20x your bet",
        "🍒 🍒 🍒 = 15x your bet",
        "Any 2 matching symbols = 5x your bet",
        "No match = Lose your bet"
      ]
    },
    {
      title: "Special Features",
      description: "Slot machines have special mechanics to increase your chances of winning.",
      details: [
        "Wild Symbol (⭐): Can substitute for any symbol",
        "Bonus Multiplier: 2x payout on certain combinations",
        "Free Spin Trigger: Get 3 free spins if you hit the bonus",
        "Win Line: Green flashing line shows your winning combination"
      ]
    },
    {
      title: "Tips & Strategies",
      description: "Maximize your chances of winning with these expert tips.",
      details: [
        "Start with smaller bets to learn the game",
        "Bet higher amounts for bigger potential wins",
        "Track your statistics to understand your win rate",
        "Set a budget and stick to it",
        "Play for fun, not as a way to make money",
        "Take breaks to stay fresh and focused"
      ]
    },
    {
      title: "Payout Information",
      description: "Understanding payouts helps you make better betting decisions.",
      details: [
        "All payouts are displayed in virtual coins",
        "Payouts are calculated as: Bet Amount × Multiplier",
        "Example: Bet 100 coins, hit 7s (50x) = 5,000 coins",
        "Minimum payout: 5 coins",
        "Maximum payout: 250,000 coins per spin"
      ]
    },
    {
      title: "Responsible Gaming",
      description: "Play safely and responsibly for maximum enjoyment.",
      details: [
        "This is entertainment, not a way to earn money",
        "Only use virtual coins with no real value",
        "Set time limits for your gaming sessions",
        "Never chase losses",
        "Take regular breaks",
        "If you feel you're playing too much, use self-exclusion tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] border-b border-[#00FF88]/20 py-6">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setLocation('/games')}
            className="text-[#00FF88] hover:text-white mb-4 transition-colors"
          >
            ← Back to Games
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">🎰 Slot Machines</h1>
          <p className="text-[#00FF88] text-lg">Match symbols to win big with our classic slot machine game!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Game Image & Play Button */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <img
                src="/images/game-slots-premium.png"
                alt="Slot Machines"
                className="w-full rounded-lg mb-6 object-cover h-64"
              />
              <Button
                onClick={() => setLocation('/play/slots')}
                className="w-full bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow"
              >
                🎮 PLAY NOW
              </Button>
              <div className="mt-6 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <p className="text-[#00FF88] text-sm font-semibold mb-2">Quick Stats:</p>
                <ul className="text-white text-sm space-y-1">
                  <li>💰 Min Bet: 10 coins</li>
                  <li>💰 Max Bet: 5,000 coins</li>
                  <li>🎯 Max Payout: 250,000 coins</li>
                  <li>⭐ RTP: 96.5%</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Rules */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="rules" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#1a1f3a] border border-[#00FF88]/20 p-1 rounded-lg mb-6">
                <TabsTrigger value="rules" className="text-white data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
                  Rules
                </TabsTrigger>
                <TabsTrigger value="howtoplay" className="text-white data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
                  How to Play
                </TabsTrigger>
                <TabsTrigger value="faq" className="text-white data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="rules" className="space-y-4">
                <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
                  <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Complete Game Rules</h2>
                  
                  <div className="space-y-4">
                    {rules.map((rule, index) => (
                      <div key={index} className="border border-[#00FF88]/20 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedRule(expandedRule === index ? null : index)}
                          className="w-full p-4 bg-[#1a1f3a] hover:bg-[#2a2f4a] transition-colors flex items-center justify-between text-left"
                        >
                          <div>
                            <h3 className="text-[#00FF88] font-bold text-lg">{rule.title}</h3>
                            <p className="text-gray-300 text-sm mt-1">{rule.description}</p>
                          </div>
                          {expandedRule === index ? (
                            <ChevronUp className="text-[#00FF88] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="text-[#00FF88] flex-shrink-0" />
                          )}
                        </button>
                        
                        {expandedRule === index && (
                          <div className="p-4 bg-[#0a0e27] border-t border-[#00FF88]/20">
                            <ul className="space-y-2">
                              {rule.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="text-white text-sm flex items-start gap-3">
                                  <span className="text-[#00FF88] font-bold">✓</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="howtoplay" className="space-y-4">
                <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
                  <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Step-by-Step Guide</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Set Your Bet",
                        description: "Use the +/- buttons to adjust your bet amount. Start with smaller bets (10-100 coins) to learn the game."
                      },
                      {
                        step: 2,
                        title: "Click SPIN",
                        description: "Click the bright green SPIN REELS button to start the game. The three reels will spin automatically."
                      },
                      {
                        step: 3,
                        title: "Watch the Reels",
                        description: "The reels will spin and stop one by one. Reel 1 stops first, then Reel 2, then Reel 3."
                      },
                      {
                        step: 4,
                        title: "Check Your Result",
                        description: "If symbols match, you win! The green win line will flash and your coins will be added to your balance."
                      },
                      {
                        step: 5,
                        title: "Play Again",
                        description: "Click SPIN again to play another round. Your balance updates automatically after each spin."
                      }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 p-4 bg-[#1a1f3a] rounded-lg border border-[#00FF88]/20">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#00FF88] text-black font-bold text-lg">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-[#00FF88] font-bold text-lg">{item.title}</h3>
                          <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-4">
                <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
                  <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        q: "What's the minimum and maximum bet?",
                        a: "Minimum bet is 10 coins, maximum is 5,000 coins. You can adjust your bet before each spin."
                      },
                      {
                        q: "What's the highest payout?",
                        a: "The highest payout is 250,000 coins when you hit three 7s with a 5,000 coin bet (50x multiplier)."
                      },
                      {
                        q: "Can I win real money?",
                        a: "No, all winnings are in virtual coins with no real-world value. This is purely for entertainment."
                      },
                      {
                        q: "What does RTP mean?",
                        a: "RTP (Return to Player) is 96.5%, meaning on average, players get back 96.5 coins for every 100 coins wagered over time."
                      },
                      {
                        q: "Is the game fair?",
                        a: "Yes! Our games use certified random number generators (RNG) to ensure fair and unpredictable results."
                      },
                      {
                        q: "Can I play on mobile?",
                        a: "Yes! The game works on all devices - desktop, tablet, and mobile browsers."
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-4 bg-[#1a1f3a] rounded-lg border border-[#00FF88]/20">
                        <h3 className="text-[#00FF88] font-bold mb-2">{item.q}</h3>
                        <p className="text-gray-300 text-sm">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-[#1a0f3a] via-[#2a1f4a] to-[#1a0f3a] border-t border-[#00FF88]/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Spin and Win?</h2>
          <p className="text-[#00FF88] mb-6 text-lg">Start playing Slot Machines now with your free virtual coins!</p>
          <Button
            onClick={() => setLocation('/play/slots')}
            className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow"
          >
            🎮 PLAY SLOTS NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
