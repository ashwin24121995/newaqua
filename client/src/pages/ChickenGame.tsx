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

export default function ChickenGame() {
  useScrollToTop();
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [gameStarted, setGameStarted] = useState(false);
  const [multiplier, setMultiplier] = useState(1.0);
  const [message, setMessage] = useState("");
  const [totalWins, setTotalWins] = useState(0);
  const [tiles, setTiles] = useState<Array<{ revealed: boolean; isChicken: boolean }>>([]);
  const [cashOut, setCashOut] = useState(false);

  const GRID_SIZE = 25;
  const CHICKEN_COUNT = 5;

  const startGame = () => {
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    const soundGen = getSoundGenerator();
    soundGen.playGameStart();

    setCoins(coins - bet);
    setMultiplier(1.0);
    setMessage("Click tiles to find safe spots!");
    setCashOut(false);

    // Create grid with hidden chickens
    const newTiles = Array(GRID_SIZE)
      .fill(null)
      .map(() => ({
        revealed: false,
        isChicken: Math.random() < CHICKEN_COUNT / GRID_SIZE,
      }));

    setTiles(newTiles);
    setGameStarted(true);
  };

  const revealTile = (index: number) => {
    if (!gameStarted || tiles[index].revealed) return;

    const soundGen = getSoundGenerator();
    const newTiles = [...tiles];
    newTiles[index].revealed = true;
    setTiles(newTiles);

    if (newTiles[index].isChicken) {
      // Hit a chicken - game over, lose bet
      soundGen.playLoss();
      setMessage("❌ Hit a chicken! Game Over!");
      setGameStarted(false);
    } else {
      // Safe tile - increase multiplier
      soundGen.playWin();
      const newMultiplier = multiplier + 0.5;
      setMultiplier(newMultiplier);
      setMessage(`✨ Safe! Multiplier: ${newMultiplier.toFixed(1)}x`);
    }
  };

  const handleCashOut = () => {
    if (!gameStarted) return;

    const soundGen = getSoundGenerator();
    soundGen.playJackpot();

    const winAmount = Math.floor(bet * multiplier);
    setCoins((prev) => prev + winAmount);
    setTotalWins((prev) => prev + winAmount);
    setMessage(`💰 Cashed out! Won ${winAmount} coins!`);
    setGameStarted(false);
    setCashOut(true);
  };

  const playAgain = () => {
    setTiles([]);
    setGameStarted(false);
    setMultiplier(1.0);
    setMessage("");
    setCashOut(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex flex-col" style={{ backgroundImage: "url('/images/bg-chicken-game.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
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
                  🐔 Chicken Run
                </h1>
                <p className="text-slate-400 mb-8">Find safe tiles and avoid the chickens!</p>

                {/* Current Multiplier */}
                <div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 font-bold">Current Multiplier</span>
                    <span className="text-3xl font-bold text-neon-green">{multiplier.toFixed(1)}x</span>
                  </div>
                  <div className="text-sm text-slate-400 mt-2">
                    Potential Win: {Math.floor(bet * multiplier)} Coins
                  </div>
                </div>

                {/* Message */}
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                      message.includes("Safe") || message.includes("Cashed")
                        ? "bg-neon-green/20 text-neon-green"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {message}
                  </motion.div>
                )}

                {/* Game Grid */}
                {gameStarted && tiles.length > 0 && (
                  <div className="bg-slate-800 rounded-lg p-6 mb-6 border border-slate-700">
                    <div className="grid grid-cols-5 gap-3">
                      {tiles.map((tile, index) => (
                        <motion.button
                          key={index}
                          whileHover={!tile.revealed ? { scale: 1.05 } : {}}
                          whileTap={!tile.revealed ? { scale: 0.95 } : {}}
                          onClick={() => revealTile(index)}
                          disabled={tile.revealed || !gameStarted}
                          className={`aspect-square rounded-lg font-bold text-2xl transition ${
                            tile.revealed
                              ? tile.isChicken
                                ? "bg-red-600 text-white"
                                : "bg-neon-green text-slate-950"
                              : "bg-blue-600 text-yellow-300 hover:bg-blue-500 cursor-pointer"
                          }`}
                        >
                          {tile.revealed ? tile.isChicken ? "🐔" : "✓" : "?"}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {!gameStarted && !cashOut && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={startGame}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                    >
                      START GAME
                    </motion.button>
                  )}

                  {gameStarted && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCashOut}
                        className="flex-1 py-4 bg-gradient-to-r from-neon-pink to-neon-pink/80 hover:from-neon-pink/90 hover:to-neon-pink/70 text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-pink/50"
                      >
                        💰 CASH OUT
                      </motion.button>
                    </>
                  )}

                  {cashOut && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={playAgain}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-yellow-300 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                    >
                      PLAY AGAIN
                    </motion.button>
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
                    <span className="text-slate-400">Chickens:</span>
                    <span className="text-yellow-300 font-bold">{CHICKEN_COUNT}</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
                <h3 className="text-lg font-bold text-slate-300 mb-4">📋 How to Play</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>✓ Set your bet</li>
                  <li>✓ Click START GAME</li>
                  <li>✓ Reveal safe tiles</li>
                  <li>✓ Avoid {CHICKEN_COUNT} chickens</li>
                  <li>✓ CASH OUT to win!</li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-neon-pink/30 p-6">
                <h3 className="text-lg font-bold text-neon-pink mb-4">🎯 Bet Control</h3>
                <div className="flex gap-2">
                  <Button
                    onClick={() => setBet(Math.max(10, bet - 50))}
                    disabled={gameStarted}
                    className="bg-blue-600 hover:bg-blue-500 text-yellow-300"
                  >
                    -
                  </Button>
                  <input
                    type="number"
                    value={bet}
                    onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                    disabled={gameStarted}
                    className="flex-1 bg-blue-600 text-yellow-300 text-center rounded px-2 py-1 border border-slate-600"
                  />
                  <Button
                    onClick={() => setBet(bet + 50)}
                    disabled={gameStarted}
                    className="bg-blue-600 hover:bg-blue-500 text-yellow-300"
                  >
                    +
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
