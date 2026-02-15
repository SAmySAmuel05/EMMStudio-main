import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

// Formulario enviado vía Formspree (https://formspree.io/f/xpqjdjnb)
const FORMSPREE_FORM_ID = "xpqjdjnb";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setLoading(true);

    try {
      const formData = new FormData(form);
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderemos a tu correo en menos de 24 horas.",
        });
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        toast({
          title: "Error al enviar",
          description: data.error || "Revisa el formulario o intenta de nuevo.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error de conexión",
        description: "No se pudo enviar. Escríbenos por WhatsApp o email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="section-padding scroll-mt-20 bg-[#f8faf8]">
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
            Cuéntanos tu proyecto y trabajemos en ello
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tu idea merece verse increíble. Escríbenos y en menos de 24 horas te respondemos con una propuesta a tu medida.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5" action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`} method="POST">
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              name="name"
              placeholder="Nombre"
              required
              className="h-12 rounded-xl bg-card"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="h-12 rounded-xl bg-card"
            />
          </div>
          <Input
            name="subject"
            placeholder="Asunto"
            required
            className="h-12 rounded-xl bg-card"
          />
          <Textarea
            name="message"
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
