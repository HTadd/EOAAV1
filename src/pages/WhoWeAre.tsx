import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Target, 
  Users, 
  Trophy,
  Lightbulb,
  Globe,
  Award,
  Calendar
} from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & Executive Director",
    background: "Former Paralympic archer, competed in 3 Games",
    story: "After retiring from competition, Sarah noticed how difficult it was for new adaptive athletes to find resources and coaching. She founded EOAA in 2019 with just $500 and a dream.",
    image: "🏹",
    achievements: ["3x Paralympic Competitor", "Certified Level 3 Coach", "Disability Rights Advocate"]
  },
  {
    name: "Marcus Rodriguez", 
    role: "Community Outreach Director",
    background: "Adaptive basketball player, youth mentor",
    story: "Marcus discovered adaptive sports at age 16 after a spinal cord injury. Now he travels nationwide connecting young athletes with opportunities and breaking down barriers.",
    image: "🏀",
    achievements: ["National Champion 2022", "Youth Mentor (8 years)", "Motivational Speaker"]
  },
  {
    name: "Dr. Amanda Foster",
    role: "Classification & Standards Advisor", 
    background: "Sports medicine physician, classification expert",
    story: "Dr. Foster has classified over 1,200 adaptive athletes and helped standardize classification protocols. She joined EOAA to make classification more accessible and understandable.",
    image: "🩺",
    achievements: ["Medical Director IPC", "1,200+ Classifications", "Research Publications (47)"]
  },
  {
    name: "Jake Thompson",
    role: "Technology & Accessibility Lead",
    background: "Software engineer, adaptive swimmer",
    story: "Born with one arm, Jake built his first adaptive training app at age 14. He ensures all EOAA digital resources are fully accessible and user-friendly.",
    image: "💻",
    achievements: ["Paralympic Trials Qualifier", "App Developer", "Accessibility Expert"]
  }
];

const milestones = [
  { year: "2019", event: "EOAA Founded", description: "Sarah Chen starts with $500 and a vision" },
  { year: "2020", event: "First 100 Athletes", description: "Connected our first 100 adaptive athletes with coaches" },
  { year: "2021", event: "Resource Library Launch", description: "Launched comprehensive digital resource library" },
  { year: "2022", event: "National Expansion", description: "Expanded to serve athletes in all 50 states" },
  { year: "2023", event: "Coach Certification", description: "Launched certified adaptive sports coach program" },
  { year: "2024", event: "10,000 Athletes Served", description: "Reached milestone of 10,000 athletes supported" }
];

const values = [
  {
    icon: Heart,
    title: "Inclusive by Design",
    description: "Every athlete deserves equal access to sports, regardless of their physical differences. We design everything with accessibility first.",
    color: "from-pink-600 to-red-700"
  },
  {
    icon: Target,
    title: "Excellence in Everything",
    description: "We don't just want participation - we want adaptive athletes to excel, compete, and achieve their personal bests.",
    color: "from-sport-blue to-sport-blue"
  },
  {
    icon: Users,
    title: "Community-Powered",
    description: "Our strength comes from athletes, families, coaches, and volunteers working together toward shared goals.",
    color: "from-sport-green to-sport-green"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    description: "We constantly evolve our programs, embrace new technologies, and find creative solutions to old barriers.",
    color: "from-sport-gold to-sport-gold"
  }
];

const WhoWeAre = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 px-6 m-6 rounded-3xl">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-foreground/90 mb-8 max-w-3xl mx-auto">
              We're adaptive athletes, families, coaches, and advocates united by one mission: 
              creating equal opportunities in sports for everyone.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                EOAA was born from frustration—and from experience.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In 2015, Hari Tadpatri started competing in adaptive sports as a kid, first falling in love with archery. As he got more serious, he ran into the same barrier again and again: the basics were surprisingly hard to find. Which classifications exist? Where do you find trustworthy coaches? How do you train for competition and actually navigate the pathway?
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                That problem didn't go away as Hari transitioned from archery into para air rifle. Now, while aiming to join the U.S. National Para Development Team as an SH2 R5/R4 athlete, he realized something: talent and work ethic aren't enough if the pathway itself is hard to access.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                EOAA exists to change that. We're building a single, trustworthy hub that helps adaptive athletes and their families find classifications, coaching, training guidance, and competition opportunities—clearly organized and easy to act on.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our goal is simple: make it easier for the next athlete to start, improve, and belong.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`bg-gradient-to-br ${value.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Goals</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2025
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Foundation & First Hub</h3>
                    <p className="text-muted-foreground">Launch EOAA's core platform with clear classification guides, starter resources, and coach discovery.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2026
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">First 100 Athletes Supported</h3>
                    <p className="text-muted-foreground">Help our first 100 adaptive athletes and families connect to coaches, training plans, and competition pathways.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2027
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Resource Library Expansion</h3>
                    <p className="text-muted-foreground">Build a comprehensive, sport-by-sport resource library (classification, equipment, drills, competition prep, checklists).</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2028
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">National Coverage</h3>
                    <p className="text-muted-foreground">List verified competitions/clinics and coach contacts across all 50 states, with consistent sign-up links and eligibility notes.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2029
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Coach Training Program</h3>
                    <p className="text-muted-foreground">Launch an EOAA coach-training and certification pathway focused on adaptive techniques and athlete safety.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="bg-gradient-to-br from-sport-blue to-sport-blue rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2030
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">10,000 Athletes Supported</h3>
                    <p className="text-muted-foreground">Reach 10,000 adaptive athletes supported through resources, connections, and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete, family member, coach, or advocate - there's a place 
              for you in the EOAA community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/10 rounded-full px-8">
                <Heart className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAre;