import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  useScrollToTop();
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqCategories = [
    {
      category: "Getting Started",
      icon: "🚀",
      items: [
        {
          q: "How do I create an account?",
          a: "Creating an account is simple and free! Visit our platform, click 'Sign Up', enter your email and create a password. You'll receive a verification email to confirm your account. Once verified, you can start playing immediately."
        },
        {
          q: "Do I need to provide payment information?",
          a: "No! Aquastruct is completely free to play. We never ask for payment information. You receive virtual coins daily to play all our games without any real money involved."
        },
        {
          q: "What age do I need to be to play?",
          a: "You must be at least 18 years old to create an account and play on our platform. We take age verification seriously as part of our responsible gaming commitment."
        },
        {
          q: "Can I play on mobile devices?",
          a: "Yes! Our platform is fully responsive and works on all devices including smartphones, tablets, and computers. Simply visit our website from any device's browser to play."
        }
      ]
    },
    {
      category: "Games & Gameplay",
      icon: "🎮",
      items: [
        {
          q: "How many games do you have?",
          a: "We currently offer 6 premium games: Slot Machines, Poker, Roulette, Dice Games, Mines, and Chicken Run. Each game offers unique gameplay and entertainment value."
        },
        {
          q: "Are the games fair?",
          a: "Absolutely! All our games use certified random number generators (RNG) and transparent algorithms. We conduct regular audits to ensure fairness and publish our odds publicly."
        },
        {
          q: "What are virtual coins?",
          a: "Virtual coins are our in-game currency with no real-world value. You receive free coins daily, and they're used only for playing our games. They cannot be converted to real money."
        },
        {
          q: "How often do I get free coins?",
          a: "You receive a daily bonus of virtual coins simply for logging in. The amount increases as you climb the leaderboards and achieve milestones. There are no limits to how many coins you can accumulate."
        },
        {
          q: "Can I win real money?",
          a: "No, this is a social casino for entertainment only. All winnings are in virtual coins with no real-world value. Our platform is designed purely for fun and entertainment."
        }
      ]
    },
    {
      category: "Account & Security",
      icon: "🔒",
      items: [
        {
          q: "How is my account protected?",
          a: "We use industry-standard encryption and security protocols to protect your account. Your password is encrypted, and we never store sensitive information in plain text. We also offer two-factor authentication for additional security."
        },
        {
          q: "What if I forget my password?",
          a: "Click 'Forgot Password' on the login page. Enter your email address, and we'll send you a secure link to reset your password. Follow the instructions in the email to create a new password."
        },
        {
          q: "Can I change my username?",
          a: "You can update your profile information including display name through your account settings. Some information like your registered email may require verification for security purposes."
        },
        {
          q: "How do I delete my account?",
          a: "You can request account deletion through your account settings or by contacting our support team at Support@playaquacasino.com. Please note that account deletion is permanent and cannot be reversed."
        },
        {
          q: "Is my personal information safe?",
          a: "Yes, we take data privacy seriously. We only collect information necessary for account creation and never sell your data to third parties. Review our Privacy Policy for complete details."
        }
      ]
    },
    {
      category: "Responsible Gaming",
      icon: "❤️",
      items: [
        {
          q: "What is responsible gaming?",
          a: "Responsible gaming means playing for entertainment while maintaining control over your time and virtual coin usage. We provide tools and resources to help you maintain healthy gaming habits."
        },
        {
          q: "How do I set gaming limits?",
          a: "You can set daily, weekly, or monthly limits on your virtual coin usage through your account settings. Once you reach your limit, you won't be able to play until the period resets."
        },
        {
          q: "What is self-exclusion?",
          a: "Self-exclusion allows you to temporarily or permanently block access to your account. This is useful if you feel you need a break from gaming. Contact our support team to activate self-exclusion."
        },
        {
          q: "Where can I get help for gaming addiction?",
          a: "If you're concerned about your gaming habits, we provide links to professional support organizations. Visit our Responsible Gaming page for resources and support hotlines."
        },
        {
          q: "Is there a time limit for playing?",
          a: "While there's no hard limit, we encourage regular breaks. You can set session time limits in your settings, and we'll remind you to take breaks during extended play sessions."
        }
      ]
    },
    {
      category: "Leaderboards & Achievements",
      icon: "🏆",
      items: [
        {
          q: "How do leaderboards work?",
          a: "Leaderboards rank players based on their total virtual coin winnings. You can view daily, weekly, and monthly leaderboards. Top players earn badges and recognition on the platform."
        },
        {
          q: "How do I earn achievements?",
          a: "Achievements are earned by completing specific milestones like winning a certain number of games, reaching coin targets, or playing different games. Each achievement unlocks special badges on your profile."
        },
        {
          q: "Can I win prizes from leaderboards?",
          a: "Leaderboards are for recognition and bragging rights only. There are no real prizes, but top players receive special badges and recognition within our community."
        },
        {
          q: "How often do leaderboards reset?",
          a: "Daily leaderboards reset every 24 hours. Weekly leaderboards reset every 7 days, and monthly leaderboards reset on the first day of each month. All-time leaderboards never reset."
        }
      ]
    },
    {
      category: "Technical Support",
      icon: "🛠️",
      items: [
        {
          q: "The game won't load. What should I do?",
          a: "Try refreshing the page or clearing your browser cache. Make sure you have a stable internet connection. If the problem persists, try a different browser or device. Contact support if the issue continues."
        },
        {
          q: "I'm experiencing lag or slow gameplay.",
          a: "Lag can be caused by internet connection issues or browser problems. Try closing other applications, checking your internet speed, or using a different browser. We also recommend using the latest version of your browser."
        },
        {
          q: "What browsers are supported?",
          a: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, use the latest version of your browser."
        },
        {
          q: "Why was I logged out unexpectedly?",
          a: "You may be logged out if you're inactive for an extended period, or if you log in from another device. This is a security feature. Simply log in again to continue playing."
        },
        {
          q: "How do I report a technical bug?",
          a: "Please contact our support team at Support@playaquacasino.com with details about the bug, including what you were doing when it occurred and your device/browser information."
        }
      ]
    },
    {
      category: "Contact & Support",
      icon: "📞",
      items: [
        {
          q: "How do I contact support?",
          a: "You can reach our support team via email at Support@playaquacasino.com, through our contact form on the website, or by visiting our office in Udhampur, India. We respond to all inquiries within 24 hours."
        },
        {
          q: "What are your support hours?",
          a: "Our support team operates 24 hours a day, 7 days a week. We're always available to help with any questions or issues you may have."
        },
        {
          q: "How long does it take to get a response?",
          a: "We aim to respond to all support inquiries within 24 hours. For urgent matters, our live support team is available immediately."
        },
        {
          q: "Can I provide feedback or suggestions?",
          a: "Absolutely! We love hearing from our players. You can submit feedback through our contact form or email us directly at Support@playaquacasino.com. Your suggestions help us improve the platform."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-2xl text-white/90 max-w-2xl">
                Find answers to common questions about Aquastruct
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl">{category.icon}</span>
                    <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => {
                      const uniqueIndex = catIndex * 100 + itemIndex;
                      return (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === uniqueIndex ? -1 : uniqueIndex)}
                            className="w-full p-6 flex items-center justify-between hover:bg-[#00FF88]/5 transition-all duration-300 text-left"
                          >
                            <h3 className="text-lg font-bold text-white">{item.q}</h3>
                            <ChevronDown 
                              className={`text-[#00FF88] transition-transform duration-300 flex-shrink-0 ${expandedIndex === uniqueIndex ? 'rotate-180' : ''}`}
                              size={24}
                            />
                          </button>

                          {expandedIndex === uniqueIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-[#00FF88]/20 p-6 bg-[#0a0e27]/50"
                            >
                              <p className="text-white/80 leading-relaxed">{item.a}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Can't find the answer you're looking for? Our support team is here to help! Reach out to us anytime and we'll be happy to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Contact Support
                </a>
                <a href="mailto:Support@playaquacasino.com" className="bg-[#FF006E] hover:bg-[#FF006E]/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Playing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Now that you know how everything works, join thousands of players enjoying premium entertainment
              </p>
              <button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-4 px-12 rounded-lg text-lg">
                Play Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
