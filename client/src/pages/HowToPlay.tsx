import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">How to Play</h1>
            <p className="text-xl text-white/80">Get started with our virtual casino games</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="registration" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="registration">Registration</TabsTrigger>
                <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>
              <TabsContent value="registration" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Getting Started</h3>
                  <p className="text-muted-foreground">Step-by-step guide to create your account and start playing.</p>
                </div>
              </TabsContent>
              <TabsContent value="gameplay" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Game Instructions</h3>
                  <p className="text-muted-foreground">Learn how to play each game and understand the rules.</p>
                </div>
              </TabsContent>
              <TabsContent value="rewards" className="mt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Rewards & Achievements</h3>
                  <p className="text-muted-foreground">Discover how to earn rewards and climb the leaderboards.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
