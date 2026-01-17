import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    { category: "Account & Registration", items: [
      { q: "How do I create an account?", a: "Click 'Sign Up' and fill in your details. You must be 18+ to register." },
      { q: "Is my data secure?", a: "Yes, we use industry-standard encryption to protect your personal information." },
    ]},
    { category: "Games & Gameplay", items: [
      { q: "How do I earn virtual coins?", a: "You receive daily free coins. You can also earn coins by playing games and completing achievements." },
      { q: "Can I play on mobile?", a: "Yes, our platform is fully responsive and works on all devices." },
    ]},
    { category: "Virtual Currency", items: [
      { q: "What is virtual currency?", a: "Virtual coins are used in games but have no real-world value and cannot be exchanged for money." },
    ]},
    { category: "Responsible Gaming", items: [
      { q: "Is this platform safe?", a: "Yes, we prioritize player safety with age verification and responsible gaming tools." },
    ]},
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80">Find answers to common questions</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.items.map((item, j) => (
                    <AccordionItem key={j} value={`${i}-${j}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-lg font-semibold text-left">{item.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
