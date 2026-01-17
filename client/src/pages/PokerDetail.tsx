import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PokerDetail() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const [expandedRule, setExpandedRule] = useState<number | null>(0);

  const rules = [
    {
      title: "Hand Rankings",
      description: "Poker hands are ranked from highest to lowest. Know these rankings to win!",
      details: [
        "Royal Flush: A-K-Q-J-10 (same suit) - Highest hand",
        "Straight Flush: 5 consecutive cards (same suit)",
        "Four of a Kind: 4 cards of the same rank",
        "Full House: 3 of a kind + 2 of a kind",
        "Flush: 5 cards of the same suit",
        "Straight: 5 consecutive cards (any suit)",
        "Three of a Kind: 3 cards of the same rank",
        "Two Pair: 2 different pairs",
        "One Pair: 2 cards of the same rank",
        "High Card: Highest card when no other hand is made"
      ]
    },
    {
      title: "Betting Rounds",
      description: "Poker involves strategic betting across multiple rounds.",
      details: [
        "Pre-Flop: Bet after seeing your hole cards (2 private cards)",
        "Flop: Bet after 3 community cards are revealed",
        "Turn: Bet after the 4th community card is revealed",
        "River: Final bet after the 5th community card is revealed",
        "Showdown: Remaining players reveal their hands",
        "Fold: Exit the round by not matching the bet",
        "Check: Pass without betting (if no bet to match)",
        "Raise: Increase the current bet amount"
      ]
    },
    {
      title: "Game Mechanics",
      description: "Understand how the game flows and what happens at each stage.",
      details: [
        "Each player starts with 2 private cards (hole cards)",
        "5 community cards are revealed gradually",
        "You make the best 5-card hand from your 7 cards (2 hole + 5 community)",
        "Betting happens after each card is revealed",
        "Players can fold, check, call, or raise",
        "Last player standing or best hand at showdown wins",
        "Pot is awarded to the winner",
        "New round begins with new dealer"
      ]
    },
    {
      title: "Strategy Tips",
      description: "Improve your poker game with these expert strategies.",
      details: [
        "Play tight early: Only play strong starting hands",
        "Position matters: Play more hands when you're in late position",
        "Observe opponents: Learn their betting patterns",
        "Manage your bankroll: Don't bet more than you can afford",
        "Fold weak hands: Don't chase bad hands",
        "Bet for value: Extract coins from weaker hands",
        "Bluff occasionally: Keep opponents guessing",
        "Stay focused: Avoid distractions during play"
      ]
    },
    {
      title: "Betting Limits",
      description: "Different betting structures available in our poker games.",
      details: [
        "Minimum bet: 10 coins",
        "Maximum bet: 5,000 coins per round",
        "Pot limit: Maximum bet equals current pot size",
        "No limit: Bet any amount (up to your balance)",
        "Blinds: Forced bets to start the game",
        "Ante: Small bet required from all players",
        "All-in: Bet all remaining coins",
        "Side pot: Created when a player goes all-in"
      ]
    },
    {
      title: "Responsible Gaming",
      description: "Play safely and enjoy poker responsibly.",
      details: [
        "Set a budget for your gaming session",
        "Never chase losses with bigger bets",
        "Take regular breaks to stay sharp",
        "Don't play when tired or emotional",
        "Remember: This is entertainment, not income",
        "All coins are virtual with no real value",
        "Use self-exclusion if you need help",
        "Seek support if gambling feels out of control"
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
          <h1 className="text-4xl font-bold text-white mb-2">♠️ Texas Hold'em Poker</h1>
          <p className="text-[#00FF88] text-lg">Master the classic card game with strategy and skill!</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Game Image & Play Button */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <img
                src="/images/game-poker-premium.webp"
                alt="Poker"
                className="w-full rounded-lg mb-6 object-cover h-64"
              />
              <Button
                onClick={() => setLocation('/play/poker')}
                className="w-full bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow"
              >
                🎮 PLAY NOW
              </Button>
              <div className="mt-6 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <p className="text-[#00FF88] text-sm font-semibold mb-2">Quick Stats:</p>
                <ul className="text-white text-sm space-y-1">
                  <li>💰 Min Bet: 10 coins</li>
                  <li>💰 Max Bet: 5,000 coins</li>
                  <li>👥 Players: 2-8</li>
                  <li>⭐ Skill-Based Game</li>
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
                  <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Complete Poker Rules</h2>
                  
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
                        title: "Join a Table",
                        description: "Select your betting limit and join a poker table with other players."
                      },
                      {
                        step: 2,
                        title: "Receive Hole Cards",
                        description: "You'll be dealt 2 private cards that only you can see."
                      },
                      {
                        step: 3,
                        title: "Pre-Flop Betting",
                        description: "Decide to fold, check, call, or raise based on your cards."
                      },
                      {
                        step: 4,
                        title: "The Flop",
                        description: "3 community cards are revealed. Another round of betting occurs."
                      },
                      {
                        step: 5,
                        title: "The Turn & River",
                        description: "Two more community cards are revealed with betting rounds after each."
                      },
                      {
                        step: 6,
                        title: "Showdown",
                        description: "Remaining players reveal their hands. Best 5-card hand wins the pot!"
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
                        q: "What's the best starting hand?",
                        a: "Pocket Aces (AA) is the best starting hand, followed by King-King (KK) and Queen-Queen (QQ)."
                      },
                      {
                        q: "Can I play multiple tables?",
                        a: "Yes! You can join multiple tables at different betting limits to increase your chances of winning."
                      },
                      {
                        q: "What happens if I go all-in?",
                        a: "If you bet all your coins, a side pot is created for remaining players. You can still win if you have the best hand."
                      },
                      {
                        q: "Is poker a game of luck or skill?",
                        a: "Poker is primarily a skill-based game. While luck plays a role, strategy and decision-making are crucial."
                      },
                      {
                        q: "How long does a game take?",
                        a: "A typical poker game takes 5-15 minutes depending on the number of players and betting decisions."
                      },
                      {
                        q: "Can I chat with other players?",
                        a: "Yes! You can interact with other players at your table through the in-game chat feature."
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Play Poker?</h2>
          <p className="text-[#00FF88] mb-6 text-lg">Test your skills against other players and win big!</p>
          <Button
            onClick={() => setLocation('/play/poker')}
            className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow"
          >
            🎮 PLAY POKER NOW
          </Button>
        </div>
      </div>
    </div>
  );
}
