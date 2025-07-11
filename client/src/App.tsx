import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import SplashCursor from "./components/Animations/SplashCursor/SplashCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/notAvailable" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <SplashCursor/>
    </QueryClientProvider>
  );
}

export default App;
