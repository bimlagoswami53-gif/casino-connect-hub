import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    role: "VIP Player",
    text: "Best casino platform I've used. Instant payouts and the WhatsApp support is incredibly responsive. Won ₹2L last month!",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Regular Player",
    text: "The game variety is amazing. I love the live casino section — feels like being in a real casino. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Premium Member",
    text: "Joined 6 months ago and never looked back. The bonuses are real and the withdrawals are lightning fast. Top-notch service.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            What Players <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Don't just take our word for it. Here's what our community has to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
