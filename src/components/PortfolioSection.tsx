import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import invitacionPortada from "@/assets/invitacion-portada.png";
import invitacionUbicacion from "@/assets/invitacion-ubicacion.png";
import plantilla3 from "@/assets/plantilla3.png";
import plantilla4 from "@/assets/plantilla4.png";
import plantilla5 from "@/assets/plantilla5.png";
import plantilla6 from "@/assets/plantilla6.png";

const projects = [
  { src: portfolio1, title: "Agenda de Turnos", category: "Gestión de Citas" },
  { src: portfolio2, title: "Invitación Boda", category: "Invitación Digital" },
  { src: portfolio3, title: "Planificador de Eventos", category: "Organización" },
];

const slideHeight = 500;

const ScrollContent = ({
  image1,
  image2,
  height = slideHeight,
}: {
  image1: string;
  image2: string;
  height?: number;
}) => (
  <motion.div
    animate={{ y: [0, -height, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col"
    style={{ minHeight: "200%" }}
  >
    <div
      className="flex-shrink-0 w-full bg-cover bg-center bg-no-repeat"
      style={{ height: height, backgroundImage: `url(${image1})` }}
      role="img"
      aria-hidden
    />
    <div
      className="flex-shrink-0 w-full bg-cover bg-center bg-no-repeat"
      style={{ height: height, backgroundImage: `url(${image2})` }}
      role="img"
      aria-hidden
    />
  </motion.div>
);

const HorizontalScrollContent = ({ image1, image2 }: { image1: string; image2: string }) => (
  <motion.div
    animate={{ x: [0, "-50%", 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="flex h-full"
    style={{ minWidth: "200%" }}
  >
    <div
      className="flex-shrink-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image1})` }}
      role="img"
      aria-hidden
    />
    <div
      className="flex-shrink-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image2})` }}
      role="img"
      aria-hidden
    />
  </motion.div>
);

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
            Portafolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trabajos recientes
          </h2>
        </motion.div>

        {/* Mockups: móvil, laptop y PC con misma animación de invitación */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-14"
        >
          {/* Móvil */}
          <div className="relative flex-shrink-0">
            <div
              className="w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[2.25rem] border-[12px] border-neutral-800 shadow-2xl shadow-neutral-900/30 bg-neutral-800 overflow-hidden"
              style={{ boxShadow: "0 25px 80px -12px rgba(6, 78, 59, 0.25)" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-neutral-900 rounded-b-xl z-20" />
              <div className="w-full h-full pt-6 overflow-hidden relative">
                <ScrollContent image1={invitacionUbicacion} image2={invitacionPortada} height={500} />
              </div>
            </div>
          </div>

          {/* Tablet (estilo delgado) */}
          <div className="relative flex-shrink-0">
            <div
              className="rounded-[1.25rem] border-[6px] border-neutral-700 bg-neutral-700 shadow-2xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px -12px rgba(6, 78, 59, 0.2)" }}
            >
              <div className="flex justify-center py-1.5 bg-neutral-800">
                <div className="w-2 h-2 rounded-full bg-neutral-500" />
              </div>
              <div className="w-[280px] sm:w-[300px] h-[220px] sm:h-[240px] overflow-hidden bg-neutral-900">
                <HorizontalScrollContent image1={plantilla4} image2={plantilla3} />
              </div>
            </div>
          </div>

          {/* PC / Monitor (pantalla más grande) */}
          <div className="relative flex-shrink-0">
            <div className="rounded-lg border-[10px] border-neutral-700 bg-neutral-700 shadow-2xl overflow-hidden" style={{ boxShadow: "0 25px 60px -12px rgba(0,0,0,0.3)" }}>
              <div className="flex justify-center pt-2 pb-1.5 bg-neutral-800">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
              </div>
              <div className="w-[340px] sm:w-[400px] h-[220px] sm:h-[260px] overflow-hidden bg-neutral-900">
                <ScrollContent image1={plantilla5} image2={plantilla6} height={260} />
              </div>
              <div className="flex justify-center bg-neutral-700 py-2.5">
                <div className="w-20 h-5 sm:w-24 sm:h-6 rounded-full bg-neutral-600" />
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
