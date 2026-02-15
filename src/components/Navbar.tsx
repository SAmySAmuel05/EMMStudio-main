import { useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Gift, Image, HelpCircle, Mail } from "lucide-react";

const links = [
  { label: "Inicio", href: "#hero", icon: Home },
  { label: "Servicios", href: "#servicios", icon: Gift },
  { label: "Portafolio", href: "#portfolio", icon: Image },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contacto", href: "#contacto", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const goToSection = (href: string) => {
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;

    const navOffset = 72;
    const absoluteTop = section.getBoundingClientRect().top + window.scrollY - navOffset;
    const targetTop = Math.max(absoluteTop, 0);

    window.scrollTo({ top: targetTop, behavior: "smooth" });

    // Some mobile browsers update hash but skip scrolling on touch-generated clicks.
    // This fallback enforces final position after the menu close animation.
    window.setTimeout(() => {
      const currentTop = section.getBoundingClientRect().top;
      if (Math.abs(currentTop - navOffset) > 10) {
        window.scrollTo(0, targetTop);
      }
    }, 450);

    if (window.location.hash !== href) {
      window.history.replaceState(null, "", href);
    }
  };

  const handleAnchorNavigation =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      closeMenu();
      window.setTimeout(() => goToSection(href), 50);
    };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="font-display text-2xl font-bold text-foreground tracking-tight"
          onClick={handleAnchorNavigation("#hero")}
        >
          EMM<span className="text-[#064E3B]">Studio</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleAnchorNavigation(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#contacto" onClick={handleAnchorNavigation("#contacto")}>
              Cotizar
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -m-2 text-foreground rounded-lg hover:bg-[#064E3B]/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-panel"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu - panel deslizante */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/20 z-40 md:hidden"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              id="mobile-menu-panel"
              className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto md:hidden bg-white border-b border-[#064E3B]/10 shadow-lg z-50"
            >
              <div className="px-4 py-4 space-y-1">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleAnchorNavigation(link.href)}
                      className="flex items-center gap-3 w-full py-4 px-4 rounded-xl text-base font-medium text-foreground hover:bg-[#064E3B]/5 hover:text-[#064E3B] transition-colors"
                    >
                      <Icon className="w-5 h-5 text-[#064E3B]/70 shrink-0" />
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-2 pb-1">
                  <Button variant="hero" size="lg" className="w-full rounded-xl" asChild>
                    <a href="#contacto" onClick={handleAnchorNavigation("#contacto")}>
                      Solicitar cotización
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
