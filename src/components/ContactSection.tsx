import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="section-padding bg-[#f8faf8]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#064E3B] mb-3">
            Contacto
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solicita tu presupuesto
          </h2>
          <p className="text-muted-foreground">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Nombre"
              required
              className="h-12 rounded-xl bg-card"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              className="h-12 rounded-xl bg-card"
            />
          </div>
          <Input
            placeholder="Asunto"
            required
            className="h-12 rounded-xl bg-card"
          />
          <Textarea
            placeholder="Describe tu proyecto..."
            rows={5}
            required
            className="rounded-xl bg-card resize-none"
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full bg-[#064E3B] hover:bg-[#053d2e]"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensaje"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
