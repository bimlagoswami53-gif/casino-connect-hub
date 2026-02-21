import { motion } from "framer-motion";
import { MessageSquare, UserPlus, Wallet, Gamepad2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Message Us",
    description: "Click the WhatsApp button and send us a quick hello to get started.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Create Account",
    description: "Our team will set you up with a secure account in under 2 minutes.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Make Deposit",
    description: "Fund your account with multiple payment options. Get up to 200% bonus.",
  },
  {
    icon: Gamepad2,
    step: "04",
    title: "Start Playing",
    description: "Choose from 500+ games and start winning big right away!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Get Started</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Getting started is quick and easy. You'll be playing within minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t border-dashed border-border" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-border mb-5">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity"
          >
            <MessageSquare className="w-5 h-5" />
            Get Started on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
