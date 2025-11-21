import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function HeroSection({ title, subtitle, primaryCTA, secondaryCTA }: HeroSectionProps) {
  return (
    <section className="py-24 px-4 geometric-bg">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tight !text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed !text-white">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="btn-modern min-w-[200px] text-base font-semibold"
          >
            <Link to={primaryCTA.href}>{primaryCTA.text}</Link>
          </Button>
          
          {secondaryCTA && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="btn-modern min-w-[200px] text-base font-semibold"
            >
              <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}