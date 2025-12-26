import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, BookOpen, Users, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Trophy,
    title: "Local Competitions & Events",
    description: "We maintain partnerships with 47 regional sports organizations. Last month, we connected 180 athletes to competitions in wheelchair basketball, para-swimming, and adaptive track & field within 50 miles of their location.",
    color: "sport-blue",
    pattern: "▲", // Visual indicator for color blind users
  },
  {
    icon: BookOpen,
    title: "Classification Made Simple", 
    description: "Confused about T54 vs T53? Our step-by-step guides break down Paralympic classifications in plain English. We've helped 800+ families understand eligibility requirements and prepare for their first classification session.",
    color: "sport-green",
    pattern: "●",
  },
  {
    icon: Users,
    title: "Verified Coach Network",
    description: "All 95 coaches in our directory are background-checked with adaptive sports certifications. Connect directly with coaches like Sarah Chen (Paralympic swimming) or Marcus Rodriguez (wheelchair racing) in your area.",
    color: "sport-orange", 
    pattern: "■",
  },
  {
    icon: Play,
    title: "Training Videos That Work",
    description: "Created by Paralympic athletes and certified trainers. Our most popular video 'Wheelchair Racing Basics' has helped 1,200+ athletes master proper technique from their living room.",
    color: "sport-purple",
    pattern: "♦",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (title: string) => {
    if (title === "Local Competitions & Events") {
      navigate("/programs");
    } else if (title === "Classification Made Simple") {
      navigate("/classification");
    } else if (title === "Verified Coach Network") {
      navigate("/mentorship");
    } else if (title === "Training Videos That Work") {
      navigate("/toolkit");
    }
  };
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Resources, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just provide information—we create direct pathways to participation. Here's how we've helped thousands of athletes get started:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-2xl bg-${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <Icon className="h-8 w-8 text-white" />
                    <span className="absolute -top-2 -right-2 text-2xl font-bold text-foreground opacity-20">
                      {service.pattern}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-card-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className={`rounded-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300`}
                    onClick={() => handleLearnMore(service.title)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;