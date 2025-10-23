import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 animate-fade-in">
            <Sparkles className="w-12 h-12 text-primary-foreground animate-glow-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground animate-fade-in">
            Transform Your Brand Today
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join thousands who've revolutionized their personal brand using free AI tools
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-8 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            No credit card required • 100% free forever • Get results in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
