import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Volume2, RotateCcw, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { getSoundGenerator } from "@/lib/soundGenerator";

export default function SlotGame() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState([0, 0, 0]);
  const [reelSpinning, setReelSpinning] = useState([false, false, false]);
  const [winAmount, setWinAmount] = useState(0);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);
  const [winLine, setWinLine] = useState(false);

  // Professional slot symbols with proper names
  const symbols = [
    { name: "Seven", icon: "7️⃣", value: 7 },
    { name: "Diamond", icon: "💎", value: 6 },
    { name: "Gold Bar", icon: "🏆", value: 5 },
    { name: "Cherry", icon: "🍒", value: 4 },
    { name: "Lemon", icon: "🍋", value: 3 },
    { name: "Orange", icon: "🍊", value: 2 },
  ];

  const spin = () => {
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    const soundGen = getSoundGenerator();
    soundGen.playGameStart();

    // Generate all reel results FIRST (before animation)
    const newReel1 = Math.floor(Math.random() * symbols.length);
    const newReel2 = Math.floor(Math.random() * symbols.length);
    const newReel3 = Math.floor(Math.random() * symbols.length);
    const finalReels = [newReel1, newReel2, newReel3];

    setSpinning(true);
    setWinAmount(0);
    setMessage("");
    setWinLine(false);
    setCoins(coins - bet);
    setReelSpinning([true, true, true]);

    soundGen.playSpinning();

    // Reel 1 stops after 2 seconds
    setTimeout(() => {
      setReels((prev) => [finalReels[0], prev[1], prev[2]]);
      setReelSpinning((prev) => [false, prev[1], prev[2]]);
    }, 2000);

    // Reel 2 stops after 2.5 seconds
    setTimeout(() => {
      setReels((prev) => [finalReels[0], finalReels[1], prev[2]]);
      setReelSpinning((prev) => [prev[0], false, prev[2]]);
    }, 2500);

    // Reel 3 stops after 3 seconds
    setTimeout(() => {
      setReels(finalReels);
      setReelSpinning([false, false, false]);
      checkWin(finalReels);
      setSpinning(false);
    }, 3000);
  };

  const checkWin = (finalReels: number[]) => {
    const soundGen = getSoundGenerator();
    
    if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
      const multiplier = finalReels[0] === 0 ? 50 : 20;
      const win = bet * multiplier;
      setWinAmount(win);
      setCoins((prev) => prev + win);
      setTotalWins((prev) => prev + win);
      setWinLine(true);
      setMessage(`🎉 JACKPOT! You won ${win} coins! (${multiplier}x)`);
      soundGen.playJackpot();
    } else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2]) {
      const win = bet * 5;
      setWinAmount(win);
      setCoins((prev) => prev + win);
      setTotalWins((prev) => prev + win);
      setWinLine(true);
      setMessage(`✨ You won ${win} coins! (5x)`);
      soundGen.playWin();
    } else {
      setMessage("Try again!");
      soundGen.playLoss();
    }
  };

  const Reel = ({ index, isSpinning }: { index: number; isSpinning: boolean }) => {
    return (
      <motion.div
        className="relative w-28 h-40 rounded-xl border-4 border-neon-green/50 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-neon-green/30 overflow-hidden"
        style={{
          perspective: "1000px",
        }}
      >
        {/* Reel Glass Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 pointer-events-none z-10" />

        {/* Spinning Symbols */}
        <motion.div
          animate={isSpinning ? { y: [0, -1000] } : { y: 0 }}
          transition={
            isSpinning
              ? {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              : { duration: 0.5, ease: "easeOut" }
          }
          className="flex flex-col h-full"
        >
          {/* Show 5 symbols for scrolling effect */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-40 text-6xl font-bold flex-shrink-0 bg-gradient-to-b from-slate-700 to-slate-800 border-b border-slate-600"
            >
              {symbols[(reels[index] + i) % symbols.length].icon}
            </div>
          ))}
        </motion.div>

        {/* Center Highlight */}
        <div className="absolute top-1/2 left-0 right-0 h-20 -translate-y-1/2 border-t-2 border-b-2 border-neon-green/50 pointer-events-none" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex flex-col" style={{ backgroundImage: "url('/images/bg-slots-game.webp')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-purple-950/85 to-slate-950/85 pointer-events-none" />
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
                🎰 Slot Machines
              </h1>
              <p className="text-slate-400 mb-8">Match symbols to win big! 7s pay the most!</p>

              {/* Slot Machine Cabinet */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-950 rounded-2xl p-8 mb-8 border-4 border-neon-green/30 shadow-2xl">
                {/* Top Display */}
                <div className="bg-gradient-to-r from-neon-green/20 to-neon-pink/20 rounded-lg p-4 mb-8 border-2 border-neon-green/50">
                  <p className="text-slate-400 text-center mb-2">CURRENT BET</p>
                  <p className="text-4xl font-bold text-center text-neon-green">{bet} Coins</p>
                </div>

                {/* Reels Container */}
                <div className="flex justify-center gap-6 mb-8">
                  {[0, 1, 2].map((idx) => (
                    <Reel key={idx} index={idx} isSpinning={reelSpinning[idx]} />
                  ))}
                </div>

                {/* Win Line Animation */}
                {winLine && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                    className="h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent mb-8"
                  />
                )}

                {/* Message Display */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`text-center text-xl font-bold p-4 rounded-lg mb-6 ${
                      message.includes("JACKPOT")
                        ? "bg-gradient-to-r from-neon-green/30 to-neon-pink/30 text-neon-green border-2 border-neon-green/50"
                        : message.includes("won")
                        ? "bg-neon-pink/20 text-neon-pink border-2 border-neon-pink/50"
                        : "bg-red-500/20 text-red-400 border-2 border-red-500/50"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}

                {/* Win Amount Display */}
                {winAmount > 0 && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-center text-4xl font-bold text-neon-green mb-6 drop-shadow-lg"
                  >
                    +{winAmount} 💰
                  </motion.div>
                )}
              </div>

              {/* Bet Control */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-slate-300 font-bold">Bet Amount:</label>
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
                <p className="text-slate-400 text-sm">Min: 10 | Max: 5000</p>
              </div>

              {/* Spin Button */}
              <motion.button
                whileHover={{ scale: spinning ? 1 : 1.08, boxShadow: spinning ? "none" : "0 0 30px rgba(0, 255, 136, 0.8)" }}
                whileTap={{ scale: spinning ? 1 : 0.95 }}
                onClick={spin}
                disabled={spinning}
                className="w-full py-5 px-6 bg-gradient-to-r from-[#00FF88] via-[#00FF88] to-[#00DD77] hover:from-[#00FF88]/95 hover:via-[#00FF88]/95 hover:to-[#00DD77]/95 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold text-2xl rounded-xl transition duration-300 shadow-2xl shadow-[#00FF88]/60 mb-4 border-2 border-[#00FF88]/50 hover:border-[#00FF88] uppercase tracking-wider"
              >
                {spinning ? "🎰 SPINNING..." : "🎰 SPIN REELS"}
              </motion.button>

              <Button
                onClick={() => {
                  setReels([0, 0, 0]);
                  setWinAmount(0);
                  setMessage("");
                  setWinLine(false);
                }}
                variant="outline"
                className="w-full border-neon-green/50 text-neon-green hover:bg-neon-green/10"
              >
                <RotateCcw size={18} className="mr-2" />
                Reset
              </Button>
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
                  <span className="text-slate-400">Win Rate:</span>
                  <span className="text-neon-green font-bold">~33%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 Payouts</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ 7️⃣ 7️⃣ 7️⃣ = 50x bet</li>
                <li>✓ Other 3 match = 20x bet</li>
                <li>✓ Any 2 match = 5x bet</li>
                <li>✓ No match = Loss</li>
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
