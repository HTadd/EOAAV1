import { Button } from "@/components/ui/button";
import { Trophy, Users, BookOpen, Play } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero shadow-hero sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-3">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">EOAA</h1>
              <p className="text-sm text-white/90">Equal Opportunities for Adaptive Athletics</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-white hover:text-white/80 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors font-medium">
              Contact
            </a>
          </div>

          <Button variant="secondary" className="rounded-full px-6">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;