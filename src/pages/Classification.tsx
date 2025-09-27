import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eye, Users, Activity, Brain, User, ListChecks } from "lucide-react";

const Classification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-sport-blue mb-6">
            Classification Made <span className="text-sport-orange">Simple</span>
          </h1>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Understanding how athletes are grouped fairly in adaptive athletics to ensure 
            competitive balance and exciting competitions for everyone.
          </p>
        </div>

        {/* What is Classification */}
        <section className="mb-16">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader className="text-center">
              <div className="bg-sport-blue/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-sport-blue" />
              </div>
              <CardTitle className="text-3xl text-sport-blue">What is Classification?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Classification is the cornerstone of Paralympic sport that determines which athletes 
                are eligible to compete and how they are grouped together for fair competition. 
                It ensures that an athlete's impairment is relevant to sport performance and that 
                competition is exciting and competitive.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-sport-green/10 rounded-xl">
                  <ListChecks className="h-12 w-12 text-sport-green mx-auto mb-4" />
                  <h3 className="font-bold text-sport-green mb-2">Eligibility</h3>
                  <p className="text-sm text-foreground">Determines if an athlete has an eligible impairment</p>
                </div>
                <div className="text-center p-6 bg-sport-orange/10 rounded-xl">
                  <Activity className="h-12 w-12 text-sport-orange mx-auto mb-4" />
                  <h3 className="font-bold text-sport-orange mb-2">Assessment</h3>
                  <p className="text-sm text-foreground">Evaluates how the impairment affects sport performance</p>
                </div>
                <div className="text-center p-6 bg-sport-purple/10 rounded-xl">
                  <Users className="h-12 w-12 text-sport-purple mx-auto mb-4" />
                  <h3 className="font-bold text-sport-purple mb-2">Grouping</h3>
                  <p className="text-sm text-foreground">Places athletes in classes with similar functional ability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Three-Step Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-sport-blue mb-12">
            The Classification Process
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative bg-gradient-card shadow-card border-0 transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-sport-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-sport-blue text-center">Medical Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-center">
                  Athletes must have one of the 10 eligible impairments that is permanent and affects sport performance.
                </p>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-card shadow-card border-0 transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-sport-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-sport-green text-center">Technical Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-center">
                  Trained classifiers assess how the impairment impacts specific sport activities and movements.
                </p>
              </CardContent>
            </Card>

            <Card className="relative bg-gradient-card shadow-card border-0 transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-sport-orange text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-sport-orange text-center">Competition Observation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-center">
                  Athletes are observed during competition to confirm their sport class and ensure accurate classification.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Classification Systems */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-sport-blue mb-12">
            Understanding Sport Classes
          </h2>
          
          <Tabs defaultValue="track-field" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="track-field">Track & Field</TabsTrigger>
              <TabsTrigger value="swimming">Swimming</TabsTrigger>
              <TabsTrigger value="cycling">Cycling</TabsTrigger>
              <TabsTrigger value="shooting">Shooting</TabsTrigger>
              <TabsTrigger value="team-sports">Team Sports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="track-field">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-sport-blue">Track & Field Classifications</CardTitle>
                  <CardDescription>Understanding T (Track) and F (Field) event classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-sport-green mb-4">Track Events (T)</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-blue/10">T11-T13</Badge>
                          <span className="text-sm">Visual impairment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-green/10">T20</Badge>
                          <span className="text-sm">Intellectual impairment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-orange/10">T33-T34</Badge>
                          <span className="text-sm">Wheelchair racing (cerebral palsy)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-purple/10">T51-T54</Badge>
                          <span className="text-sm">Wheelchair racing (spinal injuries)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sport-orange mb-4">Field Events (F)</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-blue/10">F11-F13</Badge>
                          <span className="text-sm">Visual impairment throws</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-green/10">F20</Badge>
                          <span className="text-sm">Intellectual impairment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-orange/10">F40-F46</Badge>
                          <span className="text-sm">Standing throws (limb deficiency)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-purple/10">F51-F57</Badge>
                          <span className="text-sm">Seated throws (wheelchair)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="swimming">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-sport-blue">Swimming Classifications</CardTitle>
                  <CardDescription>S (Freestyle), SB (Breaststroke), SM (Individual Medley)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-sport-blue/10 p-4 rounded-lg">
                        <h4 className="font-bold text-sport-blue mb-2">S1-S10</h4>
                        <p className="text-sm text-foreground">Physical impairment (S1 most severe, S10 least severe)</p>
                      </div>
                      <div className="bg-sport-green/10 p-4 rounded-lg">
                        <h4 className="font-bold text-sport-green mb-2">S11-S13</h4>
                        <p className="text-sm text-foreground">Visual impairment (S11 blind, S13 partial sight)</p>
                      </div>
                      <div className="bg-sport-orange/10 p-4 rounded-lg">
                        <h4 className="font-bold text-sport-orange mb-2">S14</h4>
                        <p className="text-sm text-foreground">Intellectual impairment</p>
                      </div>
                    </div>
                    <p className="text-foreground">
                      <strong>Note:</strong> Lower numbers indicate more severe impairment. SB and SM classes 
                      follow similar numbering but are specific to breaststroke and individual medley events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cycling">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-sport-blue">Cycling Classifications</CardTitle>
                  <CardDescription>Road, Track, and Tandem cycling classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-sport-green mb-4">Bicycle Classes</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-blue/10">C1-C5</Badge>
                          <span className="text-sm">Cycling with physical impairment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-green/10">B</Badge>
                          <span className="text-sm">Tandem cycling (visual impairment)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sport-orange mb-4">Tricycle & Handcycle</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-orange/10">T1-T2</Badge>
                          <span className="text-sm">Tricycle (cerebral palsy)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-sport-purple/10">H1-H5</Badge>
                          <span className="text-sm">Handcycle (spinal impairment)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shooting">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-sport-blue">Shooting Classifications</CardTitle>
                  <CardDescription>Air rifle, pistol, and mixed team event classifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-sport-blue/10 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-sport-blue text-white text-lg px-4 py-2">SH1</Badge>
                          <h4 className="font-bold text-sport-blue text-lg">Rifle & Pistol</h4>
                        </div>
                        <p className="text-foreground mb-4">
                          Athletes who can support the weight of the firearm themselves and do not require 
                          a shooting stand. This includes athletes with lower limb amputations, spinal cord 
                          injuries, or other impairments that don't affect upper body function.
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm text-sport-blue font-medium">Events include:</div>
                          <ul className="text-sm text-foreground space-y-1">
                            <li>• 10m Air Rifle Standing</li>
                            <li>• 10m Air Pistol</li>
                            <li>• 50m Rifle 3 Positions</li>
                            <li>• 25m Pistol</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-sport-green/10 p-6 rounded-xl">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-sport-green text-white text-lg px-4 py-2">SH2</Badge>
                          <h4 className="font-bold text-sport-green text-lg">Supported Shooting</h4>
                        </div>
                        <p className="text-foreground mb-4">
                          Athletes who cannot support the weight of the firearm due to upper limb impairments 
                          and require a shooting stand or support. This includes athletes with limited arm 
                          function, muscle weakness, or coordination difficulties.
                        </p>
                        <div className="space-y-2">
                          <div className="text-sm text-sport-green font-medium">Events include:</div>
                          <ul className="text-sm text-foreground space-y-1">
                            <li>• 10m Air Rifle Standing (with support)</li>
                            <li>• 50m Rifle Prone</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-sport-orange/10 p-6 rounded-xl">
                      <h4 className="font-bold text-sport-orange mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Mixed Team Events
                      </h4>
                      <p className="text-foreground mb-3">
                        Paralympic shooting also features mixed team events where athletes from both 
                        SH1 and SH2 classifications can compete together, promoting inclusivity and 
                        teamwork across different impairment types.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-sport-blue/10">SH1 + SH2 Teams</Badge>
                        <Badge variant="outline" className="bg-sport-green/10">10m Air Rifle Mixed</Badge>
                        <Badge variant="outline" className="bg-sport-orange/10">25m Pistol Mixed</Badge>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-sport-purple pl-4">
                      <p className="text-foreground text-sm">
                        <strong>Classification Process:</strong> Athletes undergo medical and technical evaluation 
                        by certified classifiers who assess their functional ability to handle firearms safely 
                        and effectively. The classification ensures fair competition while maintaining the highest 
                        safety standards in Paralympic shooting sports.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team-sports">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-sport-blue">Team Sports Classifications</CardTitle>
                  <CardDescription>Point systems and functional classifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-sport-green mb-3">Wheelchair Basketball</h4>
                      <p className="text-foreground mb-3">
                        Uses a point system from 1.0 to 4.5, with lower points indicating greater impairment. 
                        Teams cannot exceed 14 points on court at once.
                      </p>
                      <div className="grid grid-cols-5 gap-2">
                        <Badge className="bg-sport-blue text-white">1.0</Badge>
                        <Badge className="bg-sport-green text-white">1.5-2.0</Badge>
                        <Badge className="bg-sport-orange text-white">2.5-3.0</Badge>
                        <Badge className="bg-sport-purple text-white">3.5-4.0</Badge>
                        <Badge className="bg-warm-gray text-white">4.5</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-sport-orange mb-3">Goalball</h4>
                      <p className="text-foreground">
                        All players must have visual impairment and wear eyeshades to ensure fairness. 
                        No classification system needed as all players compete on equal terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Eligible Impairments */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-sport-blue mb-12">
            The 10 Eligible Impairments
          </h2>
          
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="physical">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-sport-blue" />
                  Physical Impairments (8 types)
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-blue rounded-full"></div>
                      <span>Impaired muscle power</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-green rounded-full"></div>
                      <span>Impaired passive range of movement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-orange rounded-full"></div>
                      <span>Limb deficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-purple rounded-full"></div>
                      <span>Leg length difference</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-blue rounded-full"></div>
                      <span>Short stature</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-green rounded-full"></div>
                      <span>Hypertonia (muscle tension)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-orange rounded-full"></div>
                      <span>Ataxia (coordination problems)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-sport-purple rounded-full"></div>
                      <span>Athetosis (involuntary movements)</span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="visual">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-sport-green" />
                  Visual Impairment
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground pt-4">
                  Athletes with vision loss ranging from partial sight to complete blindness. 
                  Classified into classes B1 (no light perception), B2 (some light perception), 
                  and B3 (higher visual acuity but still significantly impaired).
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="intellectual">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-sport-orange" />
                  Intellectual Impairment
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-foreground pt-4">
                  Athletes with intellectual disabilities that significantly impact adaptive behavior 
                  and were manifested before age 18. Includes conditions like Down syndrome, 
                  autism spectrum disorders, and other developmental disabilities.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Getting Classified */}
        <section className="mb-16">
          <Card className="bg-gradient-hero text-white shadow-hero border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Want to Get Classified?</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Start your journey in competitive adaptive athletics
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg leading-relaxed">
                Getting classified is the first step to competing in adaptive athletics. 
                Contact your national Paralympic committee or sport federation to begin the process.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">1</div>
                  <h4 className="font-bold mb-2">Find Your Sport</h4>
                  <p className="text-sm">Connect with local adaptive sports organizations</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">2</div>
                  <h4 className="font-bold mb-2">Medical Documentation</h4>
                  <p className="text-sm">Gather medical records proving eligible impairment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">3</div>
                  <h4 className="font-bold mb-2">Attend Classification</h4>
                  <p className="text-sm">Complete the three-step evaluation process</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Classification;