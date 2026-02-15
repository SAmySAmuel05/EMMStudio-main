import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-[#fafafa]"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f0fdf4 40%, #ecfdf5 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(6,78,59,0.12),transparent)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center section-padding">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-[#064E3B] mb-4"
          >
            EMM Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Transformamos tus ideas en{" "}
            <span className="text-gradient">experiencias digitales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Proyectos virtuales, invitaciones personalizables y diseño a medida
            para llevar tu visión al siguiente nivel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              className="shimmer rounded-full bg-[#064E3B] hover:bg-[#053d2e] text-white shadow-lg shadow-[#064E3B]/25"
              asChild
            >
              <a href="#servicios">Explorar Servicios</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contacto">Solicitar Cotización</a>
            </Button>
          </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;
