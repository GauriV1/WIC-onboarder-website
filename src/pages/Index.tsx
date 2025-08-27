import { TrendingUp, Users, BookOpen, Calendar } from "lucide-react";
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { StatsStrip } from "@/components/ui/stats-strip";
import { FeatureCard } from "@/components/ui/feature-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Index = () => {
  const stats = [
    { label: "Invested", value: "$1.7M+" },
    { label: "Members", value: "25+" },
    { label: "Research Notes", value: "150+" },
    { label: "Sectors Covered", value: "5" },
  ];

  const features = [
    {
      title: "Equity Research",
      description: "Deep-dive analysis of companies across multiple sectors, developing comprehensive investment theses and financial models.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Portfolio Practice",
      description: "Hands-on experience managing a student-run portfolio with real-world investment decisions and risk management.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Career Preparation",
      description: "Professional development through mentorship, networking opportunities, and skill-building workshops with industry professionals.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Investing, the Whitman way."
        subtitle="We analyze businesses, practice disciplined decision-making, and learn by doing in a collaborative, student-run environment."
        primaryCTA={{ text: "Join WIC", href: "/join" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
      />

      {/* Stats Strip */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <StatsStrip stats={stats} />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-lg text-black max-w-2xl mx-auto font-medium">
              The Whitman Investment Company student-run actively manages $1.7 million of Whitman College's endowment, providing strong returns and financial education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-border/50 glass">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                Ready to Get Started?
              </CardTitle>
              <CardDescription>
                Join our community of student investors and start your finance journey
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div>
                <h3 className="text-2xl font-semibold">Join WIC</h3>
                <p className="text-black font-medium">Applications open each term</p>
              </div>
              <p className="text-sm text-black max-w-md mx-auto font-medium">
                Learn about our research process, meet current members, and discover how to apply.
              </p>
              <Button asChild className="btn-modern">
                <Link to="/join">Learn How to Join</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
