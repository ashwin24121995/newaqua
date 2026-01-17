import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function PokerGame() {
  const [, setLocation] = useLocation();
  const [coins, setCoins] = useState(5000);
  const [bet, setBet] = useState(100);
  const [gameState, setGameState] = useState<"betting" | "playing" | "result">("betting");
  const [playerCards, setPlayerCards] = useState<string[]>([]);
  const [dealerCards, setDealerCards] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<"win" | "lose" | "draw" | null>(null);

  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  const generateCard = () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return `${rank}${suit}`;
  };

  const getCardValue = (card: string) => {
    const rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (["K", "Q", "J"].includes(rank)) return 10;
    return parseInt(rank);
  };

  const calculateHand = (cards: string[]) => {
    return cards.reduce((sum, card) => sum + getCardValue(card), 0);
  };

  const dealCards = () => {
    if (coins < bet) {
      setMessage("Not enough coins!");
      return;
    }

    setCoins(coins - bet);
    const player = [generateCard(), generateCard()];
    const dealer = [generateCard(), generateCard()];
    setPlayerCards(player);
    setDealerCards([dealer[0], "?"]);
    setGameState("playing");
    setMessage("Hit or Stand?");
    setResult(null);
  };

  const hit = () => {
    const newCards = [...playerCards, generateCard()];
    setPlayerCards(newCards);
    const value = calculateHand(newCards);

    if (value > 21) {
      endGame("lose", "Bust! You went over 21");
    }
  };

  const stand = () => {
    const playerValue = calculateHand(playerCards);
    const fullDealer = dealerCards.map((card) => (card === "?" ? generateCard() : card));
    let dealerValue = calculateHand(fullDealer);

    setDealerCards(fullDealer);

    if (dealerValue > 21) {
      endGame("win", "Dealer bust! You win!");
    } else if (playerValue > dealerValue) {
      endGame("win", `You win! ${playerValue} vs ${dealerValue}`);
    } else if (playerValue < dealerValue) {
      endGame("lose", `You lose! ${playerValue} vs ${dealerValue}`);
    } else {
      endGame("draw", "It's a draw!");
    }
  };

  const endGame = (res: "win" | "lose" | "draw", msg: string) => {
    setResult(res);
    setMessage(msg);
    setGameState("result");

    if (res === "win") {
      const winAmount = bet * 2;
      setCoins((prev) => prev + winAmount);
    } else if (res === "draw") {
      setCoins((prev) => prev + bet);
    }
  };

  const playAgain = () => {
    setGameState("betting");
    setPlayerCards([]);
    setDealerCards([]);
    setMessage("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 flex flex-col" style={{ backgroundImage: "url('/images/bg-poker-game.png')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
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
                🃏 Poker
              </h1>
              <p className="text-slate-400 mb-8">Beat the dealer to win!</p>

              {/* Game Table */}
              <div className="bg-gradient-to-b from-green-900/30 to-green-950/30 rounded-lg p-8 mb-8 border-2 border-green-500/30">
                {/* Dealer Cards */}
                <div className="mb-12">
                  <p className="text-slate-400 mb-3 font-bold">Dealer's Hand</p>
                  <div className="flex gap-4">
                    {dealerCards.map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="w-20 h-28 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center text-3xl font-bold border-2 border-red-400 shadow-lg"
                      >
                        {card}
                      </motion.div>
                    ))}
                  </div>
                  {gameState === "result" && (
                    <p className="text-neon-pink mt-2">
                      Total: {calculateHand(dealerCards.filter((c) => c !== "?"))}
                    </p>
                  )}
                </div>

                {/* Player Cards */}
                <div>
                  <p className="text-slate-400 mb-3 font-bold">Your Hand</p>
                  <div className="flex gap-4 mb-4">
                    {playerCards.map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ rotateY: 90 }}
                        animate={{ rotateY: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="w-20 h-28 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-3xl font-bold border-2 border-blue-400 shadow-lg"
                      >
                        {card}
                      </motion.div>
                    ))}
                  </div>
                  {playerCards.length > 0 && (
                    <p className="text-neon-green font-bold">Total: {calculateHand(playerCards)}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center text-lg font-bold p-4 rounded-lg mb-6 ${
                    result === "win"
                      ? "bg-neon-green/20 text-neon-green"
                      : result === "lose"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-neon-pink/20 text-neon-pink"
                  }`}
                >
                  {message}
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {gameState === "betting" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={dealCards}
                    className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                  >
                    DEAL CARDS
                  </motion.button>
                )}

                {gameState === "playing" && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={hit}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-pink to-neon-pink/80 hover:from-neon-pink/90 hover:to-neon-pink/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-pink/50"
                    >
                      HIT
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={stand}
                      className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
                    >
                      STAND
                    </motion.button>
                  </>
                )}

                {gameState === "result" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={playAgain}
                    className="flex-1 py-4 bg-gradient-to-r from-neon-green to-neon-green/80 hover:from-neon-green/90 hover:to-neon-green/70 text-slate-950 font-bold text-xl rounded-lg transition shadow-lg shadow-neon-green/50"
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
              <h3 className="text-xl font-bold text-neon-green mb-4">🎯 Bet</h3>
              <div className="flex gap-2 mb-4">
                <Button
                  onClick={() => setBet(Math.max(10, bet - 50))}
                  disabled={gameState !== "betting"}
                  className="bg-slate-700 hover:bg-slate-600 text-white"
                >
                  -
                </Button>
                <input
                  type="number"
                  value={bet}
                  onChange={(e) => setBet(Math.max(10, parseInt(e.target.value) || 10))}
                  disabled={gameState !== "betting"}
                  className="flex-1 bg-slate-700 text-white text-center rounded px-2 py-1 border border-slate-600"
                />
                <Button
                  onClick={() => setBet(bet + 50)}
                  disabled={gameState !== "betting"}
                  className="bg-slate-700 hover:bg-slate-600 text-white"
                >
                  +
                </Button>
              </div>
              <p className="text-slate-400 text-sm">Current: {bet} Coins</p>
            </Card>

            <Card className="bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 p-6">
              <h3 className="text-lg font-bold text-slate-300 mb-4">📋 Rules</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Get closer to 21 than dealer</li>
                <li>✓ Don't go over 21 (bust)</li>
                <li>✓ Win = 2x your bet</li>
                <li>✓ Draw = get bet back</li>
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
