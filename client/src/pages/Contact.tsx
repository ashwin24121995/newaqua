import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80">We're here to help</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="text-primary" size={32} />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <p className="text-muted-foreground">Support@playaquacasino.com</p>
              </Card>
              <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="text-primary" size={32} />
                  <h3 className="text-xl font-semibold">Address</h3>
                </div>
                <p className="text-muted-foreground">Udhampur, Jammu and Kashmir 182320, India</p>
              </Card>
              <Card className="p-8 border-0 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="text-primary" size={32} />
                  <h3 className="text-xl font-semibold">Response Time</h3>
                </div>
                <p className="text-muted-foreground">24-48 hours</p>
              </Card>
            </div>

            <Card className="p-12 border-0 bg-secondary max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 border border-border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 border border-border rounded-lg h-32"></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">Send Message</Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
