import { Layout } from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Lock, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
export default function Login() {
  const memberResources = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Research Templates",
      description: "Access our standardized research formats and financial modeling templates"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Meeting Calendar",
      description: "View upcoming meetings and important deadlines for members"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Member Directory",
      description: "Connect with fellow members and find research partners"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 px-4 dot-grid-bg">
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative container max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Member Login</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Access your WIC resources, research materials, and member-only content.
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 px-4">
        <div className="container max-w-md mx-auto">
          <Card className="border-border/50 glass">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" />
                Member Portal
              </CardTitle>
              <CardDescription>
                Enter your credentials to access member resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  type="email" 
                  placeholder="your.email@whitman.edu"
                  className="focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input 
                  type="password" 
                  placeholder="Enter your password"
                  className="focus:ring-primary"
                />
              </div>

              <Button className="w-full btn-modern">
                Sign In
              </Button>

              <div className="text-center space-y-2">
                <a 
                  href="#" 
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot your password?
                </a>
                <p className="text-xs text-muted-foreground">
                  New member? Contact leadership for account setup.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Member Resources Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Member Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Once logged in, you'll have access to exclusive WIC resources and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberResources.map((resource, index) => (
              <Card key={index} className="border-border/50 glass text-center opacity-60">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-accent">
                      {resource.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="border-border/50 glass inline-block">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Not a member yet?
                </p>
                <Button asChild variant="outline" className="btn-modern">
                  <Link to="/join">Learn About Joining WIC</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}