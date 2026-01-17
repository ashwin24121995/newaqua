import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Target, Heart, Zap } from "lucide-react";

export default function About() {
  const values = [
    { icon: Target, title: "Transparency", desc: "Clear odds and fair mechanics" },
    { icon: Heart, title: "Safety", desc: "Secure and responsible gaming" },
    { icon: Zap, title: "Innovation", desc: "Cutting-edge gaming experience" },
    { icon: Award, title: "Excellence", desc: "Premium quality entertainment" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl font-bold mb-4">About Aquastruct</h1>
              <p className="text-xl text-white/80">Leading the future of virtual casino entertainment</p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-white/80 mb-4">
                  To provide premium entertainment through virtual casino gaming, ensuring every player experiences fair play, transparency, and responsible gaming practices.
                </p>
                <p className="text-lg text-white/80">
                  We believe gaming should be fun, safe, and accessible to everyone without financial risk.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Vision</h2>
                <p className="text-lg text-white/80 mb-4">
                  To become the world's most trusted social casino platform, where millions enjoy premium entertainment with complete transparency and peace of mind.
                </p>
                <p className="text-lg text-white/80">
                  We're committed to continuous innovation and player satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-b from-[#1a0f3a] to-[#0a0e27]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
              <p className="text-lg text-white/70">Guiding principles that define everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="card-premium text-center"
                  >
                    <Icon className="text-[#00FF88] mx-auto mb-4" size={40} />
                    <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                    <p className="text-white/70">{value.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a0f3a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-premium max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Company Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-[#00FF88] font-semibold mb-2">Organization Name</p>
                  <p className="text-white/80">Aquastruct Construction Private Limited</p>
                </div>
                <div>
                  <p className="text-[#FF006E] font-semibold mb-2">Address</p>
                  <p className="text-white/80">C/O LAXMAN DASS, KHANDAK, PANTHAL KATRA, Panthal, Udhampur, Jammu and Kashmir 182320, India</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[#FFD700] font-semibold mb-2">CIN</p>
                    <p className="text-white/80">U41001JK2023PTC014834</p>
                  </div>
                  <div>
                    <p className="text-[#00FF88] font-semibold mb-2">PAN</p>
                    <p className="text-white/80">AAZCA0661R</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#FF006E] font-semibold mb-2">Email</p>
                  <p className="text-white/80">Support@playaquacasino.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
