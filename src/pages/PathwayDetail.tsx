import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

const PATHWAY_DETAIL = {
  "Track & Field": {
    Beginner: {
      title: "Track & Field for Beginners",
      duration: "4 weeks",
      description: "Start your running and field event journey with proper technique and safety.",
      weeks: [
        {
          week: 1,
          title: "Movement Basics",
          tasks: [
            "Visit track (familiarize yourself with environment)",
            "Basic warm-up and stretching routine",
            "Walk/jog for 15-20 minutes",
            "Cool down and hydration",
          ],
        },
        {
          week: 2,
          title: "Build a Base",
          tasks: [
            "Warm up dynamic stretching",
            "Jog for 20-25 minutes at conversational pace",
            "Add 4x2-minute faster segments",
            "Strength work: squats and lunges",
          ],
        },
        {
          week: 3,
          title: "Increase Intensity",
          tasks: [
            "Dynamic warm-up routine",
            "Tempo run: 3x3-minute intervals",
            "Recovery jog 10 minutes",
            "Core and stability exercises",
          ],
        },
        {
          week: 4,
          title: "Test & Assess",
          tasks: [
            "Full warm-up (10 min)",
            "Test run: maintain fastest safe pace for 10 min",
            "Cool down walk",
            "Reflect and plan next pathway",
          ],
        },
      ],
    },
  },
};

export default function PathwayDetail() {
  const { sport = "Track & Field", level = "Beginner" } = useParams();
  const pathway = PATHWAY_DETAIL[sport as keyof typeof PATHWAY_DETAIL]?.[level as keyof any];

  if (!pathway) {
    return (
      <Card className="bg-card p-6 border border-border text-center">
        <p className="text-muted-foreground">Pathway not found</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">{pathway.title}</h1>
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <Badge className="bg-white/20 text-white">{sport}</Badge>
          <Badge className="bg-white/20 text-white">{level}</Badge>
          <Badge className="bg-white/20 text-white">Duration: {pathway.duration}</Badge>
        </div>
        <p className="mt-3 text-lg opacity-90">{pathway.description}</p>
      </div>

      <div className="grid gap-4">
        {pathway.weeks.map((week, idx) => (
          <Card key={idx} className="bg-card p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="text-lg font-semibold px-3 py-1">
                  Week {week.week}
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg mb-3">{week.title}</h3>
                <ul className="space-y-2">
                  {week.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-2 text-muted-foreground">
                      <Circle className="h-5 w-5 mt-0.5 flex-shrink-0 text-muted" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button className="w-full h-12 text-lg">Add to My Plan</Button>

      <Card className="bg-yellow-50 dark:bg-yellow-900/20 p-4 border border-yellow-200 dark:border-yellow-800">
        <p className="text-sm text-yellow-900 dark:text-yellow-100">
          <strong>⚠️ Disclaimer:</strong> This pathway is not medical or coaching advice. Always consult with a qualified coach or medical professional before starting a new training program.
        </p>
      </Card>
    </div>
  );
}
