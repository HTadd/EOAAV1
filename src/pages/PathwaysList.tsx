import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PATHWAYS = [
  { id: 1, sport: "Track & Field", level: "Beginner", duration: "4 weeks", description: "Start your running journey" },
  { id: 2, sport: "Track & Field", level: "Intermediate", duration: "6 weeks", description: "Build speed and endurance" },
  { id: 3, sport: "Track & Field", level: "Competitive", duration: "8 weeks", description: "Race prep program" },
  { id: 4, sport: "Swimming", level: "Beginner", duration: "4 weeks", description: "Learn fundamentals in pool" },
  { id: 5, sport: "Swimming", level: "Intermediate", duration: "6 weeks", description: "Develop stroke technique" },
  { id: 6, sport: "Cycling", level: "Beginner", duration: "4 weeks", description: "Road bike fundamentals" },
  { id: 7, sport: "Rowing", level: "Beginner", duration: "6 weeks", description: "Water safety & boat handling" },
  { id: 8, sport: "Wheelchair Basketball", level: "Beginner", duration: "4 weeks", description: "Court basics & skills" },
];

export default function PathwaysList() {
  const sports = [...new Set(PATHWAYS.map((p) => p.sport))];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Pathways</h1>
        <p className="mt-2 text-lg opacity-90">Sport-specific 4-8 week training plans</p>
      </div>

      <Tabs defaultValue={sports[0]} className="w-full">
        <TabsList className="w-full bg-muted">
          {sports.map((sport) => (
            <TabsTrigger key={sport} value={sport} className="flex-1">
              {sport}
            </TabsTrigger>
          ))}
        </TabsList>

        {sports.map((sport) => (
          <TabsContent key={sport} value={sport} className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PATHWAYS.filter((p) => p.sport === sport).map((pathway) => (
                <Card key={pathway.id} className="bg-card p-5 border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-lg">{pathway.level}</h3>
                    <Badge variant="secondary">{pathway.duration}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{pathway.description}</p>
                  <Button className="w-full">View & Add to Plan</Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>💡 Tip:</strong> After selecting a pathway, you'll create your personalized plan in "My Plan" where you can track weekly tasks and build a streak!
        </p>
      </Card>
    </div>
  );
}
