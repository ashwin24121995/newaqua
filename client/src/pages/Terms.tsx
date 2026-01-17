import { Link } from "wouter";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FF006E] py-16 px-4">
        <div className="container mx-auto">
          <Link href="/" className="text-[#0a0e27] hover:text-[#0a0e27]/80 font-bold mb-6 inline-flex items-center gap-2 text-lg">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold text-[#0a0e27] mb-3">Terms of Use</h1>
          <p className="text-[#0a0e27] text-2xl font-semibold">User Agreement & Legal Terms</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FFD700] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">Terms of Use Agreement</h2>
          <p className="text-white text-xl leading-relaxed">
            By accessing and using Aquastruct Casino, you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, please do not use our platform.
          </p>
        </section>

        {/* Age Requirements */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Age Requirements & Eligibility</h2>
          <div className="space-y-4">
            <p className="text-white text-xl">✓ You must be at least 18 years old to use this platform</p>
            <p className="text-white text-xl">✓ You must provide accurate age verification information</p>
            <p className="text-white text-xl">✓ We reserve the right to verify your age at any time</p>
            <p className="text-white text-xl">✓ Underage users will have their accounts terminated immediately</p>
            <p className="text-white text-xl">✓ You are responsible for ensuring you meet all legal requirements in your jurisdiction</p>
          </div>
        </section>

        {/* Account Responsibility */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Account Responsibility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-10 h-10 text-[#00FF88]" />
                <h3 className="text-2xl font-bold text-[#00FF88]">Your Responsibility</h3>
              </div>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ Keep your password confidential</li>
                <li>✓ Do not share your account with others</li>
                <li>✓ Notify us of unauthorized access immediately</li>
                <li>✓ You are liable for all account activity</li>
              </ul>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-10 h-10 text-[#00D9FF]" />
                <h3 className="text-2xl font-bold text-[#00D9FF]">Prohibited Activities</h3>
              </div>
              <ul className="space-y-3 text-white text-lg">
                <li>✗ Sharing accounts with others</li>
                <li>✗ Using multiple accounts</li>
                <li>✗ Attempting to hack or abuse the system</li>
                <li>✗ Engaging in fraud or illegal activities</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prohibited Conduct */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Prohibited Conduct</h2>
          <p className="text-white text-xl mb-8">You agree NOT to:</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Engage in cheating, hacking, or exploiting game mechanics</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Use bots, scripts, or automated tools to play games</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Attempt to reverse-engineer or modify the platform</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Harass, threaten, or abuse other players or staff</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Post offensive, defamatory, or illegal content</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Engage in money laundering or fraud</p>
            </div>
            <div className="flex items-start gap-4">
              <XCircle className="w-8 h-8 text-[#FF006E] flex-shrink-0 mt-1" />
              <p className="text-white text-lg">Violate any applicable laws or regulations</p>
            </div>
          </div>
        </section>

        {/* Virtual Coins */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Virtual Coins & Balances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00FF88] mb-4">💰 Coin Ownership</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ Virtual coins are NOT real money</li>
                <li>✓ Coins have NO cash value</li>
                <li>✓ Coins cannot be withdrawn or sold</li>
                <li>✓ You have no property rights to coins</li>
              </ul>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">⚠️ Coin Management</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ We may reset coin balances without notice</li>
                <li>✓ Inactive accounts may lose coins</li>
                <li>✓ We reserve the right to remove coins for violations</li>
                <li>✓ Lost coins cannot be recovered</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Account Termination */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Account Termination</h2>
          <p className="text-white text-xl mb-8">We may terminate your account if you:</p>
          <div className="space-y-4">
            <p className="text-white text-lg">• Violate these Terms of Use</p>
            <p className="text-white text-lg">• Engage in prohibited conduct or cheating</p>
            <p className="text-white text-lg">• Provide false information or age verification</p>
            <p className="text-white text-lg">• Violate any applicable laws or regulations</p>
            <p className="text-white text-lg">• Harass or abuse other players or staff</p>
            <p className="text-white text-lg">• Attempt to exploit or hack the platform</p>
            <p className="text-white text-lg">• Remain inactive for 2+ years</p>
          </div>
        </section>

        {/* Liability Disclaimer */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00D9FF] mb-8">Disclaimer of Warranties</h2>
          <div className="space-y-4">
            <p className="text-white text-lg">The platform is provided "AS IS" without any warranties, express or implied.</p>
            <p className="text-white text-lg">We do not guarantee:</p>
            <p className="text-white text-lg">• Uninterrupted or error-free service</p>
            <p className="text-white text-lg">• Specific results or outcomes from gaming</p>
            <p className="text-white text-lg">• Protection against all security threats</p>
            <p className="text-white text-lg">• Availability of the platform at all times</p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00FF88] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-8">Limitation of Liability</h2>
          <p className="text-white text-xl mb-8">To the maximum extent permitted by law:</p>
          <div className="space-y-4">
            <p className="text-white text-lg">• We are not liable for any indirect, incidental, or consequential damages</p>
            <p className="text-white text-lg">• Our total liability is limited to the amount of coins in your account</p>
            <p className="text-white text-lg">• We are not responsible for lost or corrupted data</p>
            <p className="text-white text-lg">• We are not liable for third-party actions or content</p>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FFD700] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">Intellectual Property Rights</h2>
          <div className="space-y-4">
            <p className="text-white text-lg">✓ All platform content, games, and designs are owned by Aquastruct Casino</p>
            <p className="text-white text-lg">✓ You may not copy, modify, or distribute any content without permission</p>
            <p className="text-white text-lg">✓ Your use is limited to personal, non-commercial entertainment</p>
            <p className="text-white text-lg">✓ We retain all rights to our intellectual property</p>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Changes to Terms</h2>
          <p className="text-white text-xl mb-8">We may update these Terms at any time. Continued use of the platform constitutes acceptance of updated terms.</p>
          <div className="space-y-4">
            <p className="text-white text-lg">• We will notify you of significant changes via email</p>
            <p className="text-white text-lg">• You are responsible for reviewing updated terms</p>
            <p className="text-white text-lg">• Changes take effect immediately upon posting</p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00D9FF] mb-8">Governing Law & Jurisdiction</h2>
          <p className="text-white text-xl mb-8">These Terms are governed by applicable international law and the laws of the jurisdictions where our services are provided.</p>
          <div className="space-y-4">
            <p className="text-white text-lg">• Any disputes will be resolved through arbitration or mediation</p>
            <p className="text-white text-lg">• You agree to submit to the jurisdiction of appropriate courts</p>
            <p className="text-white text-lg">• You waive the right to a jury trial</p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#FFD700] to-[#FF006E] rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#0a0e27] mb-4">Questions About Terms?</h2>
          <p className="text-[#0a0e27] text-xl mb-8">Contact our legal team if you have any questions about these Terms of Use.</p>
          <a href="mailto:legal@playaquacasino.com" className="inline-block bg-[#0a0e27] text-[#FFD700] font-bold py-4 px-10 rounded-lg hover:bg-[#0a0e27]/80 transition-all text-xl">
            Contact Legal Team
          </a>
        </section>
      </div>
    </div>
  );
}
