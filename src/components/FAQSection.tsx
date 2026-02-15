import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuál es el proceso de trabajo?",
    answer:
      "Comenzamos con una reunión o llamada para entender tu visión y requisitos. Luego te enviamos una propuesta y cronograma. Una vez aprobado, trabajamos en fases: diseño, revisión y ajustes, y entrega final. Mantenemos comunicación constante para que estés al tanto del avance.",
  },
  {
    question: "¿Cuánto tiempo toma la entrega?",
    answer:
      "Los plazos varían según el tipo de proyecto. Una invitación digital simple suele entregarse en 1-2 semanas. Proyectos más complejos como catálogos o gestores de eventos pueden tomar de 3 a 6 semanas. Te daremos un estimado claro desde la cotización.",
  },
  {
    question: "¿Incluyen revisiones o cambios?",
    answer:
      "Sí. Incluimos rondas de revisión según el paquete contratado. Nuestro objetivo es que el resultado final supere tus expectativas, por lo que trabajamos contigo hasta que estés 100% satisfecho dentro del alcance acordado.",
  },
  {
    question: "¿Cómo se confirma la asistencia (RSVP) en las invitaciones?",
    answer:
      "Las invitaciones web premium incluyen un formulario de RSVP integrado. Los invitados responden en línea y tú recibes las respuestas organizadas (por ejemplo en una hoja o panel). Opcionalmente podemos conectar notificaciones por correo o WhatsApp.",
  },
  {
    question: "¿Qué necesito proporcionar para empezar?",
    answer:
      "Necesitamos la información del evento (fecha, lugar, tipo de evento), textos que quieras incluir, preferencias de estilo o colores y, si tienes, logo o imágenes. Con eso podemos armar una primera propuesta de diseño.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#064E3B] mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Resolvemos tus dudas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#064E3B]/10 px-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-[#064E3B] hover:no-underline py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
