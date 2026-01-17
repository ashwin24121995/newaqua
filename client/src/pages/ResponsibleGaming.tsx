import { Link } from "wouter";
import { AlertCircle, Heart, Shield, HelpCircle } from "lucide-react";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF006E]/10 to-[#FFD700]/10 border-b border-[#FF006E]/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="text-[#FF006E] hover:text-[#FF006E]/80 mb-4 inline-flex items-center gap-2">
              ← Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FF006E] mb-2">Responsible Gaming</h1>
          <p className="text-white/80 text-lg">Our Commitment to Player Safety and Wellbeing</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">Our Responsible Gaming Commitment</h2>
          <p className="text-white/80 mb-4">
            At Aquastruct Casino, we believe that gaming should be fun, safe, and responsible. We are committed to promoting healthy gaming habits and providing tools and resources to help players maintain control over their gaming activities.
          </p>
          <p className="text-white/80">
            This is a free entertainment platform with no real money involved. However, we recognize that gaming can become problematic for some individuals, and we take this responsibility seriously.
          </p>
        </section>

        {/* Key Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Core Responsible Gaming Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#FF006E]/10 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-[#FF006E] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#FF006E] mb-2">Age Verification</h3>
                  <p className="text-white/80 text-sm">
                    Players must be 18+ years old. We enforce strict age verification to protect minors from gaming.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00FF88]/10 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Heart className="text-[#00FF88] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#00FF88] mb-2">Player Wellbeing</h3>
                  <p className="text-white/80 text-sm">
                    We prioritize player mental health and provide resources for those experiencing gaming-related issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Shield className="text-[#FFD700] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#FFD700] mb-2">Self-Exclusion Options</h3>
                  <p className="text-white/80 text-sm">
                    Players can self-exclude from the platform for 24 hours to 1 year if they need a break.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <HelpCircle className="text-[#00D9FF] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Support Resources</h3>
                  <p className="text-white/80 text-sm">
                    We provide links to professional gambling addiction support organizations and counseling services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time Management Tools */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">Time Management Tools</h2>
          <p className="text-white/80 mb-4">
            We provide tools to help players manage their gaming time:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Session Reminders:</strong> Receive notifications after 30, 60, and 120 minutes of continuous play</li>
            <li>✓ <strong>Daily Limits:</strong> Set maximum daily gaming session duration (15 minutes to 8 hours)</li>
            <li>✓ <strong>Weekly Limits:</strong> Set maximum weekly gaming hours (1 hour to 40 hours)</li>
            <li>✓ <strong>Break Reminders:</strong> Automatic prompts to take breaks every 30 minutes</li>
            <li>✓ <strong>Session Tracking:</strong> View your gaming history and session duration</li>
          </ul>
        </section>

        {/* Self-Exclusion */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">Self-Exclusion Program</h2>
          <p className="text-white/80 mb-4">
            If you need a break from gaming, we offer a comprehensive self-exclusion program:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">Self-Exclusion Duration Options:</h3>
              <ul className="space-y-2 text-white/80">
                <li>✓ 24 hours (1 day)</li>
                <li>✓ 7 days (1 week)</li>
                <li>✓ 30 days (1 month)</li>
                <li>✓ 90 days (3 months)</li>
                <li>✓ 180 days (6 months)</li>
                <li>✓ 365 days (1 year)</li>
                <li>✓ Permanent self-exclusion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">During Self-Exclusion:</h3>
              <ul className="space-y-2 text-white/80">
                <li>✓ Your account will be completely disabled</li>
                <li>✓ You cannot log in or access any games</li>
                <li>✓ All promotional emails will be suspended</li>
                <li>✓ Your virtual coins will be safely stored</li>
                <li>✓ You can contact support for early termination (with a 24-hour waiting period)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-6">Warning Signs of Problem Gaming</h2>
          <p className="text-white/80 mb-6">
            If you experience any of the following, it may be time to seek help:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Behavioral Signs:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Spending more time gaming than intended</li>
                <li>• Thinking about gaming when not playing</li>
                <li>• Gaming to escape problems or negative emotions</li>
                <li>• Lying to others about gaming habits</li>
                <li>• Neglecting work, school, or relationships</li>
                <li>• Losing interest in other activities</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FF006E] mb-3">Emotional Signs:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Anxiety or irritability when not gaming</li>
                <li>• Mood swings related to gaming outcomes</li>
                <li>• Feeling guilty or ashamed about gaming</li>
                <li>• Using gaming to cope with stress or depression</li>
                <li>• Difficulty controlling gaming urges</li>
                <li>• Chasing losses by playing more</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="mb-12 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">Professional Support Resources</h2>
          <p className="text-white/80 mb-6">
            If you or someone you know is struggling with gaming, professional help is available:
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#00D9FF]/10 to-transparent border border-[#00D9FF]/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">🌍 International Resources</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ <strong>Gamblers Anonymous:</strong> <a href="https://www.gamblersanonymous.org" className="text-[#00D9FF] hover:text-[#00D9FF]/80">www.gamblersanonymous.org</a></li>
                <li>✓ <strong>National Problem Gambling Helpline (USA):</strong> 1-800-522-4700</li>
                <li>✓ <strong>Problem Gambling Institute:</strong> <a href="https://www.problemgambling.org" className="text-[#00D9FF] hover:text-[#00D9FF]/80">www.problemgambling.org</a></li>
                <li>✓ <strong>Gambling Therapy:</strong> <a href="https://www.gamblingtherapy.org" className="text-[#00D9FF] hover:text-[#00D9FF]/80">www.gamblingtherapy.org</a></li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00FF88]/10 to-transparent border border-[#00FF88]/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#00FF88] mb-2">🇮🇳 India-Specific Resources</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ <strong>All India Gaming Council:</strong> Provides gaming addiction support</li>
                <li>✓ <strong>AAGC Helpline:</strong> Available for counseling and support</li>
                <li>✓ <strong>Mental Health Support:</strong> Contact local mental health services</li>
                <li>✓ <strong>Addiction Counseling:</strong> Available through government health centers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-[#FFD700] mb-2">💬 Counseling Services</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✓ <strong>Cognitive Behavioral Therapy (CBT):</strong> Effective treatment for gaming addiction</li>
                <li>✓ <strong>Individual Counseling:</strong> One-on-one sessions with licensed therapists</li>
                <li>✓ <strong>Group Support:</strong> Support groups for people with gaming issues</li>
                <li>✓ <strong>Family Counseling:</strong> Help for families affected by gaming addiction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Account Controls */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">Account Control Features</h2>
          <p className="text-white/80 mb-4">
            Players have full control over their gaming experience:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Deposit Limits:</strong> Set maximum daily/weekly/monthly virtual coin allocation</li>
            <li>✓ <strong>Loss Limits:</strong> Set maximum acceptable losses per session</li>
            <li>✓ <strong>Betting Limits:</strong> Restrict maximum bet amount per game</li>
            <li>✓ <strong>Session Duration Limits:</strong> Automatic logout after set time period</li>
            <li>✓ <strong>Reality Checks:</strong> Periodic reminders of time spent and coins used</li>
            <li>✓ <strong>Account Restrictions:</strong> Temporarily disable account access</li>
            <li>✓ <strong>Email Preferences:</strong> Opt-out of promotional communications</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">Is this platform addictive?</h3>
              <p className="text-white/80">
                Gaming can be engaging and entertaining, but it can become problematic for some individuals. We provide tools and resources to help maintain healthy gaming habits.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00FF88] mb-2">Can I set limits on my account?</h3>
              <p className="text-white/80">
                Yes! You can set time limits, session duration limits, and receive regular reminders. You can also use self-exclusion if you need a break.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FFD700] mb-2">What should I do if I think I have a problem?</h3>
              <p className="text-white/80">
                Contact our support team or reach out to professional gambling addiction services. We provide links to counseling and support organizations.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Is self-exclusion permanent?</h3>
              <p className="text-white/80">
                Self-exclusion can be temporary (24 hours to 1 year) or permanent. For permanent exclusion, you'll need to contact support and confirm your decision after a waiting period.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#FF006E]/10 to-[#00FF88]/10 border border-[#FF006E]/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">Need Help?</h2>
          <p className="text-white/80 mb-6">
            Our support team is available 24/7 to help with responsible gaming questions and support options.
          </p>
          <a href="mailto:support@playaquacasino.com" className="inline-block bg-gradient-to-r from-[#FF006E] to-[#FF006E] text-white font-bold py-3 px-8 rounded-lg hover:from-[#FF006E]/80 hover:to-[#FF006E]/80 transition-all">
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
}
