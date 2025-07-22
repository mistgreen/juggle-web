import heroImage from "@/assets/hero-image.png";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Take Control of Your Family's Mental Load
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Juggle helps mums manage the invisible work of running a family. 
              Stop being the only one who remembers everything - share the mental load and find balance.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:translate-x-12">
            <img 
              src={heroImage} 
              alt="Juggle app helping mums manage family life" 
              className="w-full rounded-2xl shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};