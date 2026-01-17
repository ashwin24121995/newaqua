import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import Games from "./pages/Games";
import GameDetail from "./pages/GameDetail";
import FairPlay from "./pages/FairPlay";
import Responsible from "./pages/Responsible";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Lobby from "./pages/Lobby";
import GameLobby from "./pages/GameLobby";

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
      <Route path={"/games"} component={Games} />
      <Route path={"/games/:gameId"} component={GameDetail} />
      <Route path={"/fair-play"} component={FairPlay} />
      <Route path={"/responsible-gaming"} component={Responsible} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/lobbies"} component={Lobby} />
      <Route path={"/game-lobby/:gameId/:roomId"} component={GameLobby} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
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
