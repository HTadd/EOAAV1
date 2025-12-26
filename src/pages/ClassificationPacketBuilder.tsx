import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download } from "lucide-react";

export default function ClassificationPacketBuilder() {
  const [sport, setSport] = useState("");
  const [competitionType, setCompetitionType] = useState("");
  const [notes, setNotes] = useState("");
  const [packet, setPacket] = useState(null as any);

  const handleGenerate = () => {
    setPacket({
      sport,
      competitionType,
      documents: [
        "Government-issued ID",
        "Birth Certificate",
        "Medical clearance form",
        "Previous classification documentation (if any)",
      ],
      timeline: "Submit 4-6 weeks before competition",
      dayOf: [
        "Arrive 30 minutes early",
        "Bring all documents and ID",
        "Wear comfortable athletic clothing",
        "Be prepared to demonstrate sport-specific skills",
      ],
      appointments: [
        { item: "Medical Assessment", time: "__________" },
        { item: "Classification Test", time: "__________" },
        { item: "Administrative Review", time: "__________" },
      ],
    });
  };

  if (packet) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
          <h1 className="text-3xl font-bold">Classification Packet</h1>
          <p className="mt-2 text-lg opacity-90">
            {packet.sport} • {packet.competitionType}
          </p>
        </div>

        <Card className="bg-yellow-50 dark:bg-yellow-900/20 p-4 border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            <strong>⚠️ Disclaimer:</strong> This packet is for informational purposes only and is not medical or official classification advice. Always verify current classification requirements with your sport's governing body.
          </p>
        </Card>

        <div className="space-y-6">
          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Documents to Bring</h2>
            <ul className="space-y-2">
              {packet.documents.map((doc: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {doc}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Timeline</h2>
            <p className="text-foreground">{packet.timeline}</p>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Day-Of Checklist</h2>
            <ul className="space-y-2">
              {packet.dayOf.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <input type="checkbox" className="w-4 h-4" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Appointment Times</h2>
            <div className="space-y-3">
              {packet.appointments.map((apt: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-foreground">{apt.item}</span>
                  <input
                    type="text"
                    placeholder="__________"
                    className="w-32 px-2 py-1 border border-border rounded bg-background text-foreground text-sm text-center"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 gap-2">
            <Download className="h-4 w-4" /> Export as PDF
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => setPacket(null)}>
            Create Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Classification Packet Builder</h1>
        <p className="mt-2 text-lg opacity-90">Generate a printable classification checklist and timeline</p>
      </div>

      <Card className="bg-card p-6 border border-border">
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Sport</label>
            <Select value={sport} onValueChange={setSport}>
              <SelectTrigger className="bg-background text-foreground border border-border">
                <SelectValue placeholder="Select a sport..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Track & Field">Track & Field</SelectItem>
                <SelectItem value="Swimming">Swimming</SelectItem>
                <SelectItem value="Cycling">Cycling</SelectItem>
                <SelectItem value="Shooting">Shooting</SelectItem>
                <SelectItem value="Rowing">Rowing</SelectItem>
                <SelectItem value="Wheelchair Basketball">Wheelchair Basketball</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Competition Type</label>
            <Select value={competitionType} onValueChange={setCompetitionType}>
              <SelectTrigger className="bg-background text-foreground border border-border">
                <SelectValue placeholder="Select type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Local/Regional">Local/Regional</SelectItem>
                <SelectItem value="National">National</SelectItem>
                <SelectItem value="Paralympic">Paralympic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Additional Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific details for your packet..."
              rows={4}
              className="w-full px-3 py-2 border border-border rounded bg-background text-foreground"
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={!sport || !competitionType}>
            <FileText className="h-4 w-4" /> Generate Packet
          </Button>
        </form>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>💡 Tip:</strong> You can print or export this packet to PDF and fill in the appointment times during your classification process.
        </p>
      </Card>
    </div>
  );
}
