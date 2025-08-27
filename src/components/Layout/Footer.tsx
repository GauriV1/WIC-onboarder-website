import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Whitman Investment Company</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Student-managed investing at Whitman College. Research. Discipline. Real-world portfolio experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About WIC
              </Link>
              <Link to="/join" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Join Us
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Events
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <a 
                href="mailto:wic@whitman.edu" 
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>wic@whitman.edu</span>
              </a>
              <a 
                href="https://whitman.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Whitman College</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Whitman Investment Company. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground max-w-lg text-center sm:text-right">
              WIC is a student organization. All content is for educational purposes only and does not constitute investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}