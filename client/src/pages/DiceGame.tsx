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

export default function DiceGame() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [prediction, setPrediction] = useState<"high" | "low" | null>(null);
  const [rolling, setRolling] = useState(false);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);

  const roll = () => {
    if (!prediction) {
      setMessage("Select High or Low!");
      return;
    }
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    const soundGen = getSoundGenerator();
    soundGen.playGameStart();
    setRolling(true);
    setCoins(coins - bet);
    setMessage("");

    setTimeout(() => {
      soundGen.playDiceRoll();
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const total = d1 + d2;

      setDice1(d1);
      setDice2(d2);

      const isHigh = total > 7;
      const isLow = total < 7;
      const isDraw = total === 7;

      if (isDraw) {
        setCoins((prev) => prev + bet);
        setMessage("🤝 Draw! Total is 7. Bet returned.");
        soundGen.playCoins();
      } else if ((prediction === "high" && isHigh) || (prediction === "low" && isLow)) {
        const winAmount = bet * 2;
        setCoins((prev) => prev + winAmount);
        setTotalWins((prev) => prev + winAmount);
        setMessage(`🎉 You win! Total: ${total} - Won ${winAmount} coins!`);
        soundGen.playWin();
      } else {
        setMessage(`❌ You lose! Total: ${total}`);
        soundGen.playLoss();
      }

      setRolling(false);
    }, 1500);
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
                🎲 Dice Games
              </h1>
              <p className="text-slate-400 mb-8">Predict if the total will be High or Low!</p>

              {/* Dice Display */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg p-8 mb-8 border-2 border-neon-green/50">
                <p className="text-slate-300 mb-6 text-center font-bold">Roll the Dice</p>
                <div className="flex justify-center gap-8 mb-8">
                  <motion.div
                    animate={rolling ? { rotateX: 360, rotateY: 360 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center text-6xl border-4 border-red-400 shadow-lg"
                  >
                    {dice1}
                  </motion.div>
                  <motion.div
                    animate={rolling ? { rotateX: -360, rotateY: -360 } : {}}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-6xl border-4 border-blue-400 shadow-lg"
                  >
                    {dice2}
                  </motion.div>
                </div>

                {/* Total Display */}
                <div className="text-center">
                  <p className="text-slate-400 mb-2">Total</p>
                  <p className="text-5xl font-bold text-neon-green">{dice1 + dice2}</p>
                </div>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                    message.includes("win")
                      ? "bg-neon-green/20 text-neon-green"
                      : message.includes("lose")
                      ? "bg-red-500/20 text-red-400"
                      : "bg-neon-pink/20 text-neon-pink"
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Prediction Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPrediction("high")}
                  disabled={rolling}
                  className={`py-4 rounded-lg font-bold text-lg transition ${
                    prediction === "high"
                      ? "bg-neon-green text-slate-950 border-2 border-neon-green"
                      : "bg-blue-600 text-white border-2 border-slate-600 hover:border-neon-green/50"
                  } ${rolling ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  HIGH (8-12)
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPrediction("low")}
                  disabled={rolling}
                  className={`py-4 rounded-lg font-bold text-lg transition ${
                    prediction === "low"
                      ? "bg-neon-pink text-slate-950 border-2 border-neon-pink"
                      : "bg-blue-600 text-white border-2 border-slate-600 hover:border-neon-pink/50"
                  } ${rolling ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  LOW (2-6)
                </motion.button>
              </div>

              {/* Bet Control */}
              <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-slate-300">Bet Amount:</label>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setBet(Math.max(10, bet - 50))}
                      disabled={rolling}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      value={bet}
                      onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                      disabled={rolling}
                      className="w-24 bg-blue-600 text-white text-center rounded px-2 py-1 border border-slate-600"
                    />
                    <Button
                      onClick={() => setBet(bet + 50)}
                      disabled={rolling}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              {/* Roll Button */}
              <motion.button
                whileHover={{ scale: rolling ? 1 : 1.05 }}
                whileTap={{ scale: rolling ? 1 : 0.95 }}
                onClick={roll}
                disabled={rolling}
                className="w-full py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 disabled:opacity-50 disabled:cursor-not-allowed text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
              >
                {rolling ? "ROLLING..." : "ROLL DICE"}
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
                  <span className="text-slate-400">Prediction:</span>
                  <span className="text-neon-green font-bold">{prediction?.toUpperCase() || "None"}</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 How to Play</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Pick HIGH or LOW</li>
                <li>✓ Set your bet</li>
                <li>✓ Click ROLL DICE</li>
                <li>✓ Correct prediction = 2x bet</li>
                <li>✓ Total 7 = Draw (bet returned)</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
