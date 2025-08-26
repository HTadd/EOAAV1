import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    text: "Break down barriers to entry in adaptive athletics",
  },
  {
    icon: Users,
    text: "Build a welcoming, supportive community",
  },
  {
    icon: Zap,
    text: "Inspire organizations to invest in equal opportunities for all athletes",
  },
];

const features = [
  {
    icon: CheckCircle,
    text: "Accessible design",
  },
  {
    icon: CheckCircle,
    text: "Athlete-focused content",
  },
  {
    icon: CheckCircle,
    text: "Community-driven resources",
  },
];

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            EOAA is more than a website — it's a movement. We're building a future where every athlete has equal opportunities to excel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">We aim to:</h3>
            <div className="space-y-6">
              {visionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                What Makes Us Different
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="h-6 w-6 text-sport-orange flex-shrink-0" />
                      <span className="text-white font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-white text-sport-purple hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Join the Movement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;