import testimonialImage from "@/assets/testimonial-image.png";
import { Card } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "I was drowning in mental load before Juggle. Now my partner and I share responsibilities, and I finally have time for myself again.",
      name: "Sarah M.",
      role: "Mother of 2",
      image: testimonialImage
    },
    {
      quote: "The difference in our household is amazing. My husband now sees all the invisible work I was doing and actively helps without me having to ask.",
      name: "Lisa K.",
      role: "Working mom",
      image: testimonialImage
    },
    {
      quote: "Juggle has transformed our family dynamics. The mental load is shared, and there's so much less resentment and stress.",
      name: "Jennifer R.",
      role: "Mom of 3",
      image: testimonialImage
    }
  ];

  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">What Mums Are Saying</h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Join thousands of mothers who have reclaimed their time and reduced their mental load with Juggle.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-primary/10 flex flex-col">
              <div className="mb-4 flex-grow">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20" 
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};