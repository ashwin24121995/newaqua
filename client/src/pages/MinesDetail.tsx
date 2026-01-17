import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function MinesDetail() {
  useScrollToTop();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
      <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] border-b border-[#00FF88]/20 py-6">
        <div className="container mx-auto px-4">
          <button onClick={() => setLocation('/games')} className="text-[#00FF88] hover:text-white mb-4">← Back to Games</button>
          <h1 className="text-4xl font-bold text-white mb-2">💣 Mines</h1>
          <p className="text-[#00FF88] text-lg">Avoid the mines and reveal safe tiles to multiply your winnings!</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <img src="/images/game-mines-premium.webp" alt="Mines" className="w-full rounded-lg mb-6 object-cover h-64" />
              <Button onClick={() => setLocation('/play/mines')} className="w-full bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY NOW</Button>
              <div className="mt-6 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <p className="text-[#00FF88] text-sm font-semibold mb-2">Quick Stats:</p>
                <ul className="text-white text-sm space-y-1">
                  <li>💰 Min Bet: 10 coins</li>
                  <li>💰 Max Bet: 5,000 coins</li>
                  <li>🎯 Grid: 5x5 (25 tiles)</li>
                  <li>⭐ Max Multiplier: 25x</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <h2 className="text-2xl font-bold text-[#00FF88] mb-6">How to Play Mines</h2>
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Game Overview</h3>
                  <p className="text-sm">Mines is a high-risk, high-reward game. A 5x5 grid contains hidden mines. Reveal safe tiles to increase your multiplier, but hit a mine and you lose!</p>
                </div>
                
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Game Mechanics</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Grid:</strong> 5x5 grid with 25 tiles total</li>
                    <li><strong>Mines:</strong> 3-5 hidden mines (you choose difficulty)</li>
                    <li><strong>Safe Tiles:</strong> Remaining tiles are safe</li>
                    <li><strong>Multiplier:</strong> Increases with each safe tile revealed</li>
                    <li><strong>Cashout:</strong> Cash out anytime to secure your winnings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">How to Play</h3>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Set your bet amount (10-5,000 coins)</li>
                    <li>Choose difficulty (3, 4, or 5 mines)</li>
                    <li>Click PLAY to start the game</li>
                    <li>Click tiles to reveal them</li>
                    <li>Each safe tile increases your multiplier</li>
                    <li>Hit a mine = Game Over, lose your bet</li>
                    <li>Click CASHOUT to secure your winnings</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Strategy Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Start with 3 mines (easier) to learn the game</li>
                    <li>✓ Cashout early to secure small wins</li>
                    <li>✓ Higher risk = Higher potential multiplier</li>
                    <li>✓ Don't get greedy - cashout before hitting a mine!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1a0f3a] via-[#2a1f4a] to-[#1a0f3a] border-t border-[#00FF88]/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Avoid the Mines?</h2>
          <Button onClick={() => setLocation('/play/mines')} className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY MINES NOW</Button>
        </div>
      </div>
    </div>
  );
}
