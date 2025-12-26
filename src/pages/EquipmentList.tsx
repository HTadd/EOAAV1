import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Package, Zap } from "lucide-react";

const EQUIPMENT = [
  {
    id: 1,
    title: "Track Spikes (Size 11)",
    sport: "Track & Field",
    condition: "Like New",
    location: "Springfield, IL",
    type: "For Loan",
    owner: "Coach Maria",
  },
  {
    id: 2,
    title: "Racing Wheelchair (Everyday)",
    sport: "Wheelchair Basketball",
    condition: "Good",
    location: "Chicago, IL",
    type: "For Sale",
    owner: "Alex Chen",
  },
  {
    id: 3,
    title: "Swimming Fins Set",
    sport: "Swimming",
    condition: "Excellent",
    location: "Evanston, IL",
    type: "For Loan",
    owner: "Pool Program",
  },
];

export default function EquipmentList() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Equipment Marketplace</h1>
        <p className="mt-2 text-lg opacity-90">Borrow, buy, or lend adaptive sports equipment locally</p>
      </div>

      <div className="flex gap-3">
        <Input placeholder="Search equipment..." className="bg-card text-foreground border border-border" />
        <Button>Create Listing</Button>
      </div>

      <div className="grid gap-4">
        {EQUIPMENT.map((item) => (
          <Card key={item.id} className="bg-card p-5 border border-border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">{item.sport}</Badge>
                  <Badge
                    className={item.type === "For Loan" ? "bg-green-600 text-white" : "bg-blue-600 text-white"}
                  >
                    {item.type}
                  </Badge>
                  <Badge variant="outline">{item.condition}</Badge>
                </div>
                <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {item.location}
                </div>
                <p className="text-sm text-muted-foreground mt-1">by {item.owner}</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
