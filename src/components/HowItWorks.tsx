import { motion } from "framer-motion";
import { MessageSquare, UserPlus, Wallet, Gamepad2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  { icon: MessageSquare, step: "01", title: "Message Us", description: "Send us a quick hello on WhatsApp." },
  { icon: UserPlus, step: "02", title: "Get Account", description: "Set up in under 2 minutes." },
  { icon: Wallet, step: "03", title: "Deposit", description: "Multiple options. Up to 200% bonus." },
  { icon: Gamepad2, step: "04", title: "Play & Win", description: "500+ games. Start winning!" },
];

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Get Started</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px border-t border-dashed border-border" />
              )}

              <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-card border border-border mb-3 sm:mb-5">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-gold text-primary-foreground text-[10px] sm:text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-sm sm:text-lg font-bold mb-1">{step.title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:opacity-90 transition-opacity"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            Get Started on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
