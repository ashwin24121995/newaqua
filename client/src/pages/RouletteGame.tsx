import { useScrollToTop } from '@/hooks/useScrollToTop';
import { getSoundGenerator } from "@/lib/soundGenerator";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function RouletteGame() {
  useScrollToTop();
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

    const soundGen = getSoundGenerator();
    soundGen.playGameStart();
    setSpinning(true);
    setCoins(coins - bet);
    setMessage("");

    setTimeout(() => {
      soundGen.playRouletteSpinning();
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
                  className="w-80 h-80 rounded-full shadow-2xl shadow-neon-green/50 overflow-hidden border-4 border-neon-green/50 bg-gradient-to-br from-red-900 to-black flex items-center justify-center"
                >
                  {/* Real Roulette Wheel SVG */}
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {Array.from({ length: 37 }).map((_, i) => {
                      const angle = (i / 37) * 360;
                      const startAngle = (angle * Math.PI) / 180;
                      const endAngle = (((angle + 360 / 37) * Math.PI) / 180);
                      const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(i);
                      const color = i === 0 ? "#00FF00" : isRed ? "#FF0000" : "#000000";
                      const x1 = 200 + 150 * Math.cos(startAngle);
                      const y1 = 200 + 150 * Math.sin(startAngle);
                      const x2 = 200 + 150 * Math.cos(endAngle);
                      const y2 = 200 + 150 * Math.sin(endAngle);
                      const path = `M 200 200 L ${x1} ${y1} A 150 150 0 0 1 ${x2} ${y2} Z`;
                      const textAngle = (angle + 180 / 37) * (Math.PI / 180);
                      const textX = 200 + 110 * Math.cos(textAngle);
                      const textY = 200 + 110 * Math.sin(textAngle);
                      return (
                        <g key={i}>
                          <path d={path} fill={color} stroke="#FFD700" strokeWidth="2" />
                          <text x={textX} y={textY} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="white">
                            {i}
                          </text>
                        </g>
                      );
                    })}
                    <circle cx="200" cy="200" r="30" fill="#FFD700" stroke="#00FF00" strokeWidth="3" />
                    <circle cx="200" cy="200" r="20" fill="#000000" />
                    <polygon points="200,50 190,80 210,80" fill="#FFD700" stroke="#00FF00" strokeWidth="2" />
                  </svg>
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
                          : "bg-blue-600 text-white border-2 border-slate-600 hover:border-neon-green/50"
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
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={bet}
                      onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                      disabled={spinning}
                      className="w-24 bg-blue-600 text-white text-center rounded px-2 py-1 border border-slate-600"
                    />
                    <Button
                      onClick={() => setBet(bet + 50)}
                      disabled={spinning}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
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
                className="w-full py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 disabled:opacity-50 disabled:cursor-not-allowed text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
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
