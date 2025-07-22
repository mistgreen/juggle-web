import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/30">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Share the Mental Load?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of families who are sharing responsibilities more fairly and reducing the mental load on mothers.
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
            Start Your Free 14-Day Trial
          </Button>
          <Button size="lg" variant="secondary">
            See How It Works
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};