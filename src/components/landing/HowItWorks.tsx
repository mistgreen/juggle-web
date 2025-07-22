import appScreenshots from "@/assets/app-screenshots.png";
import { Button } from "@/components/ui/button";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Add Family Tasks",
      description: "Input all the tasks that need to be done in your household, from meal planning to childcare schedules."
    },
    {
      number: "02",
      title: "Assign Responsibilities",
      description: "Easily delegate tasks to family members with fair distribution suggestions based on capacity."
    },
    {
      number: "03",
      title: "Track & Remind",
      description: "Automatic reminders ensure nothing falls through the cracks and everyone completes their share."
    }
  ];

  return (
    <section className="py-24 bg-accent/20" id="how-it-works">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Juggle Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple three-step process helps you organize, delegate, and manage family responsibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 font-bold text-2xl text-primary">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="relative bg-white rounded-2xl shadow-soft p-6 md:p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">See Juggle in Action</h3>
              <p className="text-muted-foreground mb-6">
                Our intuitive interface makes it easy to manage family tasks, share calendars, and 
                distribute responsibilities fairly among all family members.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Try Free Demo
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src={appScreenshots} 
                alt="Juggle app interface screenshots" 
                className="rounded-xl shadow-md animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};