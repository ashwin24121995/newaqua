import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, MessageCircle, Send, ArrowLeft, Play, Trophy, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useLocation, useRoute } from "wouter";

export default function GameLobby() {
  const [location, setLocation] = useLocation();
  const [match] = useRoute("/game-lobby/:gameId/:roomId");
  const gameId = match ? (match as any).gameId : "slots";
  const roomId = match ? (match as any).roomId : "1";
  
  const [messages, setMessages] = useState([
    { id: 1, player: "Player_123", message: "Great game! Just won big!", timestamp: "2:45 PM" },
    { id: 2, player: "LuckyDice", message: "Anyone want to team up?", timestamp: "2:46 PM" },
    { id: 3, player: "CasinoKing", message: "This is my 5th win today!", timestamp: "2:47 PM" },
    { id: 4, player: "GoldenCard", message: "Amazing odds on this table", timestamp: "2:48 PM" },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const gameDetails: Record<string, any> = {
    slots: {
      name: "Slot Machines",
      icon: "🎰",
      description: "Experience the thrill of classic slot machines with modern twists",
      rules: [
        "Match 3 or more symbols to win",
        "Bonus rounds trigger randomly",
        "Progressive jackpot increases with each spin",
        "Wild symbols can substitute for any symbol"
      ]
    },
    poker: {
      name: "Poker Tables",
      icon: "🃏",
      description: "Test your skills in strategic poker games",
      rules: [
        "Standard poker hand rankings apply",
        "Betting rounds follow Texas Hold'em rules",
        "All-in allowed at any time",
        "Pot is split among winners in case of ties"
      ]
    },
    roulette: {
      name: "Roulette Wheels",
      icon: "🎡",
      description: "Spin the wheel and predict where the ball will land",
      rules: [
        "Choose inside or outside bets",
        "Payouts vary based on bet type",
        "Red/Black pays 1:1",
        "Single number pays 35:1"
      ]
    },
    dice: {
      name: "Dice Games",
      icon: "🎲",
      description: "Roll the dice and test your luck",
      rules: [
        "Roll two dice for each turn",
        "Predict the outcome before rolling",
        "Certain combinations trigger bonuses",
        "Higher rolls generally pay more"
      ]
    },
    mines: {
      name: "Mines",
      icon: "💣",
      description: "Uncover safe tiles while avoiding hidden mines",
      rules: [
        "Click tiles to reveal them",
        "Avoid clicking on mines",
        "Winnings increase with each safe tile",
        "Cash out anytime to secure your winnings"
      ]
    },
    chicken: {
      name: "Chicken Run",
      icon: "🐔",
      description: "Race chickens and predict the winner",
      rules: [
        "Choose which chicken will win",
        "Races are fair and unpredictable",
        "Odds vary based on chicken selection",
        "Multiple chickens can be selected per race"
      ]
    }
  };

  const activePlayers = [
    { id: 1, name: "Player_123", coins: 5420, status: "playing" },
    { id: 2, name: "LuckyDice", coins: 8900, status: "playing" },
    { id: 3, name: "CasinoKing", coins: 12340, status: "playing" },
    { id: 4, name: "GoldenCard", coins: 3210, status: "waiting" },
    { id: 5, name: "VictorySeeker", coins: 7650, status: "playing" },
    { id: 6, name: "LuckyStreak", coins: 4520, status: "playing" },
  ];

  const game = gameDetails[gameId as string] || gameDetails.slots;

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          player: "You",
          message: messageInput,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setMessageInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-16">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setLocation("/lobbies")}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Lobbies
            </button>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{game.icon}</span>
              <div>
                <h1 className="text-5xl font-bold">{game.name}</h1>
                <p className="text-white/90 mt-2">{game.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 mb-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Game Rules</h2>
                  <div className="space-y-4">
                    {game.rules.map((rule: string, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-[#00FF88] rounded-full flex items-center justify-center text-[#0a0e27] font-bold">
                          {i + 1}
                        </div>
                        <p className="text-white/80 pt-1">{rule}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <MessageCircle size={24} />
                    Room Chat
                  </h2>
                  <div className="bg-[#0a0e27]/50 rounded-lg p-4 h-80 overflow-y-auto mb-4 space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="flex gap-3">
                        <div className="w-8 h-8 bg-[#00FF88] rounded-full flex items-center justify-center text-[#0a0e27] text-sm font-bold flex-shrink-0">
                          {msg.player[0]}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">{msg.player}</span>
                            <span className="text-white/50 text-xs">{msg.timestamp}</span>
                          </div>
                          <p className="text-white/80 text-sm mt-1">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 bg-[#0a0e27] border border-[#00FF88]/30 rounded-lg px-4 py-2 text-white placeholder-white/50"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-2 px-4 rounded-lg flex items-center gap-2"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 mb-8"
                >
                  <button className="w-full bg-gradient-to-r from-[#00FF88] to-[#00cc6f] text-[#0a0e27] font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 text-lg mb-6">
                    <Play size={24} />
                    Join Game
                  </button>

                  <div className="space-y-4">
                    <div className="bg-[#0a0e27]/50 rounded-lg p-4">
                      <p className="text-white/60 text-sm mb-2">Room Status</p>
                      <p className="text-[#00FF88] font-bold text-lg">Active</p>
                    </div>
                    <div className="bg-[#0a0e27]/50 rounded-lg p-4">
                      <p className="text-white/60 text-sm mb-2">Players Online</p>
                      <p className="text-[#FF006E] font-bold text-lg">6 / 8</p>
                    </div>
                    <div className="bg-[#0a0e27]/50 rounded-lg p-4">
                      <p className="text-white/60 text-sm mb-2">Avg Bet</p>
                      <p className="text-[#FFD700] font-bold text-lg">250 Coins</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users size={20} />
                    Active Players
                  </h3>
                  <div className="space-y-3">
                    {activePlayers.map((player) => (
                      <div key={player.id} className="flex items-center justify-between bg-[#0a0e27]/50 rounded-lg p-3">
                        <div>
                          <p className="text-white font-semibold text-sm">{player.name}</p>
                          <p className="text-white/60 text-xs">{player.coins} coins</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${player.status === "playing" ? "bg-[#00FF88]" : "bg-[#FF006E]"}`} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
