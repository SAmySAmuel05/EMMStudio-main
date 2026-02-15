import { Mail } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:samuel.e.a.r.0506@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold text-foreground">
            EMM<span className="text-[#064E3B]">Studio</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} EMMStudio. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-[#064E3B] hover:border-[#064E3B] transition-colors"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
