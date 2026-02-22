import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import gameRoulette from "@/assets/game-roulette.jpg";
import gamePoker from "@/assets/game-poker.jpg";
import gameSlots from "@/assets/game-slots.jpg";
import gameBlackjack from "@/assets/game-blackjack.jpg";
import gameBaccarat from "@/assets/game-baccarat.jpg";
import gameLive from "@/assets/game-live.jpg";
import { ArrowRight, Users } from "lucide-react";

const games = [
  { name: "Roulette", image: gameRoulette, players: "2.1K", description: "European & American" },
  { name: "Poker", image: gamePoker, players: "3.4K", description: "Texas Hold'em & Omaha" },
  { name: "Slots", image: gameSlots, players: "5.2K", description: "500+ premium machines" },
  { name: "Blackjack", image: gameBlackjack, players: "1.8K", description: "Classic & VIP tables" },
  { name: "Baccarat", image: gameBaccarat, players: "1.5K", description: "Punto Banco & more" },
  { name: "Live Casino", image: gameLive, players: "4.7K", description: "Real dealers, live action" },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-12 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Collection</span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-4">
            Popular <span className="text-gradient-gold">Games</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-base">
            Hand-picked premium casino games with the highest RTP rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {games.map((game, i) => (
            <motion.a
              key={game.name}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-sm sm:text-2xl font-bold text-foreground">{game.name}</h3>
                    <p className="text-[10px] sm:text-sm text-muted-foreground mt-0.5 hidden sm:block">{game.description}</p>
                  </div>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1.5 sm:mt-3">
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{game.players} playing</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
