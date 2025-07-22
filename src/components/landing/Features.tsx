import featureIcons from "@/assets/feature-icons.png";
import { Card } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      title: "Reduce Mental Load",
      description: "Stop being the only one who remembers everything. Juggle helps you share and delegate family responsibilities.",
    },
    {
      title: "Smart Family Calendar",
      description: "All your family's schedules in one place, with intelligent suggestions for task distribution.",
    },
    {
      title: "Task Delegation",
      description: "Easily assign and track family tasks, ensuring everyone does their fair share.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">How Juggle Helps</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We understand the invisible work of running a family. Juggle makes it visible, shareable, and manageable.
        </p>
        
        <img 
          src={featureIcons} 
          alt="Juggle features illustration" 
          className="w-full max-w-3xl mx-auto mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-background/60 backdrop-blur-sm border-primary/10">
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};