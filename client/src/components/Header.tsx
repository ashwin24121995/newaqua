import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Premium Navigation
 * Design: Sticky header with purple background and gold accents
 * Features: Desktop navigation with dropdown, mobile hamburger menu
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
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-white font-bold text-2xl hover:text-accent transition-colors">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">AC</span>
              </div>
              <span>Aquastruct</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href}>
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/80 transition-colors flex items-center gap-1">
                    {item.label}
                    {item.submenu && (
                      <span className="text-xs">▼</span>
                    )}
                  </a>
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white text-foreground rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <a className="block px-4 py-2 hover:bg-secondary hover:text-accent transition-colors">
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
            className="md:hidden text-white p-2 hover:bg-primary/80 rounded-lg transition-colors"
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
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link href={item.href}>
                  <a
                    className="block text-white px-3 py-2 rounded-md hover:bg-primary/80 transition-colors"
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
                          className="block text-white/80 px-3 py-1 text-sm hover:text-accent transition-colors"
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
