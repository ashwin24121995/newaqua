import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/80">Your privacy is important to us</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {[
                { title: "Data Collection", content: "We collect information necessary to provide our services and improve user experience." },
                { title: "How We Use Your Data", content: "Your data is used to maintain your account, provide customer support, and enhance our platform." },
                { title: "Data Protection", content: "We implement industry-standard security measures to protect your personal information." },
                { title: "Your Rights", content: "You have the right to access, modify, or delete your personal data at any time." },
                { title: "Cookie Policy", content: "We use cookies to enhance your browsing experience and analyze platform usage." },
                { title: "Third-Party Sharing", content: "We do not share your personal data with third parties without your consent." },
              ].map((section, i) => (
                <Card key={i} className="p-8 border-0 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground">{section.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
