import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ChickenDetail() {
  useScrollToTop();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
      <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] border-b border-[#00FF88]/20 py-6">
        <div className="container mx-auto px-4">
          <button onClick={() => setLocation('/games')} className="text-[#00FF88] hover:text-white mb-4">← Back to Games</button>
          <h1 className="text-4xl font-bold text-white mb-2">🐔 Chicken Run</h1>
          <p className="text-[#00FF88] text-lg">Chase the chicken and cash out before it escapes!</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <img src="/images/game-chicken-premium.png" alt="Chicken Run" className="w-full rounded-lg mb-6 object-cover h-64" />
              <Button onClick={() => setLocation('/play/chicken')} className="w-full bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY NOW</Button>
              <div className="mt-6 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <p className="text-[#00FF88] text-sm font-semibold mb-2">Quick Stats:</p>
                <ul className="text-white text-sm space-y-1">
                  <li>💰 Min Bet: 10 coins</li>
                  <li>💰 Max Bet: 5,000 coins</li>
                  <li>🎯 Multiplier: 1.1x to 10x</li>
                  <li>⭐ Max Payout: 50,000 coins</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <h2 className="text-2xl font-bold text-[#00FF88] mb-6">How to Play Chicken Run</h2>
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Game Overview</h3>
                  <p className="text-sm">Chicken Run is a thrilling chase game! Watch the multiplier increase as the chicken runs. Cash out at the right time to win big, but wait too long and the chicken escapes!</p>
                </div>
                
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Game Mechanics</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Chicken:</strong> Runs across the screen with increasing multiplier</li>
                    <li><strong>Multiplier:</strong> Starts at 1.1x and increases every second</li>
                    <li><strong>Escape:</strong> Chicken escapes randomly (1-30 seconds)</li>
                    <li><strong>Cashout:</strong> Click to secure your winnings</li>
                    <li><strong>Lose:</strong> If chicken escapes before cashout, you lose</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">How to Play</h3>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Set your bet amount (10-5,000 coins)</li>
                    <li>Click START to release the chicken</li>
                    <li>Watch the multiplier increase in real-time</li>
                    <li>Click CASHOUT to secure your winnings</li>
                    <li>If chicken escapes first, you lose your bet</li>
                    <li>Payout = Bet × Multiplier at cashout time</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Strategy Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Start with small multipliers (1.5x - 2x) to learn timing</li>
                    <li>✓ Cashout early for guaranteed wins</li>
                    <li>✓ Higher multipliers = Higher risk of chicken escaping</li>
                    <li>✓ Don't be greedy - secure your winnings!</li>
                    <li>✓ Average escape time is 15 seconds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1a0f3a] via-[#2a1f4a] to-[#1a0f3a] border-t border-[#00FF88]/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Chase the Chicken?</h2>
          <Button onClick={() => setLocation('/play/chicken')} className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY CHICKEN NOW</Button>
        </div>
      </div>
    </div>
  );
}
