import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COMPETITIONS, type Competition } from "@/data/competitions";
import { CheckCircle2, MapPin, Calendar, AlertCircle } from "lucide-react";

export default function ProgramsList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    sport: "all",
    dateStatus: "all",
    sortBy: "startDate",
  });

  const uniqueSports = useMemo(() => {
    return Array.from(new Set(COMPETITIONS.map((c) => c.sport))).sort();
  }, []);

  const filtered = useMemo(() => {
    let result = COMPETITIONS.filter((c) => {
      if (search) {
        const searchLower = search.toLowerCase();
        const matches = 
          c.name.toLowerCase().includes(searchLower) ||
          c.city.toLowerCase().includes(searchLower) ||
          c.state.toLowerCase().includes(searchLower);
        if (!matches) return false;
      }
      if (filters.sport !== "all" && c.sport !== filters.sport) return false;
      if (filters.dateStatus !== "all" && c.dateStatus !== filters.dateStatus) return false;
      return true;
    });

    // Sort
    result.sort((a, b) => {
      if (filters.sortBy === "startDate") {
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      }
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [search, filters]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">2026 Competitions & Clinics</h1>
        <p className="mt-2 text-lg opacity-90">Find sanctioned adaptive athletics events near you</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Filters */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-card p-4 border border-border">
            <h3 className="font-semibold mb-3 text-foreground">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Sport</label>
                <Select value={filters.sport} onValueChange={(v) => setFilters({ ...filters, sport: v })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    {uniqueSports.map((sport) => (
                      <SelectItem key={sport} value={sport}>
                        {sport}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Date Status</label>
                <Select value={filters.dateStatus} onValueChange={(v) => setFilters({ ...filters, dateStatus: v })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="FIRM">Confirmed (FIRM)</SelectItem>
                    <SelectItem value="TENTATIVE">Tentative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Sort By</label>
                <Select value={filters.sortBy} onValueChange={(v) => setFilters({ ...filters, sortBy: v })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startDate">Start Date</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        {/* List */}
        <div className="lg:col-span-3 space-y-4">
          <Input
            placeholder="Search by name, city, or state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-card text-foreground border border-border"
          />

          <div className="text-sm text-muted-foreground">
            {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
          </div>

          {filtered.length === 0 ? (
            <Card className="bg-card p-8 text-center border border-border">
              <p className="text-muted-foreground">No events match your filters. Try adjusting your search.</p>
            </Card>
          ) : (
            <div className="grid gap-3">
              {filtered.map((competition) => (
                <Card
                  key={competition.id}
                  className="bg-card p-5 border border-border hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/programs/${competition.id}`)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2 flex-wrap">
                        <h3 className="font-semibold text-foreground text-lg flex-1">{competition.name}</h3>
                        <Badge className="bg-green-600 text-white flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> Verified
                        </Badge>
                        {competition.dateStatus === "TENTATIVE" && (
                          <Badge className="bg-amber-600 text-white flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> Tentative
                          </Badge>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {competition.city}, {competition.state}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(competition.startDate)}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="outline">{competition.sport}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {competition.hostOrganization}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/programs/${competition.id}`);
                    }}>
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
