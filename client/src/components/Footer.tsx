import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Footer Component - Premium Dark Casino Footer
 * Design: Dark gradient background with neon accents
 * Layout: 5-column footer with company details, links, and contact info
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#0a0e27] to-[#1a0f3a] border-t border-[#00FF88]/20 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-4">
              <img src="/images/aquastruct-logo.webp" alt="Aquastruct" className="h-16 w-auto mb-2" />
            </div>
            <p className="text-white/80 text-sm mb-4">
              Premium social casino entertainment platform offering virtual games with no real money involved.
            </p>
            <p className="text-white/60 text-xs">
              © {currentYear} Aquastruct Construction Private Limited. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-[#00FF88] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-white/80 hover:text-[#00FF88] transition-all duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/80 hover:text-[#00FF88] transition-all duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <a className="text-white/80 hover:text-[#00FF88] transition-all duration-300">How to Play</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/80 hover:text-[#00FF88] transition-all duration-300">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-white/80 hover:text-[#00FF88] transition-all duration-300">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Games Links */}
          <div>
            <h4 className="font-semibold text-[#FF006E] mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/play/slots">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Slots</a>
                </Link>
              </li>
              <li>
                <Link href="/play/poker">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Poker</a>
                </Link>
              </li>
              <li>
                <Link href="/play/roulette">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Roulette</a>
                </Link>
              </li>
              <li>
                <Link href="/play/dice">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Dice</a>
                </Link>
              </li>
              <li>
                <Link href="/play/mines">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Mines</a>
                </Link>
              </li>
              <li>
                <Link href="/play/chicken">
                  <a className="text-white/80 hover:text-[#FF006E] transition-all duration-300">Chicken</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div>
            <h4 className="font-semibold text-[#FFD700] mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fair-play">
                  <a className="text-white/80 hover:text-[#FFD700] transition-all duration-300">Fair Play</a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-white/80 hover:text-[#FFD700] transition-all duration-300">Responsible Gaming</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-white/80 hover:text-[#FFD700] transition-all duration-300">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-white/80 hover:text-[#FFD700] transition-all duration-300">Terms of Use</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="font-semibold text-[#00FF88] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#00FF88] flex-shrink-0 mt-0.5" />
                <a href="mailto:Support@playaquacasino.com" className="text-white/80 hover:text-[#00FF88] transition-all duration-300">
                  Support@playaquacasino.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF006E] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Udhampur, Jammu and Kashmir 182320, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Available 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00FF88]/20 pt-8 mt-8">
          {/* Company Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-[#00FF88] mb-3">Company Information</h4>
              <p className="text-white/80 text-sm space-y-1">
                <div>CIN: U41001JK2023PTC014834</div>
                <div>PAN: AAZCA0661R</div>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#FF006E] mb-3">Compliance</h4>
              <p className="text-white/80 text-sm">
                This platform is for entertainment purposes only. Players must be 18+ years old. No real money is involved.
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center pt-6 border-t border-[#00FF88]/10">
            <p className="text-white/60 text-xs">
              © {currentYear} Aquastruct Construction Private Limited. All rights reserved. | 
              <span className="text-[#00FF88] ml-1">Responsible Gaming Commitment</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
