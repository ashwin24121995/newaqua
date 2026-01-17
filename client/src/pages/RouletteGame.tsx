import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function RouletteGame() {
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);

  const spin = () => {
    if (!selectedNumber && selectedNumber !== 0) {
      setMessage("Select a number first!");
      return;
    }
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    setSpinning(true);
    setCoins(coins - bet);
    setMessage("");

    setTimeout(() => {
      const winningNumber = Math.floor(Math.random() * 37);
      setResult(winningNumber);

      if (winningNumber === selectedNumber) {
        const winAmount = bet * 36;
        setCoins((prev) => prev + winAmount);
        setTotalWins((prev) => prev + winAmount);
        setMessage("🎉 WINNER! Number " + winningNumber + " - You won " + winAmount + " coins!");
      } else {
        setMessage("❌ Losing spin. Number was " + winningNumber);
      }

      setSpinning(false);
    }, 3000);
  };

  const numbers = Array.from({ length: 37 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex flex-col" style={{ backgroundImage: "url('/images/bg-roulette-game.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-purple-950/80 to-slate-950/80 pointer-events-none" />
    <div className="relative z-10 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-8">
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-neon-green hover:text-neon-green/80 mb-6 transition font-semibold"
        >
          <ArrowLeft size={20} />
          Back to All Games
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-green/30 p-8">
              <h1 className="text-4xl font-bold mb-2 text-neon-green">
                🎡 Roulette
              </h1>
              <p className="text-slate-400 mb-8">Pick a number and spin to win!</p>

              {/* Spinning Wheel */}
              <div className="flex justify-center mb-8 relative">
                <motion.div
                  animate={spinning ? { rotate: 3600 } : {}}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="w-80 h-80 rounded-full shadow-2xl shadow-neon-green/50 overflow-hidden border-4 border-neon-green/50"
                >
                  <img src="/images/roulette-wheel-3d.png" alt="Roulette Wheel" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                    message.includes("WINNER")
                      ? "bg-neon-green/20 text-neon-green"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Number Selection */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <p className="text-slate-300 mb-4 font-bold">Select a Number (0-36):</p>
                <div className="grid grid-cols-7 gap-2">
                  {numbers.map((num) => (
                    <motion.button
                      key={num}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedNumber(num)}
                      disabled={spinning}
                      className={`py-2 rounded font-bold transition ${
                        selectedNumber === num
                          ? "bg-neon-green text-slate-950 border-2 border-neon-green"
                          : "bg-slate-700 text-white border-2 border-slate-600 hover:border-neon-green/50"
                      } ${spinning ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {num}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bet Control */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-slate-300">Bet Amount:</label>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setBet(Math.max(10, bet - 50))}
                      disabled={spinning}
                      className="bg-slate-700 hover:bg-slate-600 text-white"
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={bet}
                      onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                      disabled={spinning}
                      className="w-24 bg-slate-700 text-white text-center rounded px-2 py-1 border border-slate-600"
                    />
                    <Button
                      onClick={() => setBet(bet + 50)}
                      disabled={spinning}
                      className="bg-slate-700 hover:bg-slate-600 text-white"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Spin Button */}
              <motion.button
                whileHover={{ scale: spinning ? 1 : 1.05 }}
                whileTap={{ scale: spinning ? 1 : 0.95 }}
                onClick={spin}
                disabled={spinning}
                className="w-full py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
              >
                {spinning ? "SPINNING..." : "SPIN WHEEL"}
              </motion.button>
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
                  <span className="text-slate-400">Selected:</span>
                  <span className="text-neon-green font-bold">{selectedNumber ?? "None"}</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 How to Play</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Pick a number 0-36</li>
                <li>✓ Set your bet</li>
                <li>✓ Click SPIN WHEEL</li>
                <li>✓ Match the number = 36x win!</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </div>
  );
}
