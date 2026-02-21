import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import promoBanner from "@/assets/promo-banner.jpg";
import { ArrowRight, Crown, Percent, Clock } from "lucide-react";

const promos = [
  {
    icon: Crown,
    title: "Welcome Bonus",
    value: "200%",
    description: "On your first deposit. Up to ₹50,000 bonus credits.",
    highlight: true,
  },
  {
    icon: Percent,
    title: "Daily Cashback",
    value: "10%",
    description: "Get 10% cashback on all losses. Credited daily to your wallet.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Refer & Earn",
    value: "₹5,000",
    description: "Earn ₹5,000 for every friend you refer who deposits.",
    highlight: false,
  },
];

const PromotionsSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-15">
        <img src={promoBanner} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Promotions</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Exclusive <span className="text-gradient-gold">Offers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Take advantage of our industry-leading bonuses and promotions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
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
              className={`relative bg-card border rounded-2xl p-6 sm:p-8 text-center hover:border-primary/40 transition-all duration-300 group ${
                promo.highlight ? "border-primary/30 glow-gold-sm" : "border-border"
              }`}
            >
              {promo.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <promo.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-display font-bold text-gradient-gold mb-2">{promo.value}</div>
              <h3 className="font-display text-xl font-bold mb-2">{promo.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{promo.description}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                Claim Now <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
