import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Trophy, 
  Users, 
  Calendar,
  Play,
  FileText,
  ExternalLink,
  Search,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const resourceCategories = [
  {
    title: "Competition Guides",
    icon: Trophy,
    color: "bg-gradient-to-br from-sport-gold to-yellow-400",
    resources: [
      {
        title: "Paralympic Classification System",
        type: "Guide",
        description: "Complete breakdown of SH1, SH2, and other classifications",
        downloadUrl: "#",
        featured: true
      },
      {
        title: "Regional Competition Calendar 2024",
        type: "Calendar",
        description: "All adaptive sports events in your region",
        downloadUrl: "#",
        featured: false
      },
      {
        title: "Nationals Preparation Checklist",
        type: "Checklist",
        description: "Everything you need before competing nationally",
        downloadUrl: "#",
        featured: false
      }
    ]
  },
  {
    title: "Training Materials",
    icon: Play,
    color: "bg-gradient-to-br from-sport-blue to-blue-400",
    resources: [
      {
        title: "Shooting Fundamentals for Adaptive Athletes",
        type: "Video Series",
        description: "12-part instructional series by Coach Maria Santos",
        downloadUrl: "#",
        featured: true
      },
      {
        title: "Home Training Equipment Guide",
        type: "Equipment List",
        description: "Affordable adaptive equipment recommendations",
        downloadUrl: "#",
        featured: false
      },
      {
        title: "Mental Performance Workbook",
        type: "Workbook",
        description: "Building confidence and focus in competition",
        downloadUrl: "#",
        featured: false
      }
    ]
  },
  {
    title: "Community Connections",
    icon: Users,
    color: "bg-gradient-to-br from-sport-green to-green-400",
    resources: [
      {
        title: "Certified Coach Directory",
        type: "Directory",
        description: "147 verified adaptive sports coaches nationwide",
        downloadUrl: "#",
        featured: true
      },
      {
        title: "Mentor Match Program",
        type: "Program",
        description: "Connect with experienced adaptive athletes",
        downloadUrl: "#",
        featured: false
      },
      {
        title: "Family Support Network",
        type: "Community",
        description: "Private forum for families of adaptive athletes",
        downloadUrl: "#",
        featured: false
      }
    ]
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Everything you need to succeed in adaptive athletics - from classification guides 
              to training videos to coach connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-10 pr-4 py-3 rounded-full w-80 text-gray-800"
                />
              </div>
              <Button variant="secondary" className="rounded-full px-6">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sport-blue">250+</div>
                <div className="text-gray-600">Resources Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sport-green">147</div>
                <div className="text-gray-600">Certified Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sport-gold">89</div>
                <div className="text-gray-600">Training Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sport-orange">32</div>
                <div className="text-gray-600">Competition Guides</div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`${category.color} rounded-full p-4 mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          {resource.featured && (
                            <Badge variant="secondary" className="bg-sport-gold text-white">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {resource.type}
                        </Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <Button 
                          variant="outline" 
                          className="w-full rounded-full"
                          onClick={() => window.open(resource.downloadUrl, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Access Resource
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our resource library is constantly growing. Suggest new content or 
              connect directly with our community for personalized help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                <BookOpen className="mr-2 h-5 w-5" />
                Suggest a Resource
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Users className="mr-2 h-5 w-5" />
                Join Community Forum
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;