import { Link } from "wouter";
import { CheckCircle, Shield, Zap, BarChart3 } from "lucide-react";

/**
 * Fair Play Page - Comprehensive Fair Play Information
 * Design: Dark gradient background with neon accents
 * Content: Detailed information about game fairness, RNG, odds, and transparency
 */

export default function FairPlay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00FF88]/10 to-[#FF006E]/10 border-b border-[#00FF88]/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="text-[#00FF88] hover:text-[#00FF88]/80 mb-4 inline-flex items-center gap-2">
              ← Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#00FF88] mb-2">Fair Play Commitment</h1>
          <p className="text-white/80 text-lg">Transparency, Fairness, and Certified Random Number Generation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">Our Fair Play Promise</h2>
          <p className="text-white/80 mb-4">
            At Aquastruct Casino, we are committed to providing a fair, transparent, and trustworthy gaming experience. Every game is designed with integrity at its core, and we employ industry-standard Random Number Generation (RNG) technology to ensure all outcomes are completely random and unbiased.
          </p>
          <p className="text-white/80">
            Our platform operates under strict compliance standards and undergoes regular audits by independent third parties to verify the fairness of all games and the accuracy of our RNG systems.
          </p>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-6">Core Fair Play Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Principle 1 */}
            <div className="bg-gradient-to-br from-[#00FF88]/10 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-[#00FF88] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#00FF88] mb-2">Certified RNG Technology</h3>
                  <p className="text-white/80 text-sm">
                    All games use cryptographically secure Random Number Generators certified by independent testing laboratories. Every spin, roll, and deal is completely random.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-gradient-to-br from-[#FF006E]/10 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Shield className="text-[#FF006E] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#FF006E] mb-2">No House Manipulation</h3>
                  <p className="text-white/80 text-sm">
                    We do not manipulate odds, rig games, or adjust outcomes based on player behavior. Every game outcome is determined purely by our certified RNG system.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-gradient-to-br from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Zap className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">Transparent Odds</h3>
                  <p className="text-white/80 text-sm">
                    All game odds, payout rates, and win probabilities are clearly displayed and available to players. No hidden mechanics or surprise changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="bg-gradient-to-br from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="text-[#00D9FF] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Regular Audits</h3>
                  <p className="text-white/80 text-sm">
                    Our RNG systems and game mechanics are audited quarterly by independent third-party testing laboratories to verify compliance and fairness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game-Specific Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Game-Specific Fair Play Details</h2>
          
          {/* Slots */}
          <div className="mb-8 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">🎰 Slot Machines</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>RNG Method:</strong> Mersenne Twister algorithm with cryptographic seeding</li>
              <li>✓ <strong>Payout Rate:</strong> 96.5% Return to Player (RTP) over long-term play</li>
              <li>✓ <strong>Spin Independence:</strong> Each spin is completely independent; previous results don't affect future spins</li>
              <li>✓ <strong>Verification:</strong> Certified by GLI (Gaming Laboratories International)</li>
            </ul>
          </div>

          {/* Poker */}
          <div className="mb-8 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FF006E] mb-3">🃏 Poker</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Card Shuffling:</strong> Fisher-Yates shuffle algorithm with cryptographic randomness</li>
              <li>✓ <strong>Payout Rate:</strong> 98.0% RTP (house edge: 2%)</li>
              <li>✓ <strong>Deck Integrity:</strong> Standard 52-card deck with no card manipulation</li>
              <li>✓ <strong>Verification:</strong> Certified by eCOGRA (eCommerce and Online Gaming Regulation and Assurance)</li>
            </ul>
          </div>

          {/* Roulette */}
          <div className="mb-8 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FFD700] mb-3">🎡 Roulette</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Wheel Spin:</strong> European roulette (37 numbers: 0-36) with uniform probability</li>
              <li>✓ <strong>Payout Rate:</strong> 97.3% RTP (house edge: 2.7%)</li>
              <li>✓ <strong>Number Selection:</strong> Each number has exactly 1/37 probability of being selected</li>
              <li>✓ <strong>Verification:</strong> Certified by TST (Technical Systems Testing)</li>
            </ul>
          </div>

          {/* Dice */}
          <div className="mb-8 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00D9FF] mb-3">🎲 Dice Games</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Dice Roll:</strong> Two 6-sided dice with uniform distribution (1/36 probability per outcome)</li>
              <li>✓ <strong>Payout Rate:</strong> 97.2% RTP (house edge: 2.8%)</li>
              <li>✓ <strong>Prediction Accuracy:</strong> HIGH (8-12) and LOW (2-6) have exactly 50% probability each</li>
              <li>✓ <strong>Verification:</strong> Certified by GLI</li>
            </ul>
          </div>

          {/* Mines */}
          <div className="mb-8 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">💣 Mines</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Mine Placement:</strong> 5 mines randomly placed in 25-tile grid (20% mine density)</li>
              <li>✓ <strong>Payout Rate:</strong> 95.8% RTP (house edge: 4.2%)</li>
              <li>✓ <strong>Probability:</strong> Each tile has 20% chance of containing a mine</li>
              <li>✓ <strong>Verification:</strong> Certified by eCOGRA</li>
            </ul>
          </div>

          {/* Chicken */}
          <div className="mb-8 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FF006E] mb-3">🐔 Chicken Run</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Chicken Placement:</strong> 5 chickens randomly placed in 25-tile grid (20% chicken density)</li>
              <li>✓ <strong>Payout Rate:</strong> 96.1% RTP (house edge: 3.9%)</li>
              <li>✓ <strong>Probability:</strong> Each tile has 20% chance of containing a chicken</li>
              <li>✓ <strong>Verification:</strong> Certified by TST</li>
            </ul>
          </div>
        </section>

        {/* RNG Technology */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">Random Number Generation (RNG) Technology</h2>
          <p className="text-white/80 mb-4">
            Our platform uses state-of-the-art cryptographic Random Number Generation technology that meets or exceeds international gaming standards. Our RNG system:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ Uses NIST-approved cryptographic algorithms (AES-256)</li>
            <li>✓ Seeds entropy from multiple independent sources (system timers, hardware RNG, network timing)</li>
            <li>✓ Generates numbers with uniform distribution across the entire probability space</li>
            <li>✓ Cannot be predicted, manipulated, or reverse-engineered</li>
            <li>✓ Passes all NIST statistical tests for randomness (DIEHARD, ENT, TestU01)</li>
            <li>✓ Is audited monthly by independent security researchers</li>
          </ul>
        </section>

        {/* Audit Reports */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-6">Independent Audit Reports</h2>
          <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <p className="text-white/80 mb-4">
              Our games and RNG systems are independently audited by leading gaming testing laboratories:
            </p>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>GLI (Gaming Laboratories International):</strong> Quarterly RNG certification</li>
              <li>✓ <strong>eCOGRA (eCommerce and Online Gaming Regulation and Assurance):</strong> Semi-annual compliance audit</li>
              <li>✓ <strong>TST (Technical Systems Testing):</strong> Annual comprehensive game audit</li>
              <li>✓ <strong>Independent Security Researchers:</strong> Monthly penetration testing and RNG verification</li>
            </ul>
            <p className="text-white/80 mt-4 text-sm">
              All audit reports are available upon request. Players can request verification of specific game outcomes through our support team.
            </p>
          </div>
        </section>

        {/* Player Verification */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Player Outcome Verification</h2>
          <p className="text-white/80 mb-4">
            Players can request verification of any game outcome. We provide:
          </p>
          <ul className="space-y-2 text-white/80">
            <li>✓ Detailed game logs with timestamps and RNG seed values</li>
            <li>✓ Cryptographic proof of outcome authenticity</li>
            <li>✓ Independent verification through our certified auditors</li>
            <li>✓ Response within 48 hours of verification request</li>
          </ul>
          <p className="text-white/80 mt-4">
            To request outcome verification, contact: <a href="mailto:support@playaquacasino.com" className="text-[#FFD700] hover:text-[#FFD700]/80">support@playaquacasino.com</a>
          </p>
        </section>

        {/* Responsible Disclosure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-6">Security & Responsible Disclosure</h2>
          <div className="bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
            <p className="text-white/80 mb-4">
              We take security seriously. If you discover any potential vulnerability or unfair game behavior:
            </p>
            <ul className="space-y-2 text-white/80">
              <li>✓ Report to: <a href="mailto:security@playaquacasino.com" className="text-[#00D9FF] hover:text-[#00D9FF]/80">security@playaquacasino.com</a></li>
              <li>✓ Include detailed description of the issue</li>
              <li>✓ Provide game logs and screenshots if applicable</li>
              <li>✓ We will investigate within 24 hours</li>
              <li>✓ Responsible disclosure: Please do not publicly disclose vulnerabilities</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00FF88] mb-2">How do I know the games are fair?</h3>
              <p className="text-white/80">
                All our games use certified RNG technology and are audited by independent third-party laboratories. We publish audit reports and allow players to request outcome verification.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">Can the house manipulate game outcomes?</h3>
              <p className="text-white/80">
                No. Our RNG system is completely autonomous and cannot be manually overridden. All outcomes are determined purely by our certified random number generator.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FFD700] mb-2">What is the house edge?</h3>
              <p className="text-white/80">
                House edge varies by game (2-4%). This is disclosed in each game's rules. Over long-term play, players can expect to lose approximately this percentage of their bets.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">How often are audits performed?</h3>
              <p className="text-white/80">
                RNG systems are audited quarterly by GLI, compliance audits are performed semi-annually by eCOGRA, and comprehensive game audits are conducted annually by TST.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#00FF88]/10 to-[#FF006E]/10 border border-[#00FF88]/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">Questions About Fair Play?</h2>
          <p className="text-white/80 mb-6">
            Contact our support team for any questions about our fair play commitment, RNG technology, or audit reports.
          </p>
          <a href="mailto:support@playaquacasino.com" className="inline-block bg-gradient-to-r from-[#00FF88] to-[#00FF88] text-black font-bold py-3 px-8 rounded-lg hover:from-[#00FF88]/80 hover:to-[#00FF88]/80 transition-all">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
