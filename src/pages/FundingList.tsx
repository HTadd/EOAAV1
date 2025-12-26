import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Clock } from "lucide-react";

const GRANTS = [
  {
    id: 1,
    title: "Youth Athletic Development Grant",
    organization: "Adaptive Sports Foundation",
    awardMin: 500,
    awardMax: 5000,
    deadline: "2026-06-30",
    eligibility: ["Youth (18-25)", "Adaptive Athlete"],
    daysUntil: 191,
  },
  {
    id: 2,
    title: "Equipment Access Fund",
    organization: "National Adaptive Sports",
    awardMin: 1000,
    awardMax: 10000,
    deadline: "2026-05-15",
    eligibility: ["Any Age", "Verified Program"],
    daysUntil: 146,
  },
  {
    id: 3,
    title: "Paralympic Pathway Scholarship",
    organization: "Olympic Committee Regional",
    awardMin: 2000,
    awardMax: 15000,
    deadline: "2026-04-30",
    eligibility: ["Competitive Athletes", "Paralympic Eligible"],
    daysUntil: 130,
  },
];

export default function FundingList() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("deadline");

  const filtered = GRANTS.filter((g) => g.title.toLowerCase().includes(search.toLowerCase()));
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "deadline") return a.daysUntil - b.daysUntil;
    if (sortBy === "award") return b.awardMax - a.awardMax;
    return 0;
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Funding & Grants</h1>
        <p className="mt-2 text-lg opacity-90">Explore grant opportunities to support your athletic journey</p>
      </div>

      <Card className="bg-card p-6 border border-border">
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Search grants..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-background text-foreground border border-border" />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-background text-foreground border border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deadline">Sort by Deadline</SelectItem>
              <SelectItem value="award">Sort by Award Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {sorted.length === 0 ? (
        <Card className="bg-card p-8 text-center border border-border">
          <p className="text-muted-foreground">No grants match your search</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sorted.map((grant) => (
            <Card key={grant.id} className="bg-card p-6 border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg">{grant.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{grant.organization}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {grant.eligibility.map((e) => (
                      <Badge key={e} variant="secondary" className="text-xs">
                        {e}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />${grant.awardMin.toLocaleString()} - ${grant.awardMax.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />{grant.daysUntil} days left
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
