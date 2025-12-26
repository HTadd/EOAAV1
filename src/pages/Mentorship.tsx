import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MENTORS = [
  {
    id: 1,
    name: "Coach Alex",
    sport: "Track & Field",
    level: "Competitive",
    location: "Illinois",
    bio: "10+ years coaching adaptive track athletes",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    sport: "Swimming",
    level: "Intermediate",
    location: "Illinois",
    bio: "Former Paralympic swimmer, now coaching",
  },
  {
    id: 3,
    name: "Marcus Lee",
    sport: "Wheelchair Basketball",
    level: "Competitive",
    location: "Chicago Metro",
    bio: "Professional player transitioning to mentoring",
  },
];

export default function Mentorship() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Mentorship</h1>
            <p className="mt-2 text-lg opacity-90">Find and connect with experienced mentors</p>
          </div>
          <Badge className="bg-yellow-500 text-gray-900 text-sm font-semibold px-3 py-1 whitespace-nowrap">
            Work in Progress
          </Badge>
        </div>
      </div>

      <Card className="bg-amber-50 dark:bg-amber-900/20 p-4 border border-amber-200 dark:border-amber-800">
        <p className="text-sm text-amber-900 dark:text-amber-100">
          <strong>Coming Soon:</strong> We're building a comprehensive mentorship matching system. This feature will launch in early 2026 with AI-powered mentor recommendations based on your sport, experience level, and goals.
        </p>
      </Card>

      <Card className="bg-card p-6 border border-border">
        <h2 className="font-semibold text-foreground mb-3">Why Mentorship?</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>✓ Learn from experienced athletes and coaches</li>
          <li>✓ Get personalized advice and encouragement</li>
          <li>✓ Connect with your athletic community</li>
          <li>✓ Overcome challenges together</li>
        </ul>
      </Card>
    </div>
  );
}
