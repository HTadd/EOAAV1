import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, BookOpen, Users, Play } from "lucide-react";

const services = [
  {
    icon: Trophy,
    title: "Competitions",
    description: "Stay updated on nearby adaptive sports events and tryouts. Whether you're looking for local leagues or national-level tournaments, EOAA highlights opportunities tailored for you.",
    color: "sport-blue",
  },
  {
    icon: BookOpen,
    title: "Classification Guides",
    description: "Clear explanations of athlete classifications (like SH1, SH2, etc.) so athletes and families can better understand eligibility and prepare for competition.",
    color: "sport-green",
  },
  {
    icon: Users,
    title: "Coaches & Mentors",
    description: "Direct contact information for adaptive sports coaches and mentors. Build connections that help athletes grow in skill, confidence, and community.",
    color: "sport-orange",
  },
  {
    icon: Play,
    title: "Instructional Videos",
    description: "Practice from home with training videos designed for adaptive athletes. Accessible drills and routines make progress possible anywhere.",
    color: "sport-purple",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive resources and support to help adaptive athletes reach their full potential
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
                  <div className={`mx-auto w-16 h-16 rounded-2xl bg-${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className={`rounded-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300`}
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