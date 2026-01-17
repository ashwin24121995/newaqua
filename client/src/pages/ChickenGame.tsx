import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ChickenGame() {
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [gameActive, setGameActive] = useState(false);
  const [level, setLevel] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);
  const [chickenPosition, setChickenPosition] = useState(50);
  const [playerCaught, setPlayerCaught] = useState(false);

  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      setChickenPosition((prev) => {
        const newPos = prev + Math.random() * 10 - 5;
        return Math.max(0, Math.min(100, newPos));
      });
    }, 500);

    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    setCoins(coins - bet);
    setLevel(1);
    setMultiplier(1);
    setGameActive(true);
    setPlayerCaught(false);
    setChickenPosition(50);
    setMessage("Chase the chicken!");
  };

  const catchChicken = () => {
    if (!gameActive || playerCaught) return;

    const distance = Math.abs(chickenPosition - 50);
    if (distance < 15) {
      const newMultiplier = multiplier + 0.5;
      setMultiplier(newMultiplier);
      setLevel((prev) => prev + 1);
      setChickenPosition(Math.random() * 100);
      setMessage(`✨ Caught! Level ${level + 1} - Multiplier: ${newMultiplier.toFixed(1)}x`);
    } else {
      setPlayerCaught(true);
      const winAmount = Math.floor(bet * multiplier);
      setCoins((prev) => prev + winAmount);
      setTotalWins((prev) => prev + winAmount);
      setMessage(`🎉 Game Over! Won ${winAmount} coins at ${multiplier.toFixed(1)}x!`);
      setGameActive(false);
    }
  };

  const giveUp = () => {
    if (!gameActive) return;

    const winAmount = Math.floor(bet * multiplier);
    setCoins((prev) => prev + winAmount);
    setTotalWins((prev) => prev + winAmount);
    setMessage(`💰 Cashed out! Won ${winAmount} coins!`);
    setGameActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <button
          onClick={() => setLocation("/lobbies")}
          className="flex items-center gap-2 text-neon-green hover:text-neon-green/80 mb-6 transition"
        >
          <ArrowLeft size={20} />
          Back to Lobbies
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-green/30 p-8">
              <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-pink">
                🐔 Chicken Run
              </h1>
              <p className="text-slate-400 mb-8">Chase and catch the chicken to multiply your winnings!</p>

              {/* Stats Display */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="bg-slate-800 border-neon-green/30 p-4">
                  <p className="text-slate-400 text-sm mb-1">Level</p>
                  <p className="text-3xl font-bold text-neon-green">{level}</p>
                </Card>
                <Card className="bg-slate-800 border-neon-pink/30 p-4">
                  <p className="text-slate-400 text-sm mb-1">Multiplier</p>
                  <p className="text-3xl font-bold text-neon-pink">{multiplier.toFixed(1)}x</p>
                </Card>
                <Card className="bg-slate-800 border-neon-green/30 p-4">
                  <p className="text-slate-400 text-sm mb-1">Potential Win</p>
                  <p className="text-3xl font-bold text-neon-green">{Math.floor(bet * multiplier)}</p>
                </Card>
              </div>

              {/* Game Arena */}
              <div className="bg-gradient-to-b from-green-900/30 to-green-950/30 rounded-lg p-8 mb-8 border-2 border-green-500/30">
                {/* Chicken Track */}
                <div className="mb-8">
                  <p className="text-slate-400 mb-3 font-bold">Chicken Position</p>
                  <div className="relative h-16 bg-slate-800 rounded-lg border-2 border-slate-700 overflow-hidden">
                    <motion.div
                      animate={{ left: `${chickenPosition}%` }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="absolute top-1/2 -translate-y-1/2 text-4xl"
                    >
                      🐔
                    </motion.div>
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-neon-green/50 -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Player Position */}
                <div className="mb-8">
                  <p className="text-slate-400 mb-3 font-bold">Your Position (Center)</p>
                  <div className="relative h-16 bg-slate-800 rounded-lg border-2 border-slate-700 flex items-center justify-center">
                    <div className="text-4xl">👤</div>
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-neon-pink/50 -translate-x-1/2"></div>
                  </div>
                </div>

                {/* Distance Indicator */}
                <div className="text-center">
                  <p className="text-slate-400 mb-2">Distance</p>
                  <p className="text-2xl font-bold text-neon-green">
                    {Math.abs(chickenPosition - 50).toFixed(0)} units
                  </p>
                </div>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                    message.includes("Caught")
                      ? "bg-neon-green/20 text-neon-green"
                      : message.includes("Game Over")
                      ? "bg-neon-pink/20 text-neon-pink"
                      : "bg-neon-green/20 text-neon-green"
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Bet Control */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-slate-300">Bet Amount:</label>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setBet(Math.max(10, bet - 50))}
                      disabled={gameActive}
                      className="bg-slate-700 hover:bg-slate-600 text-white"
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={bet}
                      onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                      disabled={gameActive}
                      className="w-24 bg-slate-700 text-white text-center rounded px-2 py-1 border border-slate-600"
                    />
                    <Button
                      onClick={() => setBet(bet + 50)}
                      disabled={gameActive}
                      className="bg-slate-700 hover:bg-slate-600 text-white"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {!gameActive ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startGame}
                    className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                  >
                    START GAME
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={catchChicken}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-pink to-neon-pink/80 hover:from-neon-pink/90 hover:to-neon-pink/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-pink/50"
                    >
                      CATCH!
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={giveUp}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                    >
                      CASH OUT
                    </motion.button>
                  </>
                )}
              </div>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-pink/30 p-6">
              <h3 className="text-xl font-bold text-neon-pink mb-4">💰 Balance</h3>
              <div className="text-4xl font-bold text-neon-green mb-2">{coins}</div>
              <p className="text-slate-400 text-sm">Total Coins</p>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-green/30 p-6">
              <h3 className="text-xl font-bold text-neon-green mb-4">🏆 Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Wins:</span>
                  <span className="text-neon-green font-bold">{totalWins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Bet:</span>
                  <span className="text-neon-pink font-bold">{bet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Level:</span>
                  <span className="text-neon-green font-bold">{level}</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 How to Play</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Set your bet</li>
                <li>✓ Click START GAME</li>
                <li>✓ Watch chicken move</li>
                <li>✓ Click CATCH when close</li>
                <li>✓ Level up for more wins!</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
