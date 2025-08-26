import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, HandHeart } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Athletes with Physical Differences",
    description: "Athletes who want to play and compete, regardless of their physical differences or adaptive needs.",
    color: "sport-blue",
  },
  {
    icon: Users,
    title: "Families",
    description: "Families seeking guidance and structured resources to support their athlete's journey.",
    color: "sport-green",
  },
  {
    icon: HandHeart,
    title: "Coaches & Volunteers",
    description: "Coaches and volunteers looking to support adaptive athletes and build inclusive communities.",
    color: "sport-orange",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building an inclusive community for everyone in adaptive athletics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card 
                key={index}
                className="text-center bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader className="pb-4">
                  <div className={`mx-auto w-20 h-20 rounded-full bg-${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;