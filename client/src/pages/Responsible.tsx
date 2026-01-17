import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { AlertCircle, Heart, Shield } from "lucide-react";

export default function Responsible() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Responsible Gaming</h1>
            <p className="text-xl text-white/80">Your safety and wellbeing matter to us</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 border-0 bg-secondary mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Responsible Gaming Pledge</h2>
                <p className="text-lg text-muted-foreground">
                  We are committed to promoting safe and responsible gaming. Gaming should be fun and entertaining, never a source of harm or financial distress.
                </p>
              </Card>

              <div className="space-y-8">
                <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Shield className="text-primary flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Age Verification</h3>
                      <p className="text-muted-foreground">
                        Players must be 18 years or older. We verify age during registration.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Heart className="text-accent flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Self-Exclusion Options</h3>
                      <p className="text-muted-foreground">
                        Players can set limits on playtime, spending, or self-exclude from the platform entirely.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="text-destructive flex-shrink-0 mt-1" size={32} />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">Warning Signs</h3>
                      <p className="text-muted-foreground mb-4">
                        Watch for these signs of problem gaming:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Spending more time or money than intended</li>
                        <li>• Neglecting personal or professional responsibilities</li>
                        <li>• Gaming to escape problems or relieve stress</li>
                        <li>• Lying about gaming habits</li>
                        <li>• Experiencing financial difficulties</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-0 bg-secondary">
                  <h3 className="text-2xl font-semibold mb-4">Get Help</h3>
                  <p className="text-muted-foreground mb-4">
                    If you or someone you know is struggling with gaming, help is available:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• National Problem Gambling Helpline</p>
                    <p>• Gamblers Anonymous</p>
                    <p>• NCPG (National Council on Problem Gambling)</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
