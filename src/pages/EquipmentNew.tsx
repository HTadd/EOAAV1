import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EquipmentNew() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Create Equipment Listing</h1>
        <p className="mt-2 text-lg opacity-90">Share equipment with your community</p>
      </div>

      <Card className="bg-card p-6 border border-border">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Title</label>
            <Input placeholder="e.g., Track Spikes (Size 11)" className="bg-background text-foreground border border-border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Sport</label>
            <Input placeholder="Select a sport..." className="bg-background text-foreground border border-border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Type</label>
            <select className="w-full px-3 py-2 border border-border rounded bg-background text-foreground">
              <option>For Loan</option>
              <option>For Sale</option>
              <option>For Borrow</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Condition</label>
            <select className="w-full px-3 py-2 border border-border rounded bg-background text-foreground">
              <option>Like New</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Location</label>
            <Input placeholder="City, State" className="bg-background text-foreground border border-border" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Description</label>
            <textarea
              placeholder="Describe the equipment..."
              rows={4}
              className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
            />
          </div>
          <Button className="w-full">Create Listing</Button>
        </form>
      </Card>
    </div>
  );
}
