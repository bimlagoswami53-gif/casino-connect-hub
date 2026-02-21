import { motion } from "framer-motion";
import { Shield, Zap, Gift, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade encryption ensures your funds and data remain protected at all times.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description: "Withdraw your winnings instantly. No delays, no hidden fees, no hassle.",
  },
  {
    icon: Gift,
    title: "Exclusive Bonuses",
    description: "Enjoy massive welcome bonuses, daily rewards, and VIP loyalty programs.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you via WhatsApp anytime.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide a premium, trustworthy, and rewarding gaming experience like no other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:glow-gold-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
