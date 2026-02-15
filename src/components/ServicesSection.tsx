import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Gift, LayoutGrid, Users, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Gift,
    title: "Invitaciones Web Premium",
    description:
      "Invitaciones digitales elegantes con confirmación de asistencia (RSVP), enlace a Google Maps para ubicación del evento y contador regresivo integrado. Impacta desde el primer clic.",
    features: ["RSVP integrado", "Google Maps", "Contador regresivo"],
    iconBg: "bg-[#064E3B]/10",
    iconColor: "text-[#064E3B]",
  },
  {
    icon: LayoutGrid,
    title: "Proyectos Virtuales & Web",
    description:
      "Catálogos digitales interactivos y sitios web para marcas. Presenta tus productos y servicios de forma profesional y fácil de compartir.",
    features: ["Catálogos digitales", "Sitios para marcas", "Diseño a medida"],
    iconBg: "bg-[#064E3B]/10",
    iconColor: "text-[#064E3B]",
  },
  {
    icon: Users,
    title: "Gestor de Eventos Exclusivo",
    description:
      "Solución integral para organizar tu evento. Incluye como valor añadido gratuito al contratar: nuestro software de Acomodo de Mesas Interactivo para planificar y visualizar la distribución de invitados.",
    features: [
      "Gestor de eventos",
      "Acomodo de Mesas Interactivo (incluido)",
      "Planificación visual",
    ],
    iconBg: "bg-[#064E3B]/10",
    iconColor: "text-[#064E3B]",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-[#f8faf8]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#064E3B] mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Lo que hacemos mejor
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card
                className="group glass-card rounded-2xl border-white/50 shadow-xl shadow-[#064E3B]/5 hover:shadow-2xl hover:shadow-[#064E3B]/10 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.75)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mx-auto mb-6 group-hover:bg-[#064E3B] transition-all duration-500 group-hover:scale-110`}
                  >
                    <service.icon
                      className={`w-6 h-6 ${service.iconColor} group-hover:text-white transition-colors duration-500`}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap justify-center gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#064E3B] bg-[#064E3B]/10 rounded-full px-3 py-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
