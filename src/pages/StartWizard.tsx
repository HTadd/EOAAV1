import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function StartWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goals: "",
    sports: [] as string[],
    location: "",
    constraints: "",
  });
  const [results, setResults] = useState(null as any);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFinish = () => {
    // Generate "Next 5 actions"
    setResults({
      programs: [
        { id: 1, name: "City Track Club", city: "Springfield", sport: "Track" },
        { id: 2, name: "Adaptive Swimming Center", city: "Springfield", sport: "Swimming" },
      ],
      pathway: { sport: "Track", level: "Beginner" },
      grant: { title: "Youth Athletic Grant 2026", deadline: "2026-06-30" },
      checklist: { sport: "Track" },
    });
  };

  if (results) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold">Your Next 5 Actions</h1>
          <p className="mt-2 text-lg opacity-90">Based on your goals, let's get you started:</p>
        </div>

        <div className="grid gap-4">
          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start gap-3">
              <Trophy className="h-6 w-6 text-foreground mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Explore 2 Local Programs</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.programs[0].name} in {results.programs[0].city}
                </p>
                <p className="text-sm text-muted-foreground">
                  {results.programs[1].name} in {results.programs[1].city}
                </p>
                <Button className="mt-3" size="sm" variant="outline">
                  View Programs
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-foreground mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Review Classification Checklist</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.checklist.sport} classification docs & timeline
                </p>
                <Link to="/classification">
                  <Button className="mt-3" size="sm" variant="outline">
                    View Checklist
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-foreground mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Start a 4-Week Pathway</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.pathway.sport} • {results.pathway.level} Level
                </p>
                <Button className="mt-3" size="sm" variant="outline">
                  Add to My Plan
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start gap-3">
              <Trophy className="h-6 w-6 text-foreground mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Apply for Funding</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {results.grant.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Deadline: {results.grant.deadline}</p>
                <Button className="mt-3" size="sm" variant="outline">
                  Explore Grants
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <Button onClick={() => { setStep(1); setResults(null); }} className="w-full">
          Start Over
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Start Here</h1>
        <p className="mt-2 text-lg opacity-90">Let's find your next athletic opportunity in 4 easy steps</p>
      </div>

      <Card className="bg-card p-6 border border-border">
        <div className="mb-6">
          <div className="flex justify-between mb-3">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`flex-1 h-2 rounded ${s <= step ? "bg-blue-500" : "bg-muted"} ${s < step ? "mr-2" : s === step ? "mr-2" : "mr-2"}`} />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Step {step} of 4</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">What are your goals?</h2>
            <div className="grid gap-3">
              {["Recreation", "Competition", "College Scholarship", "Paralympic Pipeline"].map((goal) => (
                <Button
                  key={goal}
                  onClick={() => setFormData({ ...formData, goals: goal })}
                  variant={formData.goals === goal ? "default" : "outline"}
                  className="justify-start h-auto py-3"
                >
                  {goal}
                </Button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Which sports interest you?</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Track & Field", "Swimming", "Cycling", "Shooting", "Rowing", "Wheelchair Basketball"].map((sport) => (
                <Button
                  key={sport}
                  onClick={() => {
                    const updated = formData.sports.includes(sport)
                      ? formData.sports.filter((s) => s !== sport)
                      : [...formData.sports, sport];
                    setFormData({ ...formData, sports: updated });
                  }}
                  variant={formData.sports.includes(sport) ? "default" : "outline"}
                  className="justify-start"
                >
                  {formData.sports.includes(sport) && <CheckCircle2 className="mr-2 h-4 w-4" />}
                  {sport}
                </Button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Where are you located?</h2>
            <input
              type="text"
              placeholder="State or ZIP code"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Any constraints we should know?</h2>
            <div className="grid gap-3">
              {["Low Budget", "Need Loaner Gear", "Limited Travel", "No constraints"].map((constraint) => (
                <Button
                  key={constraint}
                  onClick={() => setFormData({ ...formData, constraints: constraint })}
                  variant={formData.constraints === constraint ? "default" : "outline"}
                  className="justify-start h-auto py-3"
                >
                  {constraint}
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-8">
          {step > 1 && <Button variant="outline" onClick={handlePrev}>Back</Button>}
          {step < 4 ? (
            <Button onClick={handleNext} className="flex-1">Next</Button>
          ) : (
            <Button onClick={handleFinish} className="flex-1">See My Next 5 Actions</Button>
          )}
        </div>
      </Card>
    </div>
  );
}
