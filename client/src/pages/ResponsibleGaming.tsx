import { Link } from "wouter";
import { AlertCircle, Heart, Shield, HelpCircle } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF006E] to-[#FFD700] py-16 px-4">
        <div className="container mx-auto">
          <Link href="/">
            <a className="text-[#0a0e27] hover:text-[#0a0e27]/80 font-bold mb-6 inline-flex items-center gap-2 text-lg">
              ← Back to Home
            </a>
          </Link>
          <h1 className="text-6xl font-bold text-[#0a0e27] mb-3">Responsible Gaming</h1>
          <p className="text-[#0a0e27] text-2xl font-semibold">Your Safety and Wellbeing Matter to Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Pledge */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-6">Our Responsible Gaming Pledge</h2>
          <p className="text-white text-xl leading-relaxed">
            We are committed to promoting safe and responsible gaming. Gaming should be fun and entertaining, never a source of harm or financial distress. Our platform is designed with player safety as a top priority.
          </p>
        </section>

        {/* Core Elements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Age Verification */}
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#00FF88]" />
                <h3 className="text-2xl font-bold text-[#00FF88]">Age Verification</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Players must be 18 years or older. We verify age during registration and take underage access very seriously.
              </p>
            </div>

            {/* Self-Exclusion */}
            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-10 h-10 text-[#00D9FF]" />
                <h3 className="text-2xl font-bold text-[#00D9FF]">Self-Exclusion Options</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Players can set limits on playtime, spending, or self-exclude from the platform entirely for any duration.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-10 h-10 text-[#FF006E]" />
                <h3 className="text-2xl font-bold text-[#FF006E]">Transparent Information</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                All game odds, house edges, and payout rates are clearly displayed. No hidden mechanics or misleading information.
              </p>
            </div>

            {/* Support Resources */}
            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-10 h-10 text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-[#FFD700]">Support Resources</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                We provide links to professional gambling addiction support services and counseling resources.
              </p>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Warning Signs of Problem Gaming</h2>
          <p className="text-white text-xl mb-8">Watch for these signs in yourself or others:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Spending more time or money than intended</p>
            </div>
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Neglecting personal or professional responsibilities</p>
            </div>
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Gaming to escape problems or relieve stress</p>
            </div>
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Lying about gaming habits to friends or family</p>
            </div>
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Experiencing financial difficulties</p>
            </div>
            <div className="bg-[#0a0e27] border-2 border-[#FF006E] rounded-lg p-6">
              <p className="text-white text-lg">🚩 Feeling anxious or irritable when not gaming</p>
            </div>
          </div>
        </section>

        {/* Get Help */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-10">Get Help Now</h2>
          <p className="text-white text-xl mb-10">If you or someone you know is struggling with gaming, help is available:</p>
          
          <div className="space-y-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00FF88] mb-4">🆘 National Problem Gambling Helpline</h3>
              <p className="text-white text-lg mb-3"><strong>Phone:</strong> 1-800-GAMBLER (1-800-426-2537)</p>
              <p className="text-white text-lg mb-3"><strong>Available:</strong> 24/7, Free and Confidential</p>
              <p className="text-white text-lg"><strong>Services:</strong> Counseling, referrals, and support for problem gambling</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">💬 Gamblers Anonymous</h3>
              <p className="text-white text-lg mb-3"><strong>Website:</strong> www.gamblersanonymous.org</p>
              <p className="text-white text-lg mb-3"><strong>Services:</strong> Support groups, meetings, peer support</p>
              <p className="text-white text-lg"><strong>Available:</strong> Worldwide meetings and online support</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">🏥 NCPG (National Council on Problem Gambling)</h3>
              <p className="text-white text-lg mb-3"><strong>Website:</strong> www.ncpg.org</p>
              <p className="text-white text-lg mb-3"><strong>Services:</strong> Resources, research, and referrals</p>
              <p className="text-white text-lg"><strong>Available:</strong> Information and professional referrals</p>
            </div>
          </div>
        </section>

        {/* Player Controls */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00D9FF] mb-8">Player Control Features</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Set Spending Limits</h3>
              <p className="text-white text-lg">Set daily, weekly, or monthly limits on virtual coin spending to maintain control.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Time Management Tools</h3>
              <p className="text-white text-lg">Set playtime limits and receive reminders when you've been gaming for extended periods.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Self-Exclusion</h3>
              <p className="text-white text-lg">Temporarily or permanently exclude yourself from the platform with no questions asked.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Reality Checks</h3>
              <p className="text-white text-lg">Receive periodic notifications about your gaming session duration and coin balance.</p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00FF88] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-8">Our Commitment to Responsible Gaming</h2>
          <div className="space-y-4">
            <p className="text-white text-xl">✓ We never encourage excessive gaming or spending</p>
            <p className="text-white text-xl">✓ We do not target vulnerable populations</p>
            <p className="text-white text-xl">✓ We provide clear information about odds and house edges</p>
            <p className="text-white text-xl">✓ We support responsible gaming organizations</p>
            <p className="text-white text-xl">✓ We train our support staff on problem gaming recognition</p>
            <p className="text-white text-xl">✓ We regularly review and improve our responsible gaming measures</p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#FF006E] to-[#FFD700] rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#0a0e27] mb-4">Need Support?</h2>
          <p className="text-[#0a0e27] text-xl mb-8">Contact our support team if you have concerns about your gaming habits or need assistance.</p>
          <a href="mailto:support@playaquacasino.com" className="inline-block bg-[#0a0e27] text-[#FF006E] font-bold py-4 px-10 rounded-lg hover:bg-[#0a0e27]/80 transition-all text-xl">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
