import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, Play } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Lobby() {
  const [, setLocation] = useLocation();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  // Mock data for game rooms
  const gameRooms = [
    {
      id: "slots",
      name: "Slot Machines",
      icon: "🎰",
      activePlayers: 234,
      maxPlayers: 500,
      avgWinnings: "$2,450",
      rooms: [
        { id: 1, name: "Classic Slots", players: 45, maxPlayers: 50, minBet: 10, maxBet: 1000 },
        { id: 2, name: "Mega Jackpot", players: 38, maxPlayers: 50, minBet: 50, maxBet: 5000 },
        { id: 3, name: "Lucky 7s", players: 52, maxPlayers: 50, minBet: 25, maxBet: 2500 },
        { id: 4, name: "Treasure Hunt", players: 41, maxPlayers: 50, minBet: 15, maxBet: 1500 },
        { id: 5, name: "Diamond Rush", players: 58, maxPlayers: 50, minBet: 100, maxBet: 10000 },
      ],
    },
    {
      id: "poker",
      name: "Poker Tables",
      icon: "🃏",
      activePlayers: 156,
      maxPlayers: 300,
      avgWinnings: "$3,890",
      rooms: [
        { id: 1, name: "Texas Hold'em - Low Stakes", players: 32, maxPlayers: 8, minBet: 10, maxBet: 100 },
        { id: 2, name: "Texas Hold'em - Mid Stakes", players: 28, maxPlayers: 8, minBet: 100, maxBet: 1000 },
        { id: 3, name: "Texas Hold'em - High Stakes", players: 18, maxPlayers: 8, minBet: 500, maxBet: 10000 },
        { id: 4, name: "Omaha - Casual", players: 24, maxPlayers: 8, minBet: 50, maxBet: 500 },
        { id: 5, name: "5-Card Draw", players: 54, maxPlayers: 6, minBet: 25, maxBet: 250 },
      ],
    },
    {
      id: "roulette",
      name: "Roulette Wheels",
      icon: "🎡",
      activePlayers: 189,
      maxPlayers: 400,
      avgWinnings: "$1,920",
      rooms: [
        { id: 1, name: "European Roulette", players: 42, maxPlayers: 100, minBet: 10, maxBet: 5000 },
        { id: 2, name: "American Roulette", players: 38, maxPlayers: 100, minBet: 15, maxBet: 7500 },
        { id: 3, name: "VIP Roulette", players: 28, maxPlayers: 50, minBet: 100, maxBet: 50000 },
        { id: 4, name: "Lightning Roulette", players: 45, maxPlayers: 100, minBet: 20, maxBet: 10000 },
        { id: 5, name: "Speed Roulette", players: 36, maxPlayers: 100, minBet: 5, maxBet: 1000 },
      ],
    },
    {
      id: "dice",
      name: "Dice Games",
      icon: "🎲",
      activePlayers: 142,
      maxPlayers: 250,
      avgWinnings: "$1,650",
      rooms: [
        { id: 1, name: "Craps - Casual", players: 35, maxPlayers: 50, minBet: 10, maxBet: 500 },
        { id: 2, name: "Craps - Competitive", players: 28, maxPlayers: 50, minBet: 50, maxBet: 5000 },
        { id: 3, name: "Sic Bo", players: 42, maxPlayers: 50, minBet: 15, maxBet: 1500 },
        { id: 4, name: "High/Low Dice", players: 37, maxPlayers: 100, minBet: 5, maxBet: 500 },
      ],
    },
    {
      id: "mines",
      name: "Mines",
      icon: "💣",
      activePlayers: 198,
      maxPlayers: 350,
      avgWinnings: "2.5x multiplier",
      rooms: [
        { id: 1, name: "Easy Mode (3 mines)", players: 52, maxPlayers: 100, minBet: 10, maxBet: 1000 },
        { id: 2, name: "Medium Mode (5 mines)", players: 48, maxPlayers: 100, minBet: 20, maxBet: 2000 },
        { id: 3, name: "Hard Mode (10 mines)", players: 38, maxPlayers: 100, minBet: 50, maxBet: 5000 },
        { id: 4, name: "Extreme Mode (15 mines)", players: 28, maxPlayers: 50, minBet: 100, maxBet: 10000 },
        { id: 5, name: "Tournament", players: 32, maxPlayers: 50, minBet: 500, maxBet: 50000 },
      ],
    },
    {
      id: "chicken",
      name: "Chicken Run",
      icon: "🐔",
      activePlayers: 267,
      maxPlayers: 500,
      avgWinnings: "3.2x multiplier",
      rooms: [
        { id: 1, name: "Casual Races", players: 65, maxPlayers: 100, minBet: 10, maxBet: 500 },
        { id: 2, name: "Standard Races", players: 58, maxPlayers: 100, minBet: 25, maxBet: 2500 },
        { id: 3, name: "Premium Races", players: 42, maxPlayers: 100, minBet: 100, maxBet: 10000 },
        { id: 4, name: "Championship", players: 35, maxPlayers: 50, minBet: 500, maxBet: 50000 },
        { id: 5, name: "Lightning Races", players: 67, maxPlayers: 100, minBet: 50, maxBet: 5000 },
      ],
    },
  ];

  const handleJoinGame = (gameId: string, roomId: number) => {
    setLocation(`/game-lobby/${gameId}/${roomId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold mb-6">Game Lobbies</h1>
              <p className="text-2xl text-white/90 max-w-2xl">
                Join live games and compete with players worldwide
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gameRooms.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
                  className="cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl">{game.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                          <div className="flex items-center gap-2 text-[#00FF88] mt-2">
                            <Users size={16} />
                            <span className="text-sm font-semibold">{game.activePlayers} Active Players</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#0a0e27]/50 rounded-lg p-4">
                        <p className="text-white/60 text-sm mb-1">Avg Winnings</p>
                        <p className="text-[#00FF88] font-bold text-lg">{game.avgWinnings}</p>
                      </div>
                      <div className="bg-[#0a0e27]/50 rounded-lg p-4">
                        <p className="text-white/60 text-sm mb-1">Capacity</p>
                        <p className="text-[#FF006E] font-bold text-lg">{game.maxPlayers} Players</p>
                      </div>
                    </div>

                    {selectedGame === game.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[#00FF88]/20 pt-6 mt-6"
                      >
                        <h4 className="text-white font-bold mb-4">Available Rooms</h4>
                        <div className="space-y-3">
                          {game.rooms.map((room) => (
                            <div
                              key={room.id}
                              className="bg-[#0a0e27]/50 rounded-lg p-4 flex items-center justify-between hover:bg-[#0a0e27]/80 transition-colors"
                            >
                              <div className="flex-1">
                                <p className="text-white font-semibold">{room.name}</p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
                                  <span className="flex items-center gap-1">
                                    <Users size={14} />
                                    {room.players}/{room.maxPlayers}
                                  </span>
                                  <span>Bet: {room.minBet} - {room.maxBet}</span>
                                </div>
                              </div>
                              <button
                                onClick={() => handleJoinGame(game.id, room.id)}
                                className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all"
                              >
                                <Play size={16} />
                                Join
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-8 text-center"
              >
                <Zap className="text-[#00FF88] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Quick Join</h3>
                <p className="text-white/70">Instantly join any available room with one click</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-8 text-center"
              >
                <Users className="text-[#FF006E] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Live Players</h3>
                <p className="text-white/70">See real-time player counts and room availability</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-8 text-center"
              >
                <TrendingUp className="text-[#FFD700] mx-auto mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Compete</h3>
                <p className="text-white/70">Compete with players and climb the leaderboards</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
