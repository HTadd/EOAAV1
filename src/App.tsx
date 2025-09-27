import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorBlindProvider } from "@/contexts/ColorBlindContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import WhoWeAre from "./pages/WhoWeAre";
import GetInvolved from "./pages/GetInvolved";
import Classification from "./pages/Classification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ColorBlindProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/classification" element={<Classification />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ColorBlindProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
