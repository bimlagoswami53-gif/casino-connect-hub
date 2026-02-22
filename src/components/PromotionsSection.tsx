import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import promoBanner from "@/assets/promo-banner.jpg";
import { ArrowRight, Crown, Percent, Clock } from "lucide-react";

const promos = [
  { icon: Crown, title: "Welcome Bonus", value: "200%", description: "First deposit up to ₹50,000.", highlight: true },
  { icon: Percent, title: "Daily Cashback", value: "10%", description: "On all losses. Credited daily.", highlight: false },
  { icon: Clock, title: "Refer & Earn", value: "₹5K", description: "Per referred friend who deposits.", highlight: false },
];

const PromotionsSection = () => {
  return (
    <section className="py-12 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={promoBanner} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Promotions</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4">
            Exclusive <span className="text-gradient-gold">Offers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
          {promos.map((promo, i) => (
            <motion.a
              key={promo.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card border rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover:border-primary/40 transition-all duration-300 group ${
                promo.highlight ? "border-primary/30 glow-gold-sm" : "border-border"
              }`}
            >
              {promo.highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-[10px] sm:text-xs font-bold px-3 py-0.5 sm:px-4 sm:py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-5">
                <promo.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="text-3xl sm:text-5xl font-display font-bold text-gradient-gold mb-1 sm:mb-2">{promo.value}</div>
              <h3 className="font-display text-sm sm:text-xl font-bold mb-1 sm:mb-2">{promo.title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground mb-3 sm:mb-5">{promo.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-xs sm:text-sm font-semibold group-hover:gap-2 transition-all">
                Claim Now <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
