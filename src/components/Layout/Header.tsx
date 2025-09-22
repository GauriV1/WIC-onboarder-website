import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import wicLogo from "@/assets/wic-logo-black.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Join", href: "/join" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img 
            src={wicLogo} 
            alt="Whitman Investment Company Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-tight text-black">WIC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-accent hover:text-black",
                  location.pathname === item.href 
                    ? "bg-accent text-black" 
                    : "text-black/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* View Presentation CTA */}
          <Button asChild size="sm" className="btn-modern">
            <a href="https://drive.google.com/drive/folders/1Yh6D5eB5WZmR_JL4FpAwaPJCN3k_2XSL?usp=drive_link" target="_blank" rel="noopener noreferrer">
              View Presentation
            </a>
          </Button>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.instagram.com/whitmaninvestmentcompany?igsh=MXVibnd0MzJvNzVxdg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/70 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A18563143&keywords=whitman%20investment%20company&origin=RICH_QUERY_SUGGESTION&position=1&searchId=84bdb9ee-7495-46f5-8a81-5ee8afab3b73&sid=zr*&spellCorrectionEnabled=false"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/70 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 glass">
          <nav className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  "hover:bg-accent hover:text-black",
                  location.pathname === item.href 
                    ? "bg-accent text-black" 
                    : "text-black/70"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA and Social */}
            <div className="pt-4 border-t border-border/40 space-y-3">
              <Button asChild size="sm" className="btn-modern w-full">
                <a href="https://drive.google.com/drive/folders/1Yh6D5eB5WZmR_JL4FpAwaPJCN3k_2XSL?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  View Presentation
                </a>
              </Button>
              
              <div className="flex justify-center space-x-4">
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
          </nav>
        </div>
      )}
    </header>
  );
}