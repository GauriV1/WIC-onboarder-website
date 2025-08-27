import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, BookOpen, TrendingUp, Clock, FileText } from "lucide-react";

export default function Join() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real Investment Experience",
      description: "Work with actual portfolio decisions and learn from both successes and mistakes in a supportive environment."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Professional Network",
      description: "Connect with alumni working at top financial institutions and build relationships that last beyond college."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Skill Development",
      description: "Master financial modeling, valuation techniques, presentation skills, and critical thinking through hands-on practice."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Attend Info Session",
      description: "Learn about WIC's mission, structure, and expectations. Meet current members and ask questions.",
      timing: "September 10th, 7:00 PM"
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete our application form including academic background, interest in finance, and availability.",
      timing: "Due October 1st"
    },
    {
      step: 3,
      title: "Interview & Case Study",
      description: "30-minute conversation with current members plus a brief analytical exercise. No finance background required.",
      timing: "October 5-8"
    },
    {
      step: 4,
      title: "Onboarding",
      description: "If selected, join our orientation program and begin your journey with a mentor assignment.",
      timing: "October 15th start"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Join WIC</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            No prior experience required — bring curiosity and commitment!
          </p>
          <Badge variant="secondary" className="text-base px-4 py-2">
            Fall 2024 Applications Open
          </Badge>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Join WIC?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WIC offers a unique opportunity to gain practical finance experience while building 
              lasting professional relationships and developing critical analytical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 glass text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-accent">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our selection process is designed to identify students who are intellectually curious, 
              collaborative, and committed to learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card key={index} className="border-border/50 glass">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {item.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.timing}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your investment journey? Submit your application by October 1st.
            </p>
          </div>

          <Card className="border-border/50 glass">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" />
                Fall 2024 Application
              </CardTitle>
              <CardDescription>
                Complete the form below to begin your WIC application
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our application includes questions about your academic background, 
                  interest in finance, and availability for WIC activities.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Estimated completion time: 15-20 minutes</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="btn-modern min-w-[200px]">
                  Open Application Form
                </Button>
                <p className="text-xs text-muted-foreground">
                  Form will open in a new window via Google Forms
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commitment & Expectations */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Commitment & Expectations</h2>
            <p className="text-lg text-muted-foreground">
              What we expect from members and what you can expect from us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Member Expectations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Attend weekly meetings (Wednesdays 7-8:30 PM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Complete assigned research projects on time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Participate actively in discussions and peer reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Maintain academic performance standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Contribute to WIC's collaborative learning environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  What WIC Provides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Comprehensive training in financial analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>One-on-one mentorship with experienced members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Access to professional research databases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Networking opportunities with alumni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Career development and interview preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}