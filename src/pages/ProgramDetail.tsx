import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, MessageCircle, Flag, CheckCircle2, MapPin, Calendar, AlertCircle, ArrowLeft } from "lucide-react";
import { COMPETITIONS } from "@/data/competitions";

export default function ProgramDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  const competition = COMPETITIONS.find((c) => c.id === id);

  if (!competition) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <Button variant="outline" onClick={() => navigate("/programs")} className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Events
        </Button>
        <Card className="bg-card p-8 text-center border border-border">
          <p className="text-muted-foreground text-lg">Event not found.</p>
          <Button onClick={() => navigate("/programs")} className="mt-4">
            Return to Events
          </Button>
        </Card>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const dateDiff = Math.ceil((new Date(competition.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Button variant="outline" onClick={() => navigate("/programs")} className="gap-2">
        <ArrowLeft className="h-4 w-4" /> Back to Events
      </Button>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{competition.name}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <Badge className="bg-white/20 text-white">✓ Verified</Badge>
              <Badge className="bg-white/20 text-white">{competition.sport}</Badge>
              {competition.dateStatus === "TENTATIVE" && (
                <Badge className="bg-amber-400 text-gray-900 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> Tentative
                </Badge>
              )}
              {competition.dateStatus === "FIRM" && (
                <Badge className="bg-green-400 text-gray-900">Confirmed</Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={bookmarked ? "default" : "outline"}
              size="sm"
              onClick={() => setBookmarked(!bookmarked)}
              className="gap-2"
            >
              <Bookmark className="h-4 w-4" />
              {bookmarked ? "Saved" : "Save"}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Event Details</h2>
            <div className="space-y-3 text-foreground">
              <div>
                <p className="text-muted-foreground text-sm">Host Organization</p>
                <p className="font-medium">{competition.hostOrganization}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Event Type</p>
                <p className="font-medium">{competition.eventType}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-medium flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" /> {competition.city}, {competition.state}
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Dates & Schedule</h2>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Start Date</p>
                <p className="font-medium text-foreground flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" /> {formatDate(competition.startDate)}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">End Date</p>
                <p className="font-medium text-foreground flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4" /> {formatDate(competition.endDate)}
                </p>
              </div>
              {dateDiff > 0 && (
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-green-600 font-medium">
                    {dateDiff} day{dateDiff !== 1 ? "s" : ""} away
                  </p>
                </div>
              )}
            </div>
          </Card>

          <Card className="bg-card p-6 border border-border">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Contact Information</h2>
            <div className="space-y-3 text-foreground">
              <div>
                <p className="text-muted-foreground text-sm">Contact Person</p>
                <p className="font-medium">{competition.contactName}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <a href={`mailto:${competition.contactEmail}`} className="font-medium text-blue-600 hover:underline break-all">
                  {competition.contactEmail}
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="bg-card p-6 border border-border">
            <h3 className="font-semibold mb-3 text-foreground">Event Info</h3>
            <div className="space-y-3 text-sm text-foreground">
              <div>
                <p className="text-muted-foreground">Sport</p>
                <p className="font-medium mt-1">{competition.sport}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className={`font-medium mt-1 ${competition.dateStatus === "FIRM" ? "text-green-600" : "text-amber-600"}`}>
                  {competition.dateStatus === "FIRM" ? "Confirmed" : "Tentative"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Verified Date</p>
                <p className="font-medium text-xs text-green-600 mt-1">{formatDate(competition.verifiedDate)}</p>
              </div>
            </div>
          </Card>

          <div className="space-y-2">
            <Button 
              className="w-full gap-2" 
              onClick={() => window.open(competition.signupUrl, "_blank")}
            >
              <ExternalLinkIcon className="h-4 w-4" /> Visit Event Website
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <MessageCircle className="h-4 w-4" /> Message Organizer
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <Flag className="h-4 w-4" /> Report Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
