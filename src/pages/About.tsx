import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Target, BookOpen } from "lucide-react";

export default function About() {
  const faqs = [
    {
      question: "What is the time commitment?",
      answer: "Members typically spend 5-8 hours per week on WIC activities, including weekly meetings, research work, and special events. We understand students have multiple commitments and work with you to balance your involvement."
    },
    {
      question: "Who can join WIC?",
      answer: "WIC is open to all Whitman College students regardless of major or year. We welcome students from economics, business, mathematics, and any other field who have a genuine interest in finance and investing."
    },
    {
      question: "Do I need prior finance experience?",
      answer: "No prior finance experience is required! We provide comprehensive training and mentorship. What we look for is intellectual curiosity, strong work ethic, and willingness to learn."
    },
    {
      question: "When do you recruit new members?",
      answer: "We recruit new members each semester. Fall recruitment typically occurs in September, and spring recruitment in January. Application deadlines and process details are announced via our events and website."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">About WIC</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The Whitman Investment Company is a student-run organization focused on rigorous research, 
            risk awareness, and professional growth in the world of finance and investing.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <Card className="border-border/50 glass">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Target className="h-5 w-5" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center leading-relaxed">
                WIC exists to provide Whitman College students with hands-on experience in financial analysis, 
                investment research, and portfolio management while fostering intellectual curiosity, ethical 
                decision-making, and professional development in a collaborative learning environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Operate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured approach combines rigorous research with practical experience and professional mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Team Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Leadership team with President and VPs</li>
                  <li>• Sector-focused research teams</li>
                  <li>• Mentorship pairs with experienced members</li>
                  <li>• Faculty advisor oversight</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Research Cycle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Weekly company pitch presentations</li>
                  <li>• Collaborative peer review process</li>
                  <li>• Professional-grade research reports</li>
                  <li>• Quarterly portfolio reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Risk Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• Diversification requirements</li>
                  <li>• Position sizing guidelines</li>
                  <li>• Regular stress testing</li>
                  <li>• ESG consideration integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Governance & Leadership</h2>
            <p className="text-lg text-muted-foreground">
              WIC operates under faculty oversight with student leadership driving day-to-day operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle>Faculty Advisor</CardTitle>
                <CardDescription>Professor Daniel Han</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Economics Department. Provides oversight, ensures educational objectives are met, 
                  and guides the organization's strategic direction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass">
              <CardHeader>
                <CardTitle>Student Leadership</CardTitle>
                <CardDescription>Elected annually by members</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  President, Vice Presidents, and Sector Leads coordinate research activities, 
                  member development, and external partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about joining and participating in WIC.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 glass"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}