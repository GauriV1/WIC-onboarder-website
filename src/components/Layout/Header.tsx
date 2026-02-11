import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/wic-logo-geometric.png";

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
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={logo} 
            alt="WIC Logo" 
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm font-bold tracking-wide text-black uppercase whitespace-nowrap">WHITMAN INVESTMENT COMPANY</span>
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

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.instagram.com/whitmaninvest.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black/70 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/whitman-wic/posts/?feedView=all"
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
            
            {/* Mobile Social */}
            <div className="pt-4 border-t border-border/40">
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/whitmaninvest.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-black/70 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/whitman-wic/posts/?feedView=all"
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