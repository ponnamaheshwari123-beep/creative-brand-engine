import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoScript = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready-to-Use Video Script
            </h2>
            <p className="text-xl text-muted-foreground">
              A professional script to showcase your AI-powered brand transformation
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-subtle border-2 border-primary/20 animate-scale-in">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-glow-pulse">
                <Play className="w-10 h-10 text-primary-foreground ml-1" />
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <div className="border-l-4 border-primary pl-6">
                <p className="font-semibold mb-2">Opening Hook (0-5 sec)</p>
                <p className="text-muted-foreground italic">
                  "Want to build a powerful personal brand without spending a dime? Here's how AI can transform your content game."
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <p className="font-semibold mb-2">Problem Statement (5-15 sec)</p>
                <p className="text-muted-foreground italic">
                  "Most people think building a brand requires expensive tools or hiring professionals. But with AI, everything has changed."
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <p className="font-semibold mb-2">Solution (15-40 sec)</p>
                <p className="text-muted-foreground italic">
                  "I use three free AI tools: ChatGPT for crafting compelling content, DALL-E for eye-catching graphics, and AI video editors for professional clips. Together, they help me create content that looks like I hired a full creative team."
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <p className="font-semibold mb-2">Results & Proof (40-50 sec)</p>
                <p className="text-muted-foreground italic">
                  "In just 30 days, my engagement increased by 200%, I gained 5,000 new followers, and landed three client inquiries—all using 100% free AI tools."
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <p className="font-semibold mb-2">Call to Action (50-60 sec)</p>
                <p className="text-muted-foreground italic">
                  "Ready to boost your personal brand? Click the link below to get started with these three game-changing AI tools. Your brand transformation begins today!"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoScript;
