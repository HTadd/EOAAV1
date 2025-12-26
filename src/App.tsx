import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorBlindProvider } from "@/contexts/ColorBlindContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import Resources from "./pages/Resources";
import WhoWeAre from "./pages/WhoWeAre";
import GetInvolved from "./pages/GetInvolved";
import Classification from "./pages/Classification";
import ClassificationPacketBuilder from "./pages/ClassificationPacketBuilder";
import StartWizard from "./pages/StartWizard";
import ProgramsList from "./pages/ProgramsList";
import ProgramDetail from "./pages/ProgramDetail";
import PathwaysList from "./pages/PathwaysList";
import PathwayDetail from "./pages/PathwayDetail";
import MyPlan from "./pages/MyPlan";
import FundingList from "./pages/FundingList";
import FundingDetail from "./pages/FundingDetail";
import Toolkit from "./pages/Toolkit";
import EquipmentList from "./pages/EquipmentList";
import EquipmentNew from "./pages/EquipmentNew";
import EquipmentDetail from "./pages/EquipmentDetail";
import Mentorship from "./pages/Mentorship";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Admin from "./pages/Admin";
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
            <Header />
            <main className="min-h-screen bg-background text-foreground">
              <div className="max-w-7xl mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/start" element={<StartWizard />} />
                  <Route path="/programs" element={<ProgramsList />} />
                  <Route path="/programs/:id" element={<ProgramDetail />} />
                  <Route path="/pathways" element={<PathwaysList />} />
                  <Route path="/pathways/:sport/:level" element={<PathwayDetail />} />
                  <Route path="/my-plan" element={<MyPlan />} />
                  <Route path="/funding" element={<FundingList />} />
                  <Route path="/funding/:id" element={<FundingDetail />} />
                  <Route path="/toolkit" element={<Toolkit />} />
                  <Route path="/equipment" element={<EquipmentList />} />
                  <Route path="/equipment/new" element={<EquipmentNew />} />
                  <Route path="/equipment/:id" element={<EquipmentDetail />} />
                  <Route path="/mentorship" element={<Mentorship />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/bookmarks" element={<Bookmarks />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/classification" element={<Classification />} />
                  <Route path="/classification/packet" element={<ClassificationPacketBuilder />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/who-we-are" element={<WhoWeAre />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </ColorBlindProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
