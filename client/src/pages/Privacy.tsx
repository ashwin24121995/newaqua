import { Link } from "wouter";
import { Lock, Eye, Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00D9FF] to-[#00FF88] py-16 px-4">
        <div className="container mx-auto">
          <Link href="/" className="text-[#0a0e27] hover:text-[#0a0e27]/80 font-bold mb-6 inline-flex items-center gap-2 text-lg">
            ← Back to Home
          </Link>
          <h1 className="text-6xl font-bold text-[#0a0e27] mb-3">Privacy Policy</h1>
          <p className="text-[#0a0e27] text-2xl font-semibold">Your Data Privacy & Protection</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00D9FF] mb-6">Privacy Policy Overview</h2>
          <p className="text-white text-xl leading-relaxed">
            At Aquastruct Casino, we are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Information We Collect</h2>
          <div className="space-y-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00FF88] mb-4">📝 Account Information</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ Username and password</li>
                <li>✓ Email address</li>
                <li>✓ Age verification information</li>
                <li>✓ Account preferences and settings</li>
              </ul>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">🎮 Gaming Activity</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ Games played and frequency</li>
                <li>✓ Coin transactions and balances</li>
                <li>✓ Game results and statistics</li>
                <li>✓ Session duration and timestamps</li>
              </ul>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FF006E] mb-4">💻 Technical Information</h3>
              <ul className="space-y-3 text-white text-lg">
                <li>✓ IP address and device information</li>
                <li>✓ Browser type and version</li>
                <li>✓ Operating system</li>
                <li>✓ Cookies and tracking data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Usage */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FFD700] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-8">How We Use Your Information</h2>
          <div className="space-y-4">
            <p className="text-white text-xl">✓ To provide and improve our gaming services</p>
            <p className="text-white text-xl">✓ To verify your age and prevent underage access</p>
            <p className="text-white text-xl">✓ To process account transactions and manage your account</p>
            <p className="text-white text-xl">✓ To detect and prevent fraud or abuse</p>
            <p className="text-white text-xl">✓ To send you important account notifications</p>
            <p className="text-white text-xl">✓ To comply with legal and regulatory requirements</p>
            <p className="text-white text-xl">✓ To analyze platform usage and improve user experience</p>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-10">Data Security & Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-10 h-10 text-[#00FF88]" />
                <h3 className="text-2xl font-bold text-[#00FF88]">Encryption</h3>
              </div>
              <p className="text-white text-lg">All data is encrypted using AES-256 encryption. Sensitive information is transmitted via HTTPS/TLS protocols.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#00D9FF]" />
                <h3 className="text-2xl font-bold text-[#00D9FF]">Access Control</h3>
              </div>
              <p className="text-white text-lg">Only authorized personnel have access to your data. We implement strict access controls and authentication measures.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-10 h-10 text-[#FF006E]" />
                <h3 className="text-2xl font-bold text-[#FF006E]">Monitoring</h3>
              </div>
              <p className="text-white text-lg">We continuously monitor our systems for suspicious activity and unauthorized access attempts.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-[#FFD700]" />
                <h3 className="text-2xl font-bold text-[#FFD700]">Compliance</h3>
              </div>
              <p className="text-white text-lg">We comply with GDPR, CCPA, and other international data protection regulations.</p>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00D9FF] mb-8">Data Retention & Deletion</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Active Accounts</h3>
              <p className="text-white text-lg">Your data is retained as long as your account is active and necessary for service provision.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Inactive Accounts</h3>
              <p className="text-white text-lg">After 2 years of inactivity, we may delete your account and associated data unless legally required to retain it.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Account Deletion</h3>
              <p className="text-white text-lg">You can request account deletion at any time. We will delete your data within 30 days, except where legally required to retain it.</p>
            </div>
            <div className="border-l-4 border-[#00D9FF] pl-6">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">Legal Obligations</h3>
              <p className="text-white text-lg">We may retain certain data for legal, tax, or regulatory compliance purposes for up to 7 years.</p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-10">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a0f3a] border-4 border-[#00FF88] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00FF88] mb-4">📋 Right to Access</h3>
              <p className="text-white text-lg">You have the right to request and access all personal data we hold about you.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#00D9FF] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#00D9FF] mb-4">✏️ Right to Correct</h3>
              <p className="text-white text-lg">You can request corrections to inaccurate or incomplete personal data.</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FF006E] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FF006E] mb-4">🗑️ Right to Delete</h3>
              <p className="text-white text-lg">You can request deletion of your personal data (subject to legal retention requirements).</p>
            </div>

            <div className="bg-[#1a0f3a] border-4 border-[#FFD700] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-4">🚫 Right to Opt-Out</h3>
              <p className="text-white text-lg">You can opt-out of promotional communications and data processing for marketing purposes.</p>
            </div>
          </div>
        </section>

        {/* Third-Party Sharing */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#FF006E] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#FF006E] mb-8">Third-Party Data Sharing</h2>
          <p className="text-white text-xl mb-8">We do NOT sell your personal data. We only share data with:</p>
          <div className="space-y-4">
            <p className="text-white text-lg">✓ <strong>Service Providers:</strong> Payment processors, hosting providers, analytics services (under strict confidentiality agreements)</p>
            <p className="text-white text-lg">✓ <strong>Legal Authorities:</strong> When required by law or court order</p>
            <p className="text-white text-lg">✓ <strong>Fraud Prevention:</strong> With fraud prevention services to protect against abuse</p>
            <p className="text-white text-lg">✓ <strong>Business Partners:</strong> Only with your explicit consent</p>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-16 bg-[#1a0f3a] border-4 border-[#00FF88] rounded-xl p-12">
          <h2 className="text-4xl font-bold text-[#00FF88] mb-8">Cookies & Tracking</h2>
          <div className="space-y-4">
            <p className="text-white text-lg">We use cookies to:</p>
            <p className="text-white text-lg">✓ Keep you logged in to your account</p>
            <p className="text-white text-lg">✓ Remember your preferences and settings</p>
            <p className="text-white text-lg">✓ Analyze platform usage and improve services</p>
            <p className="text-white text-lg">✓ Prevent fraud and enhance security</p>
            <p className="text-white text-lg mt-6">You can disable cookies in your browser settings, but this may limit functionality.</p>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#00D9FF] to-[#00FF88] rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-[#0a0e27] mb-4">Privacy Questions?</h2>
          <p className="text-[#0a0e27] text-xl mb-8">Contact our privacy team for any questions about your data or privacy rights.</p>
          <a href="mailto:privacy@playaquacasino.com" className="inline-block bg-[#0a0e27] text-[#00D9FF] font-bold py-4 px-10 rounded-lg hover:bg-[#0a0e27]/80 transition-all text-xl">
            Contact Privacy Team
          </a>
        </section>
      </div>
    </div>
  );
}
