import { Card } from "@/components/ui/card";
import { FileText, Image, Video } from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "AI Text Generation",
    description: "Create compelling copy, blog posts, and social media content with ChatGPT or other free text AI tools",
    features: ["Blog posts", "Social captions", "Email newsletters", "SEO content"]
  },
  {
    icon: Image,
    title: "AI Image Creation",
    description: "Design stunning visuals and graphics using free AI image generators like DALL-E or Midjourney",
    features: ["Brand graphics", "Social media posts", "Profile pictures", "Marketing materials"]
  },
  {
    icon: Video,
    title: "AI Video Production",
    description: "Produce engaging video content with AI-powered tools for editing, captions, and generation",
    features: ["Short-form videos", "Talking head clips", "Animated explainers", "Social reels"]
  }
];

const AITools = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Powerful AI Tools, Zero Cost
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build a professional personal brand, powered by the latest AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:scale-105 transition-transform duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div className="mb-6 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>
                
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AITools;
