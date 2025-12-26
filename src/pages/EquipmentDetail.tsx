import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Flag } from "lucide-react";

export default function EquipmentDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Track Spikes (Size 11)</h1>
        <div className="flex gap-2 mt-3">
          <Badge className="bg-white/20 text-white">Track & Field</Badge>
          <Badge className="bg-white/20 text-white">For Loan</Badge>
          <Badge className="bg-white/20 text-white">Like New</Badge>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">About This Item</h2>
            <p className="text-muted-foreground">
              Lightly used Asics track spikes in excellent condition. Only worn for practice, not in competition. Perfect for someone starting or continuing their track career.
            </p>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Type</p>
                <p className="font-medium text-foreground mt-1">For Loan</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium text-foreground mt-1">Springfield, IL</p>
              </div>
              <div>
                <p className="text-muted-foreground">Condition</p>
                <p className="font-medium text-foreground mt-1">Like New</p>
              </div>
              <div>
                <p className="text-muted-foreground">Contact</p>
                <p className="font-medium text-foreground mt-1">Coach Maria</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h3 className="font-semibold mb-3 text-foreground">Owner</h3>
            <p className="font-medium text-foreground">Coach Maria</p>
            <p className="text-sm text-muted-foreground">Track & Field Coach</p>
          </Card>

          <div className="space-y-2">
            <Button className="w-full gap-2">
              <MessageCircle className="h-4 w-4" /> Message Owner
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Flag className="h-4 w-4" /> Report Listing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
