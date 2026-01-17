import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      desc: "Send us an email and we'll respond within 24 hours",
      contact: "Support@playaquacasino.com",
      color: "#00FF88"
    },
    {
      icon: Phone,
      title: "Phone",
      desc: "Call our support team for immediate assistance",
      contact: "Available 24/7",
      color: "#FF006E"
    },
    {
      icon: MapPin,
      title: "Office Address",
      desc: "Visit our headquarters in Udhampur, India",
      contact: "C/O LAXMAN DASS, KHANDAK, PANTHAL KATRA, Udhampur, JK 182320",
      color: "#FFD700"
    },
    {
      icon: Clock,
      title: "Business Hours",
      desc: "We're available around the clock for your support",
      contact: "24 Hours / 7 Days a Week",
      color: "#00FF88"
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
              <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-2xl text-white/90 max-w-2xl">
                Get in touch with our team. We're here to help 24/7
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8"
                  >
                    <Icon className="mb-4" size={48} style={{ color: method.color }} />
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{method.desc}</p>
                    <p className="text-white font-semibold">{method.contact}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[#0a0e27] border border-[#00FF88]/30 rounded-lg px-4 py-3 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#0a0e27] border border-[#00FF88]/30 rounded-lg px-4 py-3 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full bg-[#0a0e27] border border-[#00FF88]/30 rounded-lg px-4 py-3 text-white placeholder-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full bg-[#0a0e27] border border-[#00FF88]/30 rounded-lg px-4 py-3 text-white placeholder-white/50 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00FF88] to-[#00cc6f] text-[#0a0e27] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-white">Why Contact Us?</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MessageSquare className="text-[#00FF88] flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Account Support</h3>
                        <p className="text-white/70">Issues with your account, login, or profile settings</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <MessageSquare className="text-[#FF006E] flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Technical Issues</h3>
                        <p className="text-white/70">Game glitches, loading problems, or performance issues</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                  <p className="text-white/80 leading-relaxed">
                    We aim to respond to all inquiries within 24 hours. For urgent matters, our 24/7 support team is available.
                  </p>
                </div>
              </motion.div>
            </div>
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
              <h2 className="text-4xl font-bold text-white mb-6">We're Here to Help</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Have questions? Reach out to our support team anytime.
              </p>
              <button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-4 px-12 rounded-lg text-lg">
                Get Support Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
