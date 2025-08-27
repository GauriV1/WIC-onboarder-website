import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

export default function Teams() {
  const currentLeadership = [
    {
      name: "Daniel Virula",
      role: "CEO",
      bio: "Leading WIC's strategic direction and portfolio management for Spring 2025.",
      initials: "DV"
    },
    {
      name: "Abd Rahmoun",
      role: "COO",
      bio: "Overseeing operations and member coordination for Spring 2025.",
      initials: "AR"
    },
    {
      name: "Aiden Guenther",
      role: "CFO",
      bio: "Managing financial operations and compliance for Spring 2025.",
      initials: "AG"
    }
  ];

  const divisions = [
    {
      name: "Economics Research",
      description: "Macroeconomic analysis and market trend evaluation",
      focus: [
        "Economic indicator analysis",
        "Market cycle assessment",
        "Policy impact evaluation",
        "Sector performance correlation"
      ]
    },
    {
      name: "ESG Integration",
      description: "Environmental, social, and governance factors in investment decisions",
      focus: [
        "Sustainability metrics analysis",
        "Stakeholder impact assessment",
        "ESG risk evaluation",
        "Long-term value creation"
      ]
    },
    {
      name: "Fixed Income",
      description: "Bond market analysis and credit research",
      focus: [
        "Interest rate environment analysis",
        "Credit risk assessment",
        "Yield curve positioning",
        "Duration and convexity modeling"
      ]
    },
    {
      name: "Private and Equity Markets",
      description: "Private investment opportunities and equity market analysis",
      focus: [
        "Private equity deal analysis",
        "Venture capital trends",
        "Public equity research",
        "Alternative investment strategies"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Teams</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our current student leaders coordinate research activities and mentor members. 
              The Fall 2025 roster is being finalized for the upcoming academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Divisions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Research Divisions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                    Key Focus Areas
                  </h4>
                  <ul className="space-y-2">
                    {division.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
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
            <p className="text-lg text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
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
                <p className="text-sm text-muted-foreground">
                  Our alumni working in finance provide mentorship, guest lectures, and career 
                  guidance. Current mentors work at firms including Goldman Sachs, JPMorgan, and BlackRock.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Connect with Mentors <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}