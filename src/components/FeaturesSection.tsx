import { motion } from "framer-motion";
import { Shield, Zap, Gift, HeadphonesIcon, Trophy, Lock } from "lucide-react";

const features = [
  { icon: Shield, title: "100% Secure", description: "Bank-grade encryption for your funds and data." },
  { icon: Zap, title: "Instant Payouts", description: "Withdraw in minutes. No delays or hidden fees." },
  { icon: Gift, title: "Massive Bonuses", description: "Up to 200% welcome bonus + daily cashback." },
  { icon: HeadphonesIcon, title: "24/7 Support", description: "WhatsApp support available anytime." },
  { icon: Trophy, title: "VIP Program", description: "Exclusive perks, higher limits, personal managers." },
  { icon: Lock, title: "Fair Play", description: "Certified games with transparent RTP rates." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 sm:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Why Us</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4">
            Why Players <span className="text-gradient-gold">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-gradient-gold group-hover:border-transparent transition-all duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-sm sm:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
