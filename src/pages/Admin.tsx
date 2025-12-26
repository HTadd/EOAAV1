import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const PROGRAM_REPORTS = [
  {
    id: 1,
    programName: "River Rowing Club",
    reportedIssue: "Contact info is outdated",
    reporter: "athlete123",
    status: "open",
    date: "2025-12-15",
  },
  {
    id: 2,
    programName: "City Track Club",
    reportedIssue: "Not wheelchair accessible",
    reporter: "user456",
    status: "resolved",
    date: "2025-12-10",
  },
];

const MESSAGE_REPORTS = [
  {
    id: 1,
    sender: "anonymous_user",
    message: "[Flagged for profanity/harassment]",
    status: "open",
    date: "2025-12-16",
  },
];

const AUDIT_LOG = [
  {
    id: 1,
    action: "Program Verified",
    target: "City Track Club",
    admin: "Admin Sarah",
    date: "2025-12-14",
  },
  {
    id: 2,
    action: "Report Resolved",
    target: "River Rowing Club",
    admin: "Admin John",
    date: "2025-12-10",
  },
  {
    id: 3,
    action: "User Suspended",
    target: "inappropriate_user",
    admin: "Admin Sarah",
    date: "2025-12-05",
  },
];

export default function Admin() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <p className="mt-2 text-lg opacity-90">Moderation, verification, and audit logs</p>
      </div>

      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="w-full bg-muted">
          <TabsTrigger value="programs" className="flex-1">
            Program Reports
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex-1">
            Message Reports
          </TabsTrigger>
          <TabsTrigger value="audit" className="flex-1">
            Audit Log
          </TabsTrigger>
          <TabsTrigger value="verify" className="flex-1">
            Verify Programs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="programs" className="space-y-4 mt-6">
          <h2 className="text-lg font-semibold text-foreground">Program Listing Reports</h2>
          {PROGRAM_REPORTS.map((report) => (
            <Card key={report.id} className="bg-card p-5 border border-border">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{report.programName}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{report.reportedIssue}</p>
                  <p className="text-xs text-muted-foreground mt-1">Reported by {report.reporter} on {report.date}</p>
                </div>
                <Badge className={report.status === "open" ? "bg-orange-600 text-white" : "bg-green-600 text-white"}>
                  {report.status === "open" ? "Open" : "Resolved"}
                </Badge>
              </div>
              {report.status === "open" && (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Dismiss
                  </Button>
                  <Button size="sm">Resolve & Take Action</Button>
                </div>
              )}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="messages" className="space-y-4 mt-6">
          <h2 className="text-lg font-semibold text-foreground">Flagged Messages</h2>
          {MESSAGE_REPORTS.map((report) => (
            <Card key={report.id} className="bg-card p-5 border border-border">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{report.sender}</h3>
                  <p className="text-sm text-muted-foreground italic mt-1">{report.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">Reported on {report.date}</p>
                </div>
                <Badge className="bg-orange-600 text-white">Open</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  Dismiss
                </Button>
                <Button size="sm">Warn User</Button>
                <Button size="sm" variant="destructive">
                  Suspend
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="audit" className="space-y-4 mt-6">
          <h2 className="text-lg font-semibold text-foreground">Audit Log</h2>
          <div className="space-y-3">
            {AUDIT_LOG.map((log) => (
              <Card key={log.id} className="bg-card p-4 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{log.action}</h3>
                    <p className="text-sm text-muted-foreground">
                      {log.target} by {log.admin}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{log.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="verify" className="space-y-4 mt-6">
          <h2 className="text-lg font-semibold text-foreground">Verify/Update Programs</h2>
          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">City Track Club</h3>
                <p className="text-sm text-muted-foreground">Last verified: 2025-12-14</p>
              </div>
              <Button size="sm" variant="outline">
                ✓ Mark Verified
              </Button>
            </div>
          </Card>
          <Card className="bg-card p-5 border border-border">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">River Rowing Club</h3>
                <p className="text-sm text-muted-foreground">Never verified</p>
              </div>
              <Button size="sm">✓ Mark Verified</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
