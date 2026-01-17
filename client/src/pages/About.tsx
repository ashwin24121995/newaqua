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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl font-bold mb-4">About Aquastruct</h1>
              <p className="text-xl text-white/80">Leading the future of virtual casino entertainment</p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To provide premium entertainment through virtual casino gaming, ensuring every player experiences fair play, transparency, and responsible gaming practices.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe gaming should be fun, safe, and accessible to everyone without financial risk.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To become the world's most trusted social casino platform, where millions enjoy premium entertainment with complete transparency and peace of mind.
                </p>
                <p className="text-lg text-muted-foreground">
                  We're committed to continuous innovation and player satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">Guiding principles that define everything we do</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-12 text-center">Company Information</h2>
              <Card className="p-12 border-0 bg-secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-accent">Legal Details</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Organization:</strong> Aquastruct Construction Private Limited</p>
                      <p><strong>CIN:</strong> U41001JK2023PTC014834</p>
                      <p><strong>PAN:</strong> AAZCA0661R</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-accent">Contact Details</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p><strong>Email:</strong> Support@playaquacasino.com</p>
                      <p><strong>Location:</strong> Udhampur, Jammu and Kashmir 182320, India</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
