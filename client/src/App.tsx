import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";

import GameDetail from "./pages/GameDetail";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import SlotGame from "./pages/SlotGame";
import PokerGame from "./pages/PokerGame";
import RouletteGame from "./pages/RouletteGame";
import DiceGame from "./pages/DiceGame";
import MinesGame from "./pages/MinesGame";
import ChickenGame from "./pages/ChickenGame";
import SlotDetail from "./pages/SlotDetail";
import PokerDetail from "./pages/PokerDetail";
import RouletteDetail from "./pages/RouletteDetail";
import DiceDetail from "./pages/DiceDetail";
import MinesDetail from "./pages/MinesDetail";
import ChickenDetail from "./pages/ChickenDetail";

/**
 * Design Philosophy: Premium Digital Entertainment with Luxury Accents
 * - Purple (#7B2CBF) and Gold (#FFD700) color scheme
 * - Sophisticated yet accessible gaming interface
 * - Emphasis on trust, excitement, and responsible gaming
 */

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/how-to-play"} component={HowToPlay} />

      <Route path={"/game-detail/:gameId"} component={GameDetail} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={ResponsibleGaming} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/faq"} component={FAQ} />

      <Route path={"/game/slots"} component={SlotDetail} />
      <Route path={"/game/poker"} component={PokerDetail} />
      <Route path={"/game/roulette"} component={RouletteDetail} />
      <Route path={"/game/dice"} component={DiceDetail} />
      <Route path={"/game/mines"} component={MinesDetail} />
      <Route path={"/game/chicken"} component={ChickenDetail} />
      <Route path={"/play/slots"} component={SlotGame} />
      <Route path={"/play/poker"} component={PokerGame} />
      <Route path={"/play/roulette"} component={RouletteGame} />
      <Route path={"/play/dice"} component={DiceGame} />
      <Route path={"/play/mines"} component={MinesGame} />
      <Route path={"/play/chicken"} component={ChickenGame} />
      <Route path={"/404"} component={NotFound} />      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
