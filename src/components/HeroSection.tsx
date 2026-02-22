import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import casinoHero from "@/assets/casino-hero.jpg";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0">
        <motion.img
          src={casinoHero}
          alt="Casino"
          className="w-full h-full object-cover scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/10 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-primary/15 blur-[80px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-8"
          >
            <span className="text-xs sm:text-sm text-primary font-semibold tracking-wide">
              #1 Trusted Gaming Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight"
          >
            Play. Win.
            <br />
            <span className="text-gradient-gold">Repeat.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed"
          >
            Premium live tables, 500+ games, instant payouts. Your winning streak starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:opacity-90 transition-all glow-gold group"
            >
              Start Playing Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#games"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-card/50 backdrop-blur-sm border border-border text-foreground px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-medium hover:bg-card transition-colors"
            >
              <Play className="w-4 h-4 text-primary" />
              Explore Games
            </a>
          </motion.div>

          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 sm:mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>2,847 players online now</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
