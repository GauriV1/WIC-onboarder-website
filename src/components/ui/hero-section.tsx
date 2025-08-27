import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';

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
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/a0B09PlrBkPLfoAI/scene.splinecode" 
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold tracking-tight text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="btn-modern min-w-[200px] text-base font-semibold bg-white text-black hover:bg-white/90 shadow-lg"
          >
            <a href={primaryCTA.href}>{primaryCTA.text}</a>
          </Button>
          
          {secondaryCTA && (
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="btn-modern min-w-[200px] text-base font-semibold border-white text-white hover:bg-white hover:text-black shadow-lg"
            >
              <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}