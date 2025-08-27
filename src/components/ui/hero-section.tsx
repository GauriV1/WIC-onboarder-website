import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  backgroundPattern?: boolean;
  className?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  backgroundPattern = true,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative min-h-[80vh] flex items-center justify-center px-4",
      backgroundPattern && "geometric-bg",
      className
    )}>
      {/* Background overlay for better text contrast */}
      {backgroundPattern && (
        <div className="absolute inset-0 bg-background/90" />
      )}
      
      <div className="relative text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="btn-modern min-w-[200px] text-base font-semibold"
          >
            <a href={primaryCTA.href}>{primaryCTA.text}</a>
          </Button>
          
          {secondaryCTA && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="btn-modern min-w-[200px] text-base font-semibold"
            >
              <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}