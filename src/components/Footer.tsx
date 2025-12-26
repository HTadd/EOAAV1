import { Trophy, Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-sport-blue rounded-full p-3">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">EOAA</h3>
                <p className="text-sm text-card-foreground/70">Equal Opportunities for Adaptive Athletics</p>
              </div>
            </div>
            <p className="text-card-foreground/80 leading-relaxed mb-6 max-w-md">
              Creating equal opportunities in sports for adaptive athletes. 
              Connecting athletes, families, and coaches with the resources they need to thrive.
            </p>
            <div className="flex items-center space-x-2 text-sport-orange">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Building an inclusive future</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-card-foreground/70 hover:text-card-foreground transition-colors">Services</a></li>
              <li><a href="#about" className="text-card-foreground/70 hover:text-card-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-card-foreground/70 hover:text-card-foreground transition-colors">Contact</a></li>
              <li><a href="#resources" className="text-card-foreground/70 hover:text-card-foreground transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sport-blue" />
                <span className="text-card-foreground/70">info@eoaa.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sport-blue" />
                <span className="text-card-foreground/70">1-800-EOAA-HELP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-card-foreground/60">
            © 2024 Equal Opportunities for Adaptive Athletics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;