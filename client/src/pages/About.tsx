import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Target, Heart, Zap, Users, Gamepad2, Shield, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    { icon: Target, title: "Transparency", desc: "Clear odds and fair mechanics in every game" },
    { icon: Heart, title: "Safety", desc: "Secure and responsible gaming environment" },
    { icon: Zap, title: "Innovation", desc: "Cutting-edge gaming technology and features" },
    { icon: Award, title: "Excellence", desc: "Premium quality entertainment experience" },
  ];

  const achievements = [
    { number: "6+", label: "Premium Games", icon: Gamepad2 },
    { number: "100%", label: "Free to Play", icon: TrendingUp },
    { number: "24/7", label: "Player Support", icon: Users },
    { number: "100%", label: "Fair & Secure", icon: Shield },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Company Founded",
      desc: "Aquastruct Construction Private Limited established with vision to revolutionize virtual casino entertainment"
    },
    {
      year: "2024",
      title: "Platform Launch",
      desc: "Launched premium social casino platform with 6 exciting games and comprehensive player protection features"
    },
    {
      year: "2025",
      title: "Global Expansion",
      desc: "Expanding reach to international markets with multi-language support and localized experiences"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-bold mb-6">About Aquastruct</h1>
              <p className="text-2xl text-white/90 max-w-2xl">
                Leading the future of virtual casino entertainment with transparency, fairness, and responsible gaming at our core
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Our Story</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Aquastruct Construction Private Limited was founded with a singular vision: to create a world-class virtual casino entertainment platform that prioritizes player safety, transparency, and fun above all else. Our journey began with a deep understanding of what players truly want—engaging games, fair mechanics, and a platform they can trust.
                </p>
                <p>
                  In an industry often clouded by complexity and mistrust, we recognized an opportunity to build something different. We set out to create a social casino platform that combines cutting-edge technology with unwavering commitment to responsible gaming. Every feature, every game, and every interaction on our platform is designed with the player in mind.
                </p>
                <p>
                  Today, Aquastruct stands as a beacon of innovation in the virtual gaming space. We've built a community of players who trust us not just to entertain them, but to protect them. Our platform features certified fair play algorithms, transparent game mechanics, and comprehensive player protection tools that set industry standards.
                </p>
                <p>
                  We're not just building a gaming platform—we're building a movement toward responsible, transparent, and truly enjoyable virtual entertainment. Join us as we continue to revolutionize the way people experience casino gaming.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-[#00FF88]" size={40} />
                  <h2 className="text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  To provide world-class premium entertainment through virtual casino gaming, ensuring every player experiences fair play, complete transparency, and responsible gaming practices. We're committed to creating an environment where entertainment thrives without financial risk.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Deliver premium gaming experiences that are both thrilling and safe</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Maintain absolute transparency in all game mechanics and odds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FF88] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Promote responsible gaming and player well-being at all times</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-[#FFD700]" size={40} />
                  <h2 className="text-4xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-white/80 mb-6 leading-relaxed">
                  To become the world's most trusted and beloved social casino platform, where millions of players enjoy premium entertainment with complete transparency, peace of mind, and the confidence that their safety is our highest priority.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Lead the industry in player protection and responsible gaming</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Continuously innovate with cutting-edge gaming technology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/70">Build a global community united by trust and entertainment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-lg text-white/70">Guiding principles that define everything we do and how we serve our players</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 hover:border-[#00FF88]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/20"
                  >
                    <Icon className="text-[#00FF88] mb-4" size={48} />
                    <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Achievements</h2>
              <p className="text-lg text-white/70">Milestones that showcase our commitment to excellence</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, i) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#7B2CBF]/20 to-[#9D4EDD]/20 border border-[#00FF88]/30 rounded-xl p-8 text-center hover:border-[#00FF88]/60 transition-all duration-300"
                  >
                    <Icon className="text-[#00FF88] mx-auto mb-4" size={48} />
                    <p className="text-4xl font-bold text-[#00FF88] mb-2">{achievement.number}</p>
                    <p className="text-white/80 font-semibold">{achievement.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Journey</h2>
              <p className="text-lg text-white/70">Key milestones in our growth and development</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12 relative"
                >
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-[#00FF88] rounded-full border-4 border-[#0a0e27]"></div>
                      {i < timeline.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-[#00FF88] to-transparent mt-4"></div>
                      )}
                    </div>
                    <div className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8 flex-1">
                      <p className="text-[#00FF88] font-bold text-lg mb-2">{item.year}</p>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Aquastruct?</h2>
              <p className="text-lg text-white/70">What sets us apart from the competition</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Certified Fair Play", desc: "All games use certified random number generators and transparent algorithms" },
                { title: "Player Protection", desc: "Advanced security measures and data encryption protect your information" },
                { title: "Responsible Gaming", desc: "Comprehensive tools for self-exclusion, time management, and support" },
                { title: "24/7 Support", desc: "Dedicated customer support team available round the clock" },
                { title: "No Hidden Costs", desc: "100% free to play with no deposits or hidden charges ever" },
                { title: "Continuous Innovation", desc: "Regular updates with new games and features based on player feedback" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#FF006E]/20 rounded-xl p-8 hover:border-[#FF006E]/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#FF006E] mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-24 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 text-white">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#00FF88]/20 rounded-xl p-8">
                  <p className="text-[#00FF88] font-semibold mb-3 text-sm uppercase tracking-wide">Organization Name</p>
                  <p className="text-white text-lg font-semibold mb-6">Aquastruct Construction Private Limited</p>

                  <p className="text-[#FF006E] font-semibold mb-3 text-sm uppercase tracking-wide">Address</p>
                  <p className="text-white/80 mb-6">C/O LAXMAN DASS, KHANDAK, PANTHAL KATRA, Panthal, Udhampur, Jammu and Kashmir 182320, India</p>

                  <p className="text-[#FFD700] font-semibold mb-3 text-sm uppercase tracking-wide">Email</p>
                  <p className="text-white/80">Support@playaquacasino.com</p>
                </div>

                <div className="bg-gradient-to-br from-[#1a0f3a] to-[#0a0e27] border border-[#FF006E]/20 rounded-xl p-8">
                  <p className="text-[#FFD700] font-semibold mb-3 text-sm uppercase tracking-wide">CIN (Corporate Identity Number)</p>
                  <p className="text-white text-lg font-mono mb-6">U41001JK2023PTC014834</p>

                  <p className="text-[#00FF88] font-semibold mb-3 text-sm uppercase tracking-wide">PAN (Permanent Account Number)</p>
                  <p className="text-white text-lg font-mono mb-6">AAZCA0661R</p>

                  <p className="text-[#FF006E] font-semibold mb-3 text-sm uppercase tracking-wide">Registration Year</p>
                  <p className="text-white/80">2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Community Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience premium virtual casino entertainment with complete transparency and peace of mind
              </p>
              <button className="bg-[#00FF88] hover:bg-[#00FF88]/90 text-[#0a0e27] font-bold py-4 px-12 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/50 text-lg">
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
