import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function RouletteDetail() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
      <div className="bg-gradient-to-r from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] border-b border-[#00FF88]/20 py-6">
        <div className="container mx-auto px-4">
          <button onClick={() => setLocation('/games')} className="text-[#00FF88] hover:text-white mb-4">← Back to Games</button>
          <h1 className="text-4xl font-bold text-white mb-2">🎡 Roulette</h1>
          <p className="text-[#00FF88] text-lg">Spin the wheel and predict the winning number!</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <img src="/images/game-roulette-premium.png" alt="Roulette" className="w-full rounded-lg mb-6 object-cover h-64" />
              <Button onClick={() => setLocation('/play/roulette')} className="w-full bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-6 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY NOW</Button>
              <div className="mt-6 p-4 bg-[#00FF88]/10 rounded-lg border border-[#00FF88]/30">
                <p className="text-[#00FF88] text-sm font-semibold mb-2">Quick Stats:</p>
                <ul className="text-white text-sm space-y-1">
                  <li>💰 Min Bet: 10 coins</li>
                  <li>💰 Max Bet: 5,000 coins</li>
                  <li>🎯 Numbers: 0-36</li>
                  <li>⭐ Payout: Up to 35x</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] rounded-lg p-6 border border-[#00FF88]/20">
              <h2 className="text-2xl font-bold text-[#00FF88] mb-6">How to Play Roulette</h2>
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Game Overview</h3>
                  <p className="text-sm">Roulette is a classic casino game where you predict where the ball will land on a spinning wheel. Place your bets, spin the wheel, and watch the magic happen!</p>
                </div>
                
                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Betting Types</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Straight:</strong> Bet on a single number (35:1 payout)</li>
                    <li><strong>Split:</strong> Bet on 2 adjacent numbers (17:1 payout)</li>
                    <li><strong>Street:</strong> Bet on 3 numbers in a row (11:1 payout)</li>
                    <li><strong>Red/Black:</strong> Bet on color (1:1 payout)</li>
                    <li><strong>Odd/Even:</strong> Bet on odd or even (1:1 payout)</li>
                    <li><strong>High/Low:</strong> Bet on 1-18 or 19-36 (1:1 payout)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Step-by-Step Guide</h3>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Select your bet amount using +/- buttons</li>
                    <li>Click on a number or betting area on the table</li>
                    <li>Click SPIN to start the wheel</li>
                    <li>Watch the ball spin around the wheel</li>
                    <li>The wheel stops and reveals the winning number</li>
                    <li>If you predicted correctly, you win!</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[#00FF88] font-bold text-lg mb-3">Pro Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Even money bets (Red/Black, Odd/Even) have 48.6% win rate</li>
                    <li>✓ Straight bets pay more but are harder to hit</li>
                    <li>✓ Manage your bankroll wisely</li>
                    <li>✓ Play for entertainment, not income</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1a0f3a] via-[#2a1f4a] to-[#1a0f3a] border-t border-[#00FF88]/20 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Spin the Wheel?</h2>
          <Button onClick={() => setLocation('/play/roulette')} className="bg-[#00FF88] hover:bg-[#00FF88]/80 text-black font-bold py-4 px-8 text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 neon-glow">🎮 PLAY ROULETTE NOW</Button>
        </div>
      </div>
    </div>
  );
}
