import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const faqs = [
    {
      question: "When is the next recruitment period?",
      answer: "We recruit new members twice per year: fall recruitment typically occurs in September, and spring recruitment in January. Specific dates and deadlines are announced on our website and through campus channels."
    },
    {
      question: "What majors are represented in WIC?",
      answer: "WIC welcomes students from all majors. While many members study economics or mathematics, we also have members from biology, computer science, philosophy, and other fields who bring diverse perspectives to our analysis."
    },
    {
      question: "How much time does WIC require?",
      answer: "Members commit about 1 hour per week for our Wednesday meetings (12-1 PM in Maxey 207). Board members may spend up to 2 hours per week with additional responsibilities. We understand students have multiple commitments."
    },
    {
      question: "Do you offer summer opportunities?",
      answer: "While WIC doesn't meet during summer break, we maintain an active alumni network that often helps members find internships. We also provide interview preparation and networking opportunities throughout the academic year."
    },
    {
      question: "How do I stay updated on WIC news and events?",
      answer: "Follow our website for the latest updates, attend our information sessions, and connect with us via email. We also maintain relationships with campus career services to ensure interested students are informed about opportunities."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about WIC? We're here to help. Reach out to learn more about 
            our organization, application process, or upcoming events.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-border/50 glass text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For general inquiries and application questions
                </p>
                <div className="space-y-1">
                  <a 
                    href="mailto:vaidyag@whitman.edu"
                    className="block text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    vaidyag@whitman.edu
                  </a>
                  <a 
                    href="mailto:guenthea@whitman.edu"
                    className="block text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    guenthea@whitman.edu
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Weekly meetings location
                </p>
                <p className="font-medium">Maxey 207<br />Wednesdays 12-1 PM</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 glass text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Available for questions and mentorship
                </p>
                <p className="font-medium">Tuesdays 3-5 PM<br />Or by appointment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Have a specific question? Fill out the form below and we'll get back to you promptly.
            </p>
          </div>

          <Card className="border-border/50 glass">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>
                We typically respond within 24-48 hours during the academic year
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name *</label>
                  <Input placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input type="email" placeholder="your.email@whitman.edu" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Topic *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="application">Application Process</SelectItem>
                    <SelectItem value="membership">Membership Information</SelectItem>
                    <SelectItem value="events">Events & Calendar</SelectItem>
                    <SelectItem value="alumni">Alumni Relations</SelectItem>
                    <SelectItem value="partnerships">Partnership Opportunities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message *</label>
                <Textarea 
                  placeholder="Please provide details about your question or inquiry..."
                  className="min-h-[120px]"
                />
              </div>

              <Button size="lg" className="btn-modern w-full md:w-auto">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about WIC membership and activities.
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