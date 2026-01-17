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

export default function MinesGame() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [gameActive, setGameActive] = useState(false);
  const [mines, setMines] = useState<number[]>([]);
  const [revealed, setRevealed] = useState<boolean[]>(Array(25).fill(false));
  const [multiplier, setMultiplier] = useState(1);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);

  const startGame = () => {
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    setCoins(coins - bet);
    const minePositions: number[] = [];
    while (minePositions.length < 5) {
      const pos = Math.floor(Math.random() * 25);
      if (!minePositions.includes(pos)) {
        minePositions.push(pos);
      }
    }
    setMines(minePositions);
    setRevealed(Array(25).fill(false));
    setMultiplier(1);
    setGameActive(true);
    setMessage("Click tiles to reveal them!");
  };

  const revealTile = (index: number) => {
    if (!gameActive || revealed[index]) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (mines.includes(index)) {
      setGameActive(false);
      setMessage("💣 BOOM! You hit a mine!");
    } else {
      const safeCount = newRevealed.filter((r, i) => r && !mines.includes(i)).length;
      const newMultiplier = 1 + safeCount * 0.2;
      setMultiplier(newMultiplier);
      setMessage(`Safe! Multiplier: ${newMultiplier.toFixed(1)}x`);
    }
  };

  const cashOut = () => {
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
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-neon-green hover:text-neon-green/80 mb-6 transition"
        >
          <ArrowLeft size={20} />
          Back to All Games
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-green/30 p-8">
              <h1 className="text-4xl font-bold mb-2 text-neon-green">
                💣 Mines
              </h1>
              <p className="text-slate-400 mb-8">Find safe tiles and avoid the mines!</p>

              {/* Multiplier Display */}
              <div className="bg-gradient-to-r from-neon-green/20 to-neon-pink/20 rounded-lg p-6 mb-8 border-2 border-neon-green/50">
                <p className="text-slate-400 mb-2">Current Multiplier</p>
                <p className="text-5xl font-bold text-neon-green">{multiplier.toFixed(1)}x</p>
                <p className="text-slate-400 mt-2">Potential Win: {Math.floor(bet * multiplier)} Coins</p>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                    message.includes("Safe")
                      ? "bg-neon-green/20 text-neon-green"
                      : message.includes("BOOM")
                      ? "bg-red-500/20 text-red-400"
                      : "bg-neon-pink/20 text-neon-pink"
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Game Grid */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <div className="grid grid-cols-5 gap-3">
                  {Array(25)
                    .fill(0)
                    .map((_, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: gameActive && !revealed[idx] ? 1.1 : 1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => revealTile(idx)}
                        disabled={!gameActive || revealed[idx]}
                        className={`aspect-square rounded-lg font-bold text-2xl transition ${
                          revealed[idx]
                            ? mines.includes(idx)
                              ? "bg-red-600 text-white"
                              : "bg-neon-green text-slate-950"
                            : "bg-gradient-to-br from-slate-700 to-slate-800 text-slate-400 hover:from-slate-600 hover:to-slate-700 border-2 border-slate-600"
                        } ${!gameActive || revealed[idx] ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        {revealed[idx] ? (mines.includes(idx) ? "💣" : "✓") : "?"}
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
                      disabled={gameActive}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={bet}
                      onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                      disabled={gameActive}
                      className="w-24 bg-blue-600 text-white text-center rounded px-2 py-1 border border-slate-600"
                    />
                    <Button
                      onClick={() => setBet(bet + 50)}
                      disabled={gameActive}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
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
                    className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                  >
                    START GAME
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={cashOut}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                    >
                      CASH OUT
                    </motion.button>
                    <Button
                      onClick={() => setGameActive(false)}
                      variant="outline"
                      className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10"
                    >
                      GIVE UP
                    </Button>
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
                  <span className="text-slate-400">Mines:</span>
                  <span className="text-red-400 font-bold">5</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 How to Play</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Set your bet</li>
                <li>✓ Click START GAME</li>
                <li>✓ Reveal safe tiles</li>
                <li>✓ Avoid 5 mines</li>
                <li>✓ CASH OUT to win!</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
