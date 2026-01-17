import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Premium Dark Casino Navigation
 * Design: Dark header with purple gradient, neon accents, and glow effects
 * Features: Desktop navigation with dropdown, mobile hamburger menu, premium animations
 */

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "How to Play", href: "/how-to-play" },
    {
      label: "Games",
      href: "/games",
      submenu: [
        { label: "All Games", href: "/games" },
        { label: "Slots", href: "/games?category=slots" },
        { label: "Poker", href: "/games?category=poker" },
        { label: "Roulette", href: "/games?category=roulette" },
        { label: "Dice", href: "/games?category=dice" },
        { label: "Mines", href: "/games?category=mines" },
        { label: "Chicken", href: "/games?category=chicken" },
      ],
    },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0a0e27] via-[#1a0f3a] to-[#0a0e27] border-b border-[#00FF88]/20 shadow-lg neon-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-white font-bold text-2xl hover:text-[#00FF88] transition-all duration-300 hover:drop-shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00FF88] to-[#00cc6f] rounded-lg flex items-center justify-center shadow-lg neon-glow">
                <span className="text-[#0a0e27] font-bold">AC</span>
              </div>
              <span>Aquastruct</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href}>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-[#00FF88] transition-all duration-300 flex items-center gap-1 hover:drop-shadow-lg">
                    {item.label}
                    {item.submenu && (
                      <span className="text-xs">▼</span>
                    )}
                  </a>
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-gradient-to-b from-[#1a1f3a] to-[#2a2f4a] text-foreground rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-[#00FF88]/20 neon-glow">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <a className="block px-4 py-2 hover:bg-[#00FF88]/10 hover:text-[#00FF88] transition-all duration-200 border-l-2 border-transparent hover:border-[#00FF88]">
                          {subitem.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#00FF88] p-2 hover:bg-[#00FF88]/10 rounded-lg transition-all duration-300 hover:drop-shadow-lg"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-[#00FF88]/20 mt-2 pt-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link href={item.href}>
                  <a
                    className="block text-white px-3 py-2 rounded-md hover:bg-[#00FF88]/10 hover:text-[#00FF88] transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <a
                          className="block text-white/80 px-3 py-1 text-sm hover:text-[#00FF88] transition-all duration-300 pl-6"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
