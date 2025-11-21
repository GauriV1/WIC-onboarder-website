import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
export default function Teams() {
  const currentLeadership = [
    {
      name: "Daniel Virula",
      role: "CEO",
      bio: "Leading WIC's strategic direction and portfolio management for Spring 2025.",
      initials: "DV"
    },
    {
      name: "Abd Alghani Rahmoun",
      role: "COO",
      bio: "Overseeing operations and member coordination for Spring 2025.",
      initials: "AR"
    },
    {
      name: "Aiden Guenther",
      role: "CFO",
      bio: "Managing financial operations and compliance for Spring 2025.",
      initials: "AG"
    },
    {
      name: "Abd Alghani Rahmoun",
      role: "CIO",
      bio: "Leading technology initiatives and information systems for Spring 2025.",
      initials: "AR",
      email: "abd@[domain].edu"
    }
  ];

  const divisions = [
    {
      name: "Economic Research",
      description: "Macroeconomic analysis and market trend evaluation",
      head: "Mal",
      analyst: "Nathan",
      intern: "Burhan"
    },
    {
      name: "ESG",
      description: "Environmental, social, and governance factors in investment decisions",
      head: "Bethel",
      analyst: "",
      intern: "James"
    },
    {
      name: "Fixed Income",
      description: "Bond market analysis and credit research",
      head: "Brendan",
      analyst: "Ruth",
      intern: ""
    },
    {
      name: "Private and Equity Markets",
      description: "Private investment opportunities and equity market analysis",
      head: "Dylan",
      analyst: "Arina",
      intern: "Misheel"
    },
    {
      name: "Portfolio Management",
      description: "Strategic portfolio oversight and performance analysis",
      head: "Peter",
      analyst: "Mateo",
      intern: "Elbeg"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 hexagon-bg animate-geometric">
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6 !text-white">Our Teams</h1>
          <p className="text-xl leading-relaxed font-medium !text-white">
            Meet the dedicated students and faculty who drive WIC's research excellence 
            and commitment to learning.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Spring 2025 Leadership Team</h2>
            <p className="text-lg text-black max-w-2xl mx-auto font-medium">
              Our current student leaders coordinate research activities and mentor members. 
              The Fall 2025 roster is being finalized for the upcoming academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentLeadership.map((member, index) => (
              <Card key={index} className="border-border/50 glass text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-lg font-semibold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-black leading-relaxed font-medium">
                    {member.bio}
                  </p>
                  {member.email && (
                    <p className="text-xs text-black/70 mt-2 font-medium">
                      {member.email}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Structure</h2>
            <h3 className="text-lg text-black max-w-2xl mx-auto font-medium mb-8">
              Sector Leads
            </h3>
            <p className="text-base text-black max-w-2xl mx-auto font-medium">
              Our research is organized into specialized teams, each focusing on different 
              aspects of investment analysis and market understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="border-border/50 glass">
                <CardHeader>
                  <CardTitle>{division.name}</CardTitle>
                  <CardDescription>{division.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-xs uppercase tracking-wider mb-1">Head</p>
                        <p className="text-black font-medium">{division.head || "Add Head"}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-xs uppercase tracking-wider mb-1">Analyst</p>
                        <p className="text-black font-medium">{division.analyst || "Add Head"}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-xs uppercase tracking-wider mb-1">Intern</p>
                        <p className="text-black font-medium">{division.intern || "Add Head"}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors & Mentors */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Advisors & Mentors</h2>
            <p className="text-lg text-black font-medium">
              WIC benefits from guidance by experienced professionals and dedicated faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle>Faculty Leader</CardTitle>
                <CardDescription>Professor Ruoning Han, Economics Department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-black font-medium">
                  Provides academic leadership and ensures WIC's activities align with educational 
                  objectives while maintaining appropriate risk management practices.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Faculty Profile <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle>Industry Mentors</CardTitle>
                <CardDescription>Alumni and professional network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-black font-medium">
                  Our alumni working in finance provide mentorship, guest lectures, and career 
                  guidance. Current mentors work at firms including Goldman Sachs, JPMorgan, and BlackRock.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Connect with Mentors <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}