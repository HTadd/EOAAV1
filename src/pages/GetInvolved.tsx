import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  Users, 
  Calendar,
  DollarSign,
  Megaphone,
  BookOpen,
  Trophy,
  Clock,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const volunteerOpportunities = [
  {
    title: "Event Coordinator",
    icon: Calendar,
    commitment: "5-10 hrs/month",
    location: "Remote + Local Events",
    description: "Help organize regional competitions and training camps. Perfect for detail-oriented people who love bringing athletes together.",
    requirements: ["Event planning experience helpful", "Weekend availability", "Strong communication skills"],
    color: "from-sport-blue to-blue-400",
    urgent: false
  },
  {
    title: "Adaptive Sports Coach",
    icon: Trophy,
    commitment: "3-6 hrs/week",
    location: "Nationwide",
    description: "Work directly with athletes to develop skills and competitive techniques. Must have sport-specific experience.",
    requirements: ["Sport background required", "Patience and adaptability", "Certification provided"],
    color: "from-sport-green to-green-400",
    urgent: true
  },
  {
    title: "Mentor Match Coordinator",
    icon: Heart,
    commitment: "2-4 hrs/week", 
    location: "Remote",
    description: "Connect experienced adaptive athletes with newcomers. Help build our community one relationship at a time.",
    requirements: ["Good interpersonal skills", "Adaptive sports knowledge", "Flexible schedule"],
    color: "from-sport-gold to-yellow-400",
    urgent: false
  },
  {
    title: "Content Creator",
    icon: Megaphone,
    commitment: "4-8 hrs/week",
    location: "Remote",
    description: "Create training videos, write guides, and develop educational content for our resource library.",
    requirements: ["Content creation experience", "Adaptive sports knowledge", "Video/writing skills"],
    color: "from-sport-orange to-orange-400",
    urgent: true
  }
];

const donationImpact = [
  {
    amount: "$25",
    impact: "Provides classification guide to 5 new athletes",
    icon: BookOpen
  },
  {
    amount: "$75", 
    impact: "Funds one month of mentor matching for an athlete",
    icon: Heart
  },
  {
    amount: "$150",
    impact: "Sponsors training equipment for one adaptive athlete",
    icon: Trophy
  },
  {
    amount: "$500",
    impact: "Covers travel costs for a coach to reach underserved areas",
    icon: MapPin
  }
];

const events = [
  {
    title: "Regional Training Camp - Northeast",
    date: "March 15-17, 2024",
    location: "Boston, MA",
    type: "Training",
    description: "3-day intensive training camp for adaptive archers. All skill levels welcome.",
    spotsAvailable: 12,
    registrationDeadline: "March 1st"
  },
  {
    title: "EOAA Annual Fundraising Gala", 
    date: "April 20, 2024",
    location: "Chicago, IL",
    type: "Fundraiser",
    description: "Join us for an evening celebrating adaptive athletics and raising funds for our programs.",
    spotsAvailable: 200,
    registrationDeadline: "April 5th"
  },
  {
    title: "Virtual Coach Certification Workshop",
    date: "May 10, 2024", 
    location: "Online",
    type: "Education",
    description: "Become a certified adaptive sports coach in this comprehensive 6-hour workshop.",
    spotsAvailable: 25,
    registrationDeadline: "May 3rd"
  }
];

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of volunteers, donors, and advocates working to create equal 
              opportunities in adaptive athletics. Every contribution makes a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-white/80">Active Volunteers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">156</div>
                <div className="text-white/80">Events This Year</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <Heart className="h-12 w-12 text-white mx-auto mb-4" />
                <div className="text-2xl font-bold text-white">89%</div>
                <div className="text-white/80">Volunteer Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Use your skills to make a direct impact on adaptive athletes' lives. We have opportunities 
              for every schedule and skill set.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${opportunity.urgent ? 'ring-2 ring-sport-orange' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-br ${opportunity.color} rounded-full p-3`}>
                          <opportunity.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                          {opportunity.urgent && (
                            <Badge variant="destructive" className="mt-1">
                              Urgent Need
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {opportunity.commitment}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {opportunity.location}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {opportunity.requirements.map((req, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1 h-1 bg-sport-blue rounded-full mr-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full rounded-full">
                      Apply to Volunteer
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Make a Donation</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Your donation directly supports adaptive athletes with resources, coaching, and opportunities. 
                See exactly how your contribution makes a difference.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {donationImpact.map((item, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <item.icon className="h-12 w-12 mx-auto mb-4 text-sport-blue" />
                      <div className="text-2xl font-bold text-sport-blue mb-2">{item.amount}</div>
                      <p className="text-sm text-gray-600">{item.impact}</p>
                      <Button variant="outline" className="w-full mt-4 rounded-full">
                        Donate {item.amount}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-gradient-hero text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Custom Donation</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Input 
                      placeholder="Amount ($)"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                    <select className="bg-white/10 border border-white/30 rounded-md px-3 py-2 text-white">
                      <option value="one-time">One-time</option>
                      <option value="monthly">Monthly</option>
                      <option value="annually">Annually</option>
                    </select>
                    <Button variant="secondary" className="rounded-full">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Donate Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Join us at training camps, fundraisers, and educational workshops throughout the year.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge variant={event.type === 'Training' ? 'default' : event.type === 'Fundraiser' ? 'secondary' : 'outline'}>
                        {event.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm">
                        <span className="font-semibold">Spots Available:</span> {event.spotsAvailable}
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">Registration Deadline:</span> {event.registrationDeadline}
                      </div>
                    </div>
                    <Button className="w-full rounded-full">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Have questions about volunteering, donating, or getting involved? We'd love to hear from you.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How would you like to get involved?</label>
                      <select className="w-full border border-input rounded-md px-3 py-2">
                        <option value="">Select an option</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="donate">Make a donation</option>
                        <option value="coach">Become a coach</option>
                        <option value="mentor">Be a mentor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us more about your interest in supporting adaptive athletics..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full rounded-full" size="lg">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Prefer to call or email directly?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:hello@eoaa.org" className="flex items-center text-sport-blue hover:underline">
                    <Mail className="w-4 h-4 mr-2" />
                    hello@eoaa.org
                  </a>
                  <a href="tel:+1-555-EOAA-123" className="flex items-center text-sport-blue hover:underline">
                    <Phone className="w-4 h-4 mr-2" />
                    (555) EOAA-123
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;