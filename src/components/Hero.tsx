import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-brand-booster.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground animate-fade-in">
          AI-Powered Personal Brand Booster
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Unleash Your Creative Potential with Three Free AI Tools
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Build a powerful personal brand using cutting-edge AI tools for text, images, and videos—completely free
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 animate-glow-pulse">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground/20 text-primary-foreground"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
