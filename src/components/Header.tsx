import { Button } from "@/components/ui/button";
import { Trophy, Eye, Menu } from "lucide-react";
import { useColorBlind } from "@/contexts/ColorBlindContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlind();

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
            <Link to="/resources" className="text-white hover:text-white/80 transition-colors font-medium">
              Resources
            </Link>
            <Link to="/who-we-are" className="text-white hover:text-white/80 transition-colors font-medium">
              Who We Are
            </Link>
            <Link to="/get-involved" className="text-white hover:text-white/80 transition-colors font-medium">
              Get Involved
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleColorBlindMode}
              variant="ghost"
              size="sm"
              className={`rounded-full p-2 text-white hover:bg-white/10 ${isColorBlindMode ? 'bg-white/20' : ''}`}
              title="Toggle Color Blind Friendly Mode"
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Link to="/resources">
              <Button variant="secondary" className="rounded-full px-6">
                Find Resources
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;