import { Button } from "@/components/ui/button";
import { Trophy, Eye, Menu, Moon, Sun, ChevronDown } from "lucide-react";
import { useColorBlind } from "@/contexts/ColorBlindContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlind();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAdmin = false; // TODO: fetch from auth context

  return (
    <header className="bg-gradient-hero shadow-hero sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" aria-label="Go to homepage" className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-ring rounded-md px-1 py-1">
            <div className="rounded-full p-3 bg-muted/20 group-hover:scale-105 transition-transform">
              <Trophy className="h-8 w-8 text-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">EOAA</h1>
              <p className="text-sm text-foreground/90">Equal Opportunities for Adaptive Athletics</p>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/start">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                Start Here
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                Programs
              </Button>
            </Link>
            <Link to="/pathways">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                Pathways
              </Button>
            </Link>
            <Link to="/funding">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                Funding
              </Button>
            </Link>
            <Link to="/my-plan">
              <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                My Plan
              </Button>
            </Link>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/classification" className="cursor-pointer">Classification</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/equipment" className="cursor-pointer">Equipment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/mentorship" className="cursor-pointer">Mentorship</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/messages" className="cursor-pointer">Messages</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/bookmarks" className="cursor-pointer">Bookmarks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/resources" className="cursor-pointer">Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/who-we-are" className="cursor-pointer">Who We Are</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/get-involved" className="cursor-pointer">Get Involved</Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link to="/admin" className="cursor-pointer">Admin</Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleDarkMode}
              variant="ghost"
              size="sm"
              className="rounded-full p-2"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              onClick={toggleColorBlindMode}
              variant="ghost"
              size="sm"
              className={`rounded-full p-2 ${isColorBlindMode ? 'bg-muted/20' : ''}`}
              title="Toggle Color Blind Friendly Mode"
            >
              <Eye className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="rounded-full p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="flex flex-col space-y-3 mt-6">
                  <Link to="/start" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Start Here
                    </Button>
                  </Link>
                  <Link to="/programs" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Programs
                    </Button>
                  </Link>
                  <Link to="/pathways" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Pathways
                    </Button>
                  </Link>
                  <Link to="/funding" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Funding
                    </Button>
                  </Link>
                  <Link to="/my-plan" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      My Plan
                    </Button>
                  </Link>
                  <Link to="/classification" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Classification
                    </Button>
                  </Link>
                  <Link to="/equipment" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Equipment
                    </Button>
                  </Link>
                  <Link to="/mentorship" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Mentorship
                    </Button>
                  </Link>
                  <Link to="/messages" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Messages
                    </Button>
                  </Link>
                  <Link to="/bookmarks" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Bookmarks
                    </Button>
                  </Link>
                  <Link to="/resources" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Resources
                    </Button>
                  </Link>
                  <Link to="/who-we-are" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Who We Are
                    </Button>
                  </Link>
                  <Link to="/get-involved" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-foreground">
                      Get Involved
                    </Button>
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-foreground">
                        Admin
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;