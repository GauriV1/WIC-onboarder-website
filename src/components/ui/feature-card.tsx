import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, href, className }: FeatureCardProps) {
  const CardContent = (
    <div className={cn(
      "group p-8 border border-border/50 rounded-lg glass transition-all duration-300",
      "hover:border-border hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      {icon && (
        <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-accent">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      {href && (
        <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}