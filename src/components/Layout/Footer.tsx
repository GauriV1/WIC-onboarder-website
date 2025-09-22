import { Link } from "react-router-dom";
import { Mail, ExternalLink, Instagram, Linkedin } from "lucide-react";
import wicLogo from "@/assets/wic-logo-black.svg";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={wicLogo} 
                alt="Whitman Investment Company Logo" 
                className="h-6 w-auto"
              />
              <span className="text-lg font-semibold text-black">WIC</span>
            </div>
            <p className="text-sm text-black leading-relaxed">
              Student-managed investing at Whitman College. Research. Discipline. Real-world portfolio experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-black/70 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-black/70 hover:text-black transition-colors">
                About
              </Link>
              <Link to="/teams" className="text-sm text-black/70 hover:text-black transition-colors">
                Teams
              </Link>
              <Link to="/portfolio" className="text-sm text-black/70 hover:text-black transition-colors">
                Portfolio
              </Link>
              <Link to="/join" className="text-sm text-black/70 hover:text-black transition-colors">
                Join
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black">Connect</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-black/70">Email:</p>
                <a 
                  href="mailto:rahmouna@whitman.edu" 
                  className="text-sm text-black hover:text-black/70 transition-colors font-medium"
                >
                  rahmouna@whitman.edu
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/whitmaninvestmentcompany?igsh=MXVibnd0MzJvNzVxdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-black/70 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A18563143&keywords=whitman%20investment%20company&origin=RICH_QUERY_SUGGESTION&position=1&searchId=84bdb9ee-7495-46f5-8a81-5ee8afab3b73&sid=zr*&spellCorrectionEnabled=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-black/70 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
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