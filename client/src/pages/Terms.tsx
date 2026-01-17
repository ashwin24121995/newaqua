import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl text-white/80">Please read our terms carefully</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {[
                { title: "User Agreement", content: "By using this platform, you agree to comply with all terms and conditions outlined herein." },
                { title: "Age Requirements", content: "Users must be 18 years or older to use this platform. We verify age during registration." },
                { title: "Prohibited Activities", content: "Users are prohibited from cheating, hacking, or engaging in any fraudulent activities." },
                { title: "Account Termination", content: "We reserve the right to terminate accounts that violate our terms or engage in misconduct." },
                { title: "Liability Limitations", content: "Aquastruct is not liable for indirect damages or losses resulting from platform use." },
                { title: "Dispute Resolution", content: "Any disputes will be resolved through our fair dispute resolution process." },
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
