import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    text: "Remove the 'I don't know where to start' barrier that stops 67% of potential adaptive athletes",
  },
  {
    icon: Users,
    text: "Connect isolated athletes with thriving local communities—no one should train alone",
  },
  {
    icon: Zap,
    text: "Advocate for equipment funding and facility access in underserved regions",
  },
];

const features = [
  {
    icon: CheckCircle,
    text: "Screen reader compatible design",
  },
  {
    icon: CheckCircle,
    text: "Created with Paralympic athletes",
  },
  {
    icon: CheckCircle,
    text: "Updated weekly by volunteers",
  },
];

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why We Do This Work
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Founded by former Paralympic swimmer Jessica Martinez after she couldn't find resources for her nephew with spina bifida. 
            What started as a simple directory has become a movement reaching athletes in all 50 states.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Our mission is to:</h3>
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
                Built Different
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
                  Start Your Journey
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