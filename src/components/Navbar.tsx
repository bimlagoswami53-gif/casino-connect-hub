import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { WHATSAPP_URL } from "@/lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="font-display text-lg sm:text-2xl font-bold text-gradient-gold">
          CasinoRoyal
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#games" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Games</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <ThemeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join Now
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-1">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 space-y-2">
          <a href="#games" className="block text-xs font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setIsOpen(false)}>Games</a>
          <a href="#features" className="block text-xs font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#about" className="block text-xs font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setIsOpen(false)}>About</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-gold text-primary-foreground px-4 py-2.5 rounded-lg text-xs font-semibold text-center"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
