import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul S.", role: "VIP Player", text: "Best platform. Instant payouts and amazing WhatsApp support. Won ₹2L last month!", rating: 5 },
  { name: "Priya M.", role: "Regular Player", text: "Love the live casino — feels like a real casino. Game variety is unmatched!", rating: 5 },
  { name: "Amit K.", role: "Premium Member", text: "Joined 6 months ago. Bonuses are real, withdrawals are instant. Top-notch!", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4">
            What Players <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-3 sm:mb-4" />
              <p className="text-xs sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2 sm:mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-base text-foreground">{t.name}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
