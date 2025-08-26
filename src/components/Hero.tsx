import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-athletes.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Breaking Barriers in 
              <span className="text-sport-orange"> Adaptive Sports </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Since 2019, we've helped over 2,500 athletes find their sport. Whether you're a parent seeking 
              guidance, an athlete ready to compete, or a coach building inclusive programs, we're here to help 
              you navigate the world of adaptive athletics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-sport-orange hover:bg-sport-orange/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Find My Sport
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold">
                <Heart className="mr-2 h-5 w-5" />
                Connect with Coaches
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse adaptive athletes participating in various sports"
                className="rounded-3xl shadow-hero w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-sport-orange rounded-full p-4 animate-pulse">
                <Trophy className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;