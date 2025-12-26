import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark } from "lucide-react";

const BOOKMARKS = [
  {
    id: 1,
    type: "Program",
    title: "City Track Club",
    subtitle: "Springfield, IL",
  },
  {
    id: 2,
    type: "Grant",
    title: "Youth Athletic Development Grant",
    subtitle: "Adaptive Sports Foundation",
  },
  {
    id: 3,
    type: "Equipment",
    title: "Track Spikes (Size 11)",
    subtitle: "For Loan - Springfield, IL",
  },
  {
    id: 4,
    type: "Mentor",
    title: "Coach Alex",
    subtitle: "Track & Field Coach",
  },
];

export default function Bookmarks() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Bookmarks</h1>
        <p className="mt-2 text-lg opacity-90">Your saved programs, grants, equipment, and mentors</p>
      </div>

      {BOOKMARKS.length === 0 ? (
        <Card className="bg-card p-8 text-center border border-border">
          <p className="text-muted-foreground">No bookmarks yet. Start saving items as you explore!</p>
        </Card>
      ) : (
        <div className="grid gap-3">
          {BOOKMARKS.map((item) => (
            <Card key={item.id} className="bg-card p-5 border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">{item.type}</p>
                  <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.subtitle}</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 fill-current" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
