import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Link } from "wouter";
import { AlertCircle, CheckCircle, XCircle, Scale } from "lucide-react";

export default function TermsOfUse() {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#FF006E]/10 border-b border-[#FFD700]/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/">
            <a className="text-[#FFD700] hover:text-[#FFD700]/80 mb-4 inline-flex items-center gap-2">
              ← Back to Home
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">Terms of Use</h1>
          <p className="text-white/80 text-lg">Legal Agreement for Platform Usage</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="mb-8 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
          <p className="text-white/80"><strong>Last Updated:</strong> January 2026</p>
          <p className="text-white/80 text-sm mt-2">These Terms of Use are effective immediately for new users and will be effective for existing users on the date specified above.</p>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">1. Agreement to Terms</h2>
          <p className="text-white/80 mb-4">
            By accessing and using the Aquastruct Casino platform ("Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
          <p className="text-white/80">
            Aquastruct Construction Private Limited ("Company") reserves the right to update these Terms of Use at any time. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
          </p>
        </section>

        {/* User Eligibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-6">2. User Eligibility & Age Requirements</h2>
          
          <div className="mb-8 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#00FF88] mb-3">Age Requirement</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ You must be at least 18 years old to use this Platform</li>
              <li>✓ You must provide accurate age verification information</li>
              <li>✓ We reserve the right to verify your age at any time</li>
              <li>✓ Underage users will have their accounts immediately terminated</li>
              <li>✓ Fraudulent age verification may result in permanent ban</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#FF006E] mb-3">Geographic Restrictions</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Platform is available in India and select international jurisdictions</li>
              <li>✓ Users in restricted jurisdictions are prohibited from accessing the Platform</li>
              <li>✓ We reserve the right to restrict access based on location</li>
              <li>✓ Users are responsible for ensuring compliance with local laws</li>
            </ul>
          </div>
        </section>

        {/* Account Responsibilities */}
        <section className="mb-12 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">3. Account Responsibilities</h2>
          <p className="text-white/80 mb-4">
            You are responsible for maintaining the confidentiality of your account information:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Account Security:</strong> You are solely responsible for the activity that occurs under your account</li>
            <li>✓ <strong>Password Protection:</strong> Do not share your password with anyone</li>
            <li>✓ <strong>Unauthorized Access:</strong> Notify us immediately of any unauthorized access</li>
            <li>✓ <strong>Account Information:</strong> Provide accurate and complete information during registration</li>
            <li>✓ <strong>Account Termination:</strong> We reserve the right to terminate accounts for violations</li>
            <li>✓ <strong>Multiple Accounts:</strong> Creating multiple accounts to circumvent restrictions is prohibited</li>
          </ul>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-6">4. Prohibited Activities</h2>
          <p className="text-white/80 mb-6">
            You agree NOT to engage in any of the following activities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FF006E] mb-3">Illegal Activities:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✗ Violating any local, state, or international law</li>
                <li>✗ Money laundering or financial fraud</li>
                <li>✗ Hacking or unauthorized system access</li>
                <li>✗ Phishing or social engineering attacks</li>
                <li>✗ Distributing malware or viruses</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#FFD700] mb-3">Platform Abuse:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✗ Exploiting game vulnerabilities or bugs</li>
                <li>✗ Using bots or automation tools</li>
                <li>✗ Collusion or cheating with other players</li>
                <li>✗ Harassment or abusive behavior</li>
                <li>✗ Spam or unsolicited communications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00FF88] mb-3">Content Violations:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✗ Posting offensive or discriminatory content</li>
                <li>✗ Sharing adult or explicit material</li>
                <li>✗ Promoting hate speech or violence</li>
                <li>✗ Copyright or intellectual property infringement</li>
                <li>✗ Impersonation or identity fraud</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#00D9FF] mb-3">Account Violations:</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>✗ Account sharing or selling</li>
                <li>✗ Creating multiple accounts to gain unfair advantage</li>
                <li>✗ Circumventing self-exclusion or account restrictions</li>
                <li>✗ Attempting to reverse or dispute legitimate transactions</li>
                <li>✗ Providing false information or documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Virtual Coins & Transactions */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">5. Virtual Coins & Transactions</h2>
          <p className="text-white/80 mb-4">
            Important information about virtual coins:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>No Real Money:</strong> Virtual coins have no real-world monetary value</li>
            <li>✓ <strong>Non-Transferable:</strong> Virtual coins cannot be sold, traded, or transferred to other players</li>
            <li>✓ <strong>Account Termination:</strong> Upon account closure, all virtual coins are forfeited</li>
            <li>✓ <strong>No Refunds:</strong> Virtual coins cannot be refunded or exchanged for real money</li>
            <li>✓ <strong>Company Discretion:</strong> We reserve the right to adjust coin balances for violations</li>
            <li>✓ <strong>Transaction Disputes:</strong> All transactions are final and cannot be reversed</li>
            <li>✓ <strong>Bonus Coins:</strong> Promotional coins may have expiration dates and usage restrictions</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">6. Intellectual Property Rights</h2>
          <p className="text-white/80 mb-4">
            All content on the Platform is owned by or licensed to Aquastruct Construction Private Limited:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ <strong>Copyright:</strong> All game designs, graphics, and code are protected by copyright</li>
            <li>✓ <strong>Trademarks:</strong> Aquastruct and related logos are registered trademarks</li>
            <li>✓ <strong>Limited License:</strong> You are granted a limited license to use the Platform for personal entertainment</li>
            <li>✓ <strong>No Reproduction:</strong> You may not reproduce, distribute, or modify any content without permission</li>
            <li>✓ <strong>Third-Party Content:</strong> Some content may be licensed from third parties</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">7. Limitation of Liability</h2>
          <p className="text-white/80 mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ The Platform is provided "AS IS" without warranties of any kind</li>
            <li>✓ We are not liable for any indirect, incidental, or consequential damages</li>
            <li>✓ Our total liability is limited to the amount of virtual coins in your account</li>
            <li>✓ We are not responsible for third-party services or content</li>
            <li>✓ We are not liable for service interruptions or data loss</li>
            <li>✓ You assume all risk of using the Platform</li>
          </ul>
        </section>

        {/* Dispute Resolution */}
        <section className="mb-12 bg-gradient-to-r from-[#00D9FF]/5 to-transparent border border-[#00D9FF]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00D9FF] mb-4">8. Dispute Resolution</h2>
          <p className="text-white/80 mb-4">
            Any disputes will be resolved as follows:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Step 1: Contact Support</h3>
              <p className="text-white/80">
                Contact our support team at <a href="mailto:support@playaquacasino.com" className="text-[#00D9FF] hover:text-[#00D9FF]/80">support@playaquacasino.com</a> with details of your dispute. We will respond within 48 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Step 2: Formal Complaint</h3>
              <p className="text-white/80">
                If not resolved, submit a formal written complaint. We will investigate and provide a resolution within 7 days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00D9FF] mb-2">Step 3: Arbitration</h3>
              <p className="text-white/80">
                If still unresolved, disputes will be subject to binding arbitration under Indian law. Both parties agree to arbitration instead of court proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Account Termination */}
        <section className="mb-12 bg-gradient-to-r from-[#FF006E]/5 to-transparent border border-[#FF006E]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FF006E] mb-4">9. Account Termination</h2>
          <p className="text-white/80 mb-4">
            We may terminate your account for:
          </p>
          <ul className="space-y-3 text-white/80">
            <li>✓ Violation of these Terms of Use</li>
            <li>✓ Underage access or fraudulent age verification</li>
            <li>✓ Cheating, hacking, or exploitation of vulnerabilities</li>
            <li>✓ Harassment or abusive behavior</li>
            <li>✓ Multiple account creation for unfair advantage</li>
            <li>✓ Illegal activities or money laundering</li>
            <li>✓ Inactivity for 2+ years</li>
            <li>✓ Any reason at our sole discretion</li>
          </ul>
          <p className="text-white/80 mt-4">
            Upon termination, all virtual coins are forfeited and cannot be recovered.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12 bg-gradient-to-r from-[#00FF88]/5 to-transparent border border-[#00FF88]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#00FF88] mb-4">10. Governing Law</h2>
          <p className="text-white/80 mb-4">
            These Terms of Use are governed by and construed in accordance with the laws of India, specifically the jurisdiction of Jammu and Kashmir.
          </p>
          <ul className="space-y-2 text-white/80">
            <li>✓ <strong>Jurisdiction:</strong> Udhampur District, Jammu and Kashmir, India</li>
            <li>✓ <strong>Applicable Laws:</strong> Indian Penal Code, Information Technology Act, 2000</li>
            <li>✓ <strong>Legal Venue:</strong> Courts in Udhampur, Jammu and Kashmir</li>
          </ul>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12 bg-gradient-to-r from-[#FFD700]/5 to-transparent border border-[#FFD700]/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">11. Changes to Terms</h2>
          <p className="text-white/80 mb-4">
            We may modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the Platform constitutes acceptance of modified terms.
          </p>
          <ul className="space-y-2 text-white/80">
            <li>✓ We will notify users of significant changes via email</li>
            <li>✓ The "Last Updated" date will reflect the most recent revision</li>
            <li>✓ Users have the right to terminate their account if they disagree with changes</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-[#FFD700]/10 to-[#FF006E]/10 border border-[#FFD700]/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Questions About Terms?</h2>
          <p className="text-white/80 mb-6">
            Contact our legal team for any questions about these Terms of Use.
          </p>
          <a href="mailto:legal@playaquacasino.com" className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFD700] text-black font-bold py-3 px-8 rounded-lg hover:from-[#FFD700]/80 hover:to-[#FFD700]/80 transition-all">
            Contact Legal Team
          </a>
        </section>
      </div>
    </div>
  );
}
