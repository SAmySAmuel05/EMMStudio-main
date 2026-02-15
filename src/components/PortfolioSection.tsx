import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { src: portfolio1, title: "Agenda de Turnos", category: "Gestión de Citas" },
  { src: portfolio2, title: "Invitación Boda", category: "Invitación Digital" },
  { src: portfolio3, title: "Planificador de Eventos", category: "Organización" },
  { src: portfolio4, title: "Evento Corporativo", category: "Invitación Digital" },
  { src: portfolio5, title: "Sistema de Reservas", category: "Gestión de Citas" },
  { src: portfolio6, title: "Diseño Web", category: "Diseño" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#064E3B] mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trabajos recientes
          </h2>
        </motion.div>

        {/* Phone mockup - invitación digital en acción */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <div className="relative">
            <div
              className="w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[2.25rem] border-[12px] border-neutral-800 shadow-2xl shadow-neutral-900/30 bg-neutral-800 overflow-hidden"
              style={{ boxShadow: "0 25px 80px -12px rgba(6, 78, 59, 0.25)" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-b-xl z-20" />
              <div className="w-full h-full bg-gradient-to-b from-[#064E3B]/5 to-white pt-6 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -180, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="px-4 pt-2 pb-16"
                >
                  <div className="rounded-xl bg-white shadow-lg border border-[#064E3B]/10 overflow-hidden mb-3">
                    <div className="h-24 bg-gradient-to-br from-[#064E3B] to-[#053d2e]" />
                    <div className="p-3">
                      <p className="font-display text-base font-semibold text-[#064E3B]">
                        Boda María & Carlos
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        Sábado 15 de Junio
                      </p>
                      <div className="flex gap-1.5 mt-2">
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#064E3B]/10 text-[#064E3B]">
                          RSVP
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#064E3B]/10 text-[#064E3B]">
                          Ubicación
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white shadow-lg border border-[#064E3B]/10 overflow-hidden mb-3">
                    <div className="h-20 bg-gradient-to-br from-[#064E3B]/80 to-[#064E3B]" />
                    <div className="p-2.5">
                      <p className="font-display text-xs font-semibold text-[#064E3B]">
                        Confirmación de asistencia
                      </p>
                      <p className="text-[9px] text-muted-foreground">
                        Cuenta regresiva: 45 días
                      </p>
                    </div>
                  </div>
                  <div className="h-16 flex items-center justify-center text-muted-foreground/50 text-[10px]">
                    Invitación digital · EMM Studio
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#064E3B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-6">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/90 mb-2">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
