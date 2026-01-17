import { Link } from "wouter";
import { CheckCircle, Shield, Zap, BarChart3 } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header - Bright and Clear */}
      <div className="bg-gradient-to-r from-[#00FF88] to-[#00D9FF] py-16 px-4">
        <div className="container mx-auto">
          <Link href="/" className="text-[#0a0e27] hover:text-[#0a0e27]/80 font-bold mb-6 inline-flex items-center gap-2 text-lg">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold text-[#0a0e27] mb-3">Fair Play</h1>
          <p className="text-[#0a0e27] text-2xl font-semibold">Certified Random Number Generation & Transparent Odds</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Promise Section */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00FF88] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-6">Our Fair Play Promise</h2>
          <p className="text-white text-xl leading-relaxed mb-4">
            At Aquastruct Casino, we are committed to providing a fair, transparent, and trustworthy gaming experience. Every game is designed with integrity at its core.
          </p>
          <p className="text-white text-xl leading-relaxed">
            Our platform uses industry-standard Random Number Generation (RNG) technology certified by independent testing laboratories. Every spin, roll, and deal is completely random and unbiased.
          </p>
        </section>

        {/* Core Principles */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Core Fair Play Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certified RNG */}
            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#00D9FF]" />
                <h3 className="text-2xl font-bold text-[#00D9FF]">Certified RNG</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                All games use cryptographically secure Random Number Generators certified by independent testing laboratories. Every outcome is completely random.
              </p>
            </div>

            {/* No Manipulation */}
            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-10 h-10 text-[#FF006E]" />
                <h3 className="text-2xl font-bold text-[#FF006E]">No Manipulation</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                We do not manipulate odds, rig games, or adjust outcomes based on player behavior. Every outcome is determined purely by our certified RNG system.
              </p>
            </div>

            {/* Transparent Odds */}
            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-10 h-10 text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-[#FFD700]">Transparent Odds</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                All game odds, payout rates, and win probabilities are clearly displayed. No hidden mechanics or surprise changes.
              </p>
            </div>

            {/* Regular Audits */}
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-10 h-10 text-[#00FF88]" />
                <h3 className="text-2xl font-bold text-[#00FF88]">Regular Audits</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Our RNG systems and game mechanics are audited quarterly by independent third-party testing laboratories.
              </p>
            </div>
          </div>
        </section>

        {/* Game Details */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Game-Specific Fair Play Details</h2>
          
          <div className="space-y-8">
            {/* Slots */}
            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#FF006E] mb-6">🎰 Slot Machines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>RNG Method:</strong> Mersenne Twister with cryptographic seeding</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 96.5% Return to Player (RTP)</p></div>
                <div><p className="text-white text-lg"><strong>Spin Independence:</strong> Each spin is completely independent</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> GLI (Gaming Laboratories International)</p></div>
              </div>
            </div>

            {/* Poker */}
            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#00D9FF] mb-6">🃏 Poker</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>Shuffling:</strong> Fisher-Yates algorithm with cryptographic randomness</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 98.0% RTP (house edge: 2%)</p></div>
                <div><p className="text-white text-lg"><strong>Deck Integrity:</strong> Standard 52-card deck with no manipulation</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> eCOGRA</p></div>
              </div>
            </div>

            {/* Roulette */}
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#00FF88] mb-6">🎡 Roulette</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>Wheel:</strong> European roulette (37 numbers: 0-36)</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 97.3% RTP (house edge: 2.7%)</p></div>
                <div><p className="text-white text-lg"><strong>Probability:</strong> Each number has 1/37 probability</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> TST (Technical Systems Testing)</p></div>
              </div>
            </div>

            {/* Dice */}
            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#FFD700] mb-6">🎲 Dice Games</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>Dice Roll:</strong> Two 6-sided dice with uniform distribution</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 97.2% RTP (house edge: 2.8%)</p></div>
                <div><p className="text-white text-lg"><strong>Probability:</strong> HIGH/LOW each have 50% probability</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> GLI</p></div>
              </div>
            </div>

            {/* Mines */}
            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#FF006E] mb-6">💣 Mines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>Placement:</strong> 5 mines in 25-tile grid (20% density)</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 95.8% RTP (house edge: 4.2%)</p></div>
                <div><p className="text-white text-lg"><strong>Probability:</strong> Each tile has 20% chance of mine</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> eCOGRA</p></div>
              </div>
            </div>

            {/* Chicken */}
            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-3xl font-bold text-[#00D9FF] mb-6">🐔 Chicken Run</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div><p className="text-white text-lg"><strong>Placement:</strong> 5 chickens in 25-tile grid (20% density)</p></div>
                <div><p className="text-white text-lg"><strong>Payout Rate:</strong> 96.1% RTP (house edge: 3.9%)</p></div>
                <div><p className="text-white text-lg"><strong>Probability:</strong> Each tile has 20% chance of chicken</p></div>
                <div><p className="text-white text-lg"><strong>Verified By:</strong> TST</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* RNG Technology */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00FF88] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-8">Random Number Generation Technology</h2>
          <div className="space-y-4">
            <p className="text-white text-xl">✓ Uses NIST-approved cryptographic algorithms (AES-256)</p>
            <p className="text-white text-xl">✓ Seeds entropy from multiple independent sources</p>
            <p className="text-white text-xl">✓ Generates numbers with uniform distribution</p>
            <p className="text-white text-xl">✓ Cannot be predicted, manipulated, or reverse-engineered</p>
            <p className="text-white text-xl">✓ Passes all NIST statistical tests for randomness</p>
            <p className="text-white text-xl">✓ Audited monthly by independent security researchers</p>
          </div>
        </section>

        {/* Audit Reports */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FFD700] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Independent Audit Reports</h2>
          <div className="space-y-4">
            <p className="text-white text-xl">✓ <strong>GLI (Gaming Laboratories International):</strong> Quarterly RNG certification</p>
            <p className="text-white text-xl">✓ <strong>eCOGRA:</strong> Semi-annual compliance audit</p>
            <p className="text-white text-xl">✓ <strong>TST (Technical Systems Testing):</strong> Annual comprehensive game audit</p>
            <p className="text-white text-xl">✓ <strong>Independent Security Researchers:</strong> Monthly penetration testing</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">How do I know the games are fair?</h3>
              <p className="text-white text-lg">All our games use certified RNG technology and are audited by independent third-party laboratories. We publish audit reports and allow players to request outcome verification.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FF006E] mb-4">Can the house manipulate game outcomes?</h3>
              <p className="text-white text-lg">No. Our RNG system is completely autonomous and cannot be manually overridden. All outcomes are determined purely by our certified random number generator.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00FF88] mb-4">What is the house edge?</h3>
              <p className="text-white text-lg">House edge varies by game (2-4%). This is disclosed in each game's rules. Over long-term play, players can expect to lose approximately this percentage of their bets.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">How often are audits performed?</h3>
              <p className="text-white text-lg">RNG systems are audited quarterly by GLI, compliance audits are performed semi-annually by eCOGRA, and comprehensive game audits are conducted annually by TST.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#00FF88] to-[#00D9FF] rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#0a0e27] mb-4">Questions About Fair Play?</h2>
          <p className="text-[#0a0e27] text-xl mb-8">Contact our support team for any questions about our fair play commitment.</p>
          <a href="mailto:support@playaquacasino.com" className="inline-block bg-[#0a0e27] text-[#00FF88] font-bold py-4 px-10 rounded-lg hover:bg-[#0a0e27]/80 transition-all text-xl">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
