import { Link } from "wouter";
import { Lock, Eye, Share2, Trash2 } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border-b border-[#00D9FF]/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="text-[#00D9FF] hover:text-[#00D9FF]/80 mb-4 inline-flex items-center gap-2">
              ← Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#00D9FF] mb-2">Privacy Policy</h1>
          <p className="text-white/80 text-lg">Your Data Protection & Privacy Rights</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="mb-8 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
          <p className="text-white/80"><strong>Last Updated:</strong> January 2026</p>
          <p className="text-white/80 text-sm mt-2">This Privacy Policy is effective immediately for new users and will be effective for existing users on the date specified above.</p>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">1. Introduction</h2>
          <p className="text-white/80 mb-4">
            Aquastruct Construction Private Limited ("we," "us," "our," or "Company") operates the Aquastruct Casino platform ("Platform"). We are committed to protecting your privacy and ensuring you have a positive experience on our Platform.
          </p>
          <p className="text-white/80">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Platform. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Platform.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">2. Information We Collect</h2>
          
          <div className="mb-8 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">Personal Information You Provide</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Account Information:</strong> Name, email address, date of birth, phone number, username, password</li>
              <li>✓ <strong>Profile Information:</strong> Avatar, bio, preferences, gaming history</li>
              <li>✓ <strong>Communication Data:</strong> Messages, support tickets, feedback, complaints</li>
              <li>✓ <strong>Payment Information:</strong> Virtual coin transactions, purchase history (if applicable)</li>
              <li>✓ <strong>Verification Information:</strong> Government ID, address verification documents (for age verification)</li>
            </ul>
          </div>

          <div className="mb-8 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FF006E] mb-3">Information Collected Automatically</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Device Information:</strong> Device type, operating system, browser type, IP address</li>
              <li>✓ <strong>Usage Data:</strong> Pages visited, time spent, games played, features used</li>
              <li>✓ <strong>Cookies & Tracking:</strong> Session cookies, analytics cookies, preference cookies</li>
              <li>✓ <strong>Location Data:</strong> General location based on IP address (not precise GPS)</li>
              <li>✓ <strong>Performance Data:</strong> Game outcomes, win/loss history, session duration</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FFD700] mb-3">Information from Third Parties</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Age Verification Services:</strong> Data from third-party age verification providers</li>
              <li>✓ <strong>Analytics Providers:</strong> Aggregated usage data from analytics services</li>
              <li>✓ <strong>Security Services:</strong> Fraud detection and security information</li>
              <li>✓ <strong>Social Media:</strong> If you link your social media account (with your consent)</li>
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">3. How We Use Your Information</h2>
          <p className="text-white/80 mb-4">We use the information we collect for the following purposes:</p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Account Management:</strong> Create and manage your account, verify your identity, process transactions</li>
            <li>✓ <strong>Platform Operation:</strong> Provide gaming services, maintain platform functionality, improve user experience</li>
            <li>✓ <strong>Communication:</strong> Send account notifications, respond to support requests, send promotional emails (with consent)</li>
            <li>✓ <strong>Legal Compliance:</strong> Comply with laws, regulations, and legal requests; verify age and prevent underage gaming</li>
            <li>✓ <strong>Security:</strong> Detect and prevent fraud, abuse, and unauthorized access; protect platform security</li>
            <li>✓ <strong>Analytics:</strong> Analyze usage patterns, improve platform features, conduct research</li>
            <li>✓ <strong>Responsible Gaming:</strong> Monitor for problem gaming behaviors, enforce self-exclusion, provide support resources</li>
            <li>✓ <strong>Marketing:</strong> Send promotional materials and updates (only with your consent)</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">4. Data Sharing & Disclosure</h2>
          
          <div className="mb-8 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">We Share Information With:</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Service Providers:</strong> Third-party vendors who assist with payment processing, analytics, hosting, customer support</li>
              <li>✓ <strong>Legal Authorities:</strong> When required by law, court order, or government request</li>
              <li>✓ <strong>Business Partners:</strong> With your consent, for joint marketing or promotional activities</li>
              <li>✓ <strong>Compliance Partners:</strong> Age verification services, responsible gaming organizations</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FF006E] mb-3">We DO NOT Share:</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Your personal information with advertisers or data brokers</li>
              <li>✓ Your gaming history with third parties (except as required by law)</li>
              <li>✓ Your payment information with unauthorized parties</li>
              <li>✓ Your data for commercial purposes without explicit consent</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">5. Data Security</h2>
          <p className="text-white/80 mb-4">
            We implement comprehensive security measures to protect your personal information:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Encryption:</strong> All data transmitted using SSL/TLS encryption (HTTPS)</li>
            <li>✓ <strong>Database Security:</strong> Encrypted databases with access controls and authentication</li>
            <li>✓ <strong>Password Security:</strong> Passwords hashed using bcrypt algorithm with salt</li>
            <li>✓ <strong>Access Controls:</strong> Role-based access control, multi-factor authentication for staff</li>
            <li>✓ <strong>Regular Audits:</strong> Monthly security audits and penetration testing</li>
            <li>✓ <strong>Incident Response:</strong> Documented incident response procedures and breach notification protocol</li>
            <li>✓ <strong>Data Minimization:</strong> We collect only necessary information and delete data when no longer needed</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-6">6. Your Privacy Rights</h2>
          
          <div className="mb-8 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00D9FF] mb-3">You Have the Right To:</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ <strong>Access:</strong> Request a copy of your personal data we hold</li>
              <li>✓ <strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
              <li>✓ <strong>Deletion:</strong> Request deletion of your data (right to be forgotten)</li>
              <li>✓ <strong>Portability:</strong> Receive your data in a portable format</li>
              <li>✓ <strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li>✓ <strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
              <li>✓ <strong>Lodge Complaint:</strong> File a complaint with data protection authorities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">How to Exercise Your Rights:</h3>
            <p className="text-white/80 mb-3">
              To exercise any of these rights, contact us at:
            </p>
            <ul className="space-y-2 text-white/80">
              <li>✓ Email: <a href="mailto:privacy@playaquacasino.com" className="text-[#00FF88] hover:text-[#00FF88]/80">privacy@playaquacasino.com</a></li>
              <li>✓ Include your account details and specific request</li>
              <li>✓ We will respond within 30 days</li>
              <li>✓ We may request verification of your identity</li>
            </ul>
          </div>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">7. Cookies & Tracking Technologies</h2>
          <p className="text-white/80 mb-4">
            We use cookies and similar technologies to enhance your experience:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">Types of Cookies:</h3>
              <ul className="space-y-2 text-white/80">
                <li>✓ <strong>Essential Cookies:</strong> Required for platform functionality (login, security)</li>
                <li>✓ <strong>Analytics Cookies:</strong> Track usage patterns to improve platform</li>
                <li>✓ <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li>✓ <strong>Marketing Cookies:</strong> Used for promotional purposes (with consent)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#FF006E] mb-2">Cookie Management:</h3>
              <ul className="space-y-2 text-white/80">
                <li>✓ You can disable non-essential cookies in your browser settings</li>
                <li>✓ Disabling essential cookies may affect platform functionality</li>
                <li>✓ You can opt-out of analytics tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">8. Data Retention</h2>
          <p className="text-white/80 mb-4">
            We retain your personal information for as long as necessary:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Active Accounts:</strong> Data retained while account is active</li>
            <li>✓ <strong>Inactive Accounts:</strong> Data retained for 1 year after account closure</li>
            <li>✓ <strong>Legal Requirements:</strong> Data retained as required by law (typically 7 years for financial records)</li>
            <li>✓ <strong>Deletion Requests:</strong> Data deleted within 30 days of verified deletion request (unless legally required)</li>
            <li>✓ <strong>Backup Data:</strong> Backup copies may be retained for up to 90 days</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">Questions About Privacy?</h2>
          <p className="text-white/80 mb-6">
            Contact our Privacy Officer for any questions about our Privacy Policy or your data.
          </p>
          <a href="mailto:privacy@playaquacasino.com" className="inline-block bg-gradient-to-r from-[#00D9FF] to-[#00D9FF] text-black font-bold py-3 px-8 rounded-lg hover:from-[#00D9FF]/80 hover:to-[#00D9FF]/80 transition-all">
            Contact Privacy Officer
          </a>
        </section>
      </div>
    </div>
  );
}
