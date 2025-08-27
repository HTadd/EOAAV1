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
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    color: "from-pink-400 to-red-400"
  },
  {
    icon: Target,
    title: "Excellence in Everything",
    description: "We don't just want participation - we want adaptive athletes to excel, compete, and achieve their personal bests.",
    color: "from-sport-blue to-blue-400"
  },
  {
    icon: Users,
    title: "Community-Powered",
    description: "Our strength comes from athletes, families, coaches, and volunteers working together toward shared goals.",
    color: "from-sport-green to-green-400"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    description: "We constantly evolve our programs, embrace new technologies, and find creative solutions to old barriers.",
    color: "from-sport-gold to-yellow-400"
  }
];

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're adaptive athletes, families, coaches, and advocates united by one mission: 
              creating equal opportunities in sports for everyone.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">10,847</div>
                <div className="text-white/80">Athletes Served</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">50</div>
                <div className="text-white/80">States Covered</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">147</div>
                <div className="text-white/80">Certified Coaches</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-white/80">Years Strong</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                EOAA was born from frustration. In 2019, Paralympic archer Sarah Chen retired from 
                competition and wanted to give back by coaching. But she discovered that new adaptive 
                athletes and their families were struggling to find basic information - which classifications 
                existed, where to find coaches, how to prepare for competition.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sarah started with $500 of her own money and a simple website listing coach contacts. 
                Within six months, she was fielding calls from athletes nationwide. What began as a 
                side project became a movement - and EOAA was officially founded.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve over 10,000 adaptive athletes across all 50 states, maintain the most 
                comprehensive resource library in adaptive sports, and have certified 147 coaches in 
                adaptive athletics techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
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
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{member.image}</div>
                      <div>
                        <CardTitle className="text-xl">{member.name}</CardTitle>
                        <Badge variant="secondary" className="text-sm">
                          {member.role}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 italic">"{member.story}"</p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="mr-2">
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center mb-8 last:mb-0">
                  <div className="bg-gradient-to-br from-sport-blue to-blue-400 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-sm mr-6">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're an athlete, family member, coach, or advocate - there's a place 
              for you in the EOAA community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Heart className="mr-2 h-5 w-5" />
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;