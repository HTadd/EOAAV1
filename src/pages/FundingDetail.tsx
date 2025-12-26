import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, ExternalLink } from "lucide-react";

const GRANT_DATA = {
  id: 1,
  title: "Youth Athletic Development Grant",
  organization: "Adaptive Sports Foundation",
  description: "Support adaptive athletes aged 18-25 with funds for training, travel, and equipment",
  awardMin: 500,
  awardMax: 5000,
  deadline: "2026-06-30",
  daysUntil: 191,
  eligibility: ["Youth (18-25)", "Adaptive Athlete", "Training in recognized sport"],
  requiredDocs: ["Application form", "Essay (500 words)", "Coach recommendation", "Budget worksheet"],
  processSteps: [
    "Complete application form",
    "Write personal essay on athletic goals",
    "Request coach recommendation letter",
    "Submit budget and supporting docs",
    "Await review (30 days)",
    "Winners notified by July 31",
  ],
};

export default function FundingDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{GRANT_DATA.title}</h1>
            <p className="mt-2 text-lg opacity-90">{GRANT_DATA.organization}</p>
          </div>
          <Button variant="outline" className="gap-2" size="sm">
            <Bookmark className="h-4 w-4" /> Save
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">About This Grant</h2>
            <p className="text-muted-foreground">{GRANT_DATA.description}</p>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Eligibility</h2>
            <ul className="space-y-2">
              {GRANT_DATA.eligibility.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Required Documents</h2>
            <ul className="space-y-2">
              {GRANT_DATA.requiredDocs.map((doc, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  {doc}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Application Process</h2>
            <div className="space-y-3">
              {GRANT_DATA.processSteps.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h3 className="font-semibold mb-4 text-foreground">Award Details</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Award Range</p>
                <p className="font-semibold text-foreground mt-1">
                  ${GRANT_DATA.awardMin.toLocaleString()} - ${GRANT_DATA.awardMax.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Deadline</p>
                <p className="font-semibold text-foreground mt-1">{GRANT_DATA.deadline}</p>
                <p className="text-xs text-orange-600 font-medium mt-1">{GRANT_DATA.daysUntil} days remaining</p>
              </div>
            </div>
          </Card>

          <Card className="bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200 dark:border-blue-800">
            <p className="text-xs text-blue-900 dark:text-blue-100">
              <strong>Tip:</strong> Use the Funding Toolkit to create a draft budget worksheet and letters before applying!
            </p>
          </Card>

          <Button className="w-full gap-2 h-12 text-base">
            <ExternalLink className="h-4 w-4" /> Apply Now (Opens external link)
          </Button>

          <Button variant="outline" className="w-full">
            Add to My Bookmarks
          </Button>
        </div>
      </div>
    </div>
  );
}
