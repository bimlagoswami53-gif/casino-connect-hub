import { motion } from "framer-motion";
import { Shield, Zap, Gift, HeadphonesIcon, Trophy, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade encryption protects your funds and personal data around the clock.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Withdraw winnings in minutes. No delays, no hidden charges, no minimum limits.",
  },
  {
    icon: Gift,
    title: "Massive Bonuses",
    description: "Up to 200% welcome bonus, daily cashbacks, and exclusive VIP rewards program.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated WhatsApp support team available anytime for instant assistance.",
  },
  {
    icon: Trophy,
    title: "VIP Program",
    description: "Climb the ranks to unlock exclusive perks, higher limits, and personal managers.",
  },
  {
    icon: Lock,
    title: "Fair Play",
    description: "All games are certified and audited for fairness with transparent RTP rates.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Why Players <span className="text-gradient-gold">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            We've built the most trusted and rewarding platform for serious players.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-gradient-gold group-hover:border-transparent transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
