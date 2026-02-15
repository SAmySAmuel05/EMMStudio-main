import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import Index from "@/pages/Index";

describe("Navbar", () => {
  it("expone enlaces a secciones existentes en la página principal", () => {
    render(<Index />);

    const menuHrefs = ["#hero", "#servicios", "#portfolio", "#faq", "#contacto"];

    for (const href of menuHrefs) {
      const links = screen
        .getAllByRole("link")
        .filter((link) => link.getAttribute("href") === href);

      expect(links.length).toBeGreaterThan(0);
      expect(document.querySelector(href)).toBeInTheDocument();
    }
  });

  it("abre y cierra el menú móvil desde el botón toggle", () => {
    render(<Navbar />);

    const openButton = screen.getByRole("button", { name: /abrir menú/i });
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(openButton);

    const closeButton = screen.getByRole("button", { name: /cerrar menú/i });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(closeButton);

    expect(screen.getByRole("button", { name: /abrir menú/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("cierra el menú móvil al seleccionar un enlace del panel", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: /abrir menú/i }));

    const servicesLinks = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href") === "#servicios");

    expect(servicesLinks.length).toBeGreaterThan(1);

    fireEvent.click(servicesLinks[servicesLinks.length - 1]);

    expect(screen.getByRole("button", { name: /abrir menú/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
