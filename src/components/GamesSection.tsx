import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const games = [
  { name: "Roulette", emoji: "🎡", description: "Classic European & American tables" },
  { name: "Poker", emoji: "🃏", description: "Texas Hold'em, Omaha & more" },
  { name: "Slots", emoji: "🎰", description: "500+ premium slot machines" },
  { name: "Blackjack", emoji: "♠️", description: "Beat the dealer, win big" },
  { name: "Baccarat", emoji: "💎", description: "The game of elegance & chance" },
  { name: "Live Casino", emoji: "🎥", description: "Real dealers, real-time action" },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-gradient-gold">Games</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from our wide selection of premium casino games and start winning today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, i) => (
            <motion.a
              key={game.name}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:glow-gold-sm transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4">{game.emoji}</div>
              <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient-gold transition-colors">
                {game.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
              <span className="text-primary text-sm font-semibold group-hover:underline">Play Now →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
