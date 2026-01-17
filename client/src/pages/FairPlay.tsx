import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Fair Play & Transparency</h1>
            <p className="text-xl text-white/80">Our commitment to fairness and transparency</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 border-0 bg-secondary mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Fair Play Commitment</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We are committed to providing a fair, transparent, and trustworthy gaming environment for all our players.
                </p>
              </Card>

              <div className="space-y-8">
                {[
                  { title: "Random Number Generator (RNG)", desc: "All games use certified RNG algorithms" },
                  { title: "Game Mechanics Transparency", desc: "Clear odds and probabilities disclosed" },
                  { title: "Anti-Cheating Measures", desc: "Advanced security systems protect fair play" },
                  { title: "Third-Party Audits", desc: "Regular independent audits ensure compliance" },
                  { title: "Dispute Resolution", desc: "Fair and transparent dispute resolution process" },
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-0 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
