import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Fall 2024 Information Session",
      date: "September 10, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Reid 103",
      type: "Info Session",
      description: "Learn about WIC's mission, research process, and application requirements. Current members will share their experiences and answer questions.",
      rsvpLink: "#"
    },
    {
      title: "Guest Speaker: Portfolio Management",
      date: "September 25, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Olin Auditorium",
      type: "Workshop",
      description: "Alumni speaker from Vanguard will discuss institutional portfolio management and career paths in asset management.",
      rsvpLink: "#"
    },
    {
      title: "Fall Recruitment Applications Due",
      date: "October 1, 2024",
      time: "11:59 PM",
      location: "Online Submission",
      type: "Deadline",
      description: "Final deadline for fall semester membership applications. Late submissions will not be accepted.",
      rsvpLink: "/join"
    }
  ];

  const pastEvents = [
    {
      title: "Spring 2024 Investment Pitch Competition",
      date: "April 15, 2024",
      type: "Competition",
      description: "Members presented their best investment ideas to a panel of alumni judges."
    },
    {
      title: "ESG Investing Workshop",
      date: "March 20, 2024",
      type: "Workshop",
      description: "Interactive session on integrating environmental and social factors into investment analysis."
    },
    {
      title: "Mock Interview Sessions",
      date: "February 28, 2024",
      type: "Career Prep",
      description: "Practice interviews with finance professionals to prepare for internship recruiting."
    }
  ];

  const eventTypeColors = {
    "Info Session": "default",
    "Workshop": "secondary",
    "Competition": "outline",
    "Deadline": "destructive",
    "Career Prep": "outline"
  } as const;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 geometric-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Events & Calendar</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stay connected with WIC through our information sessions, workshops, and networking events.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for these important dates and opportunities to engage with WIC.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-border/50 glass">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5" />
                        {event.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.date} • {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant={eventTypeColors[event.type as keyof typeof eventTypeColors] || "default"}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  <Button asChild className="btn-modern">
                    <a href={event.rsvpLink}>
                      {event.type === "Deadline" ? "Apply Now" : "RSVP"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Full Calendar</h2>
          <Card className="border-border/50 glass">
            <CardContent className="p-8">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center space-y-4">
                  <Calendar className="h-12 w-12 mx-auto opacity-50" />
                  <div>
                    <p className="font-medium">Google Calendar Integration</p>
                    <p className="text-sm">
                      Subscribe to our calendar to stay updated on all WIC events
                    </p>
                  </div>
                  <Button variant="outline" className="btn-modern">
                    Subscribe to Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A look at our recent activities and engagement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-border/50 glass">
                <CardHeader>
                  <div className="space-y-2">
                    <Badge 
                      variant={eventTypeColors[event.type as keyof typeof eventTypeColors] || "default"}
                      className="w-fit"
                    >
                      {event.type}
                    </Badge>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}