import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

/**
 * Footer Component - Premium Footer with Company Information
 * Design: Dark purple background with gold accents
 * Layout: 5-column footer with company details, links, and contact info
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">AC</span>
              </div>
              <h3 className="font-bold text-lg">Aquastruct</h3>
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
            <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-white/80 hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-white/80 hover:text-accent transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  <a className="text-white/80 hover:text-accent transition-colors">How to Play</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/80 hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-white/80 hover:text-accent transition-colors">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Games Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/games?category=slots">
                  <a className="text-white/80 hover:text-accent transition-colors">Slots</a>
                </Link>
              </li>
              <li>
                <Link href="/games?category=poker">
                  <a className="text-white/80 hover:text-accent transition-colors">Poker</a>
                </Link>
              </li>
              <li>
                <Link href="/games?category=roulette">
                  <a className="text-white/80 hover:text-accent transition-colors">Roulette</a>
                </Link>
              </li>
              <li>
                <Link href="/games?category=dice">
                  <a className="text-white/80 hover:text-accent transition-colors">Dice</a>
                </Link>
              </li>
              <li>
                <Link href="/games?category=mines">
                  <a className="text-white/80 hover:text-accent transition-colors">Mines</a>
                </Link>
              </li>
              <li>
                <Link href="/games?category=chicken">
                  <a className="text-white/80 hover:text-accent transition-colors">Chicken</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fair-play">
                  <a className="text-white/80 hover:text-accent transition-colors">Fair Play</a>
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming">
                  <a className="text-white/80 hover:text-accent transition-colors">Responsible Gaming</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-white/80 hover:text-accent transition-colors">Terms of Use</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Company Details */}
          <div>
            <h4 className="font-semibold text-accent mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Mail size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Support@playaquacasino.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-xs">
                  Udhampur, Jammu and Kashmir 182320, India
                </span>
              </div>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white/60 text-xs font-semibold">CIN: U41001JK2023PTC014834</p>
                <p className="text-white/60 text-xs">PAN: AAZCA0661R</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Aquastruct Construction Private Limited. All rights reserved.
            </p>
            <p className="text-xs">
              This platform is for entertainment purposes only. Players must be 18+ years old. No real money is involved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
