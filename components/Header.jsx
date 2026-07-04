"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { waLink, WA_MESSAGES } from "@/lib/config";

const SECTIONS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Preços", href: "#oferta" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
];

const SERVICE_PAGES = [
  { label: "Landing Pages", href: "/criar-landing-page/" },
  { label: "Sites", href: "/site-institucional/" },
  { label: "Chatbot", href: "/chatbot-para-site/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-edge bg-obsidian/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-wrap flex h-16 items-center justify-between">
        {/* Hambúrguer — canto esquerdo */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-1 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          <span>Menu</span>
        </button>

        {/* Logo + CTA — canto direito */}
        <div className="flex items-center gap-3">
          <a
            href={waLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-edge bg-carbon/60 px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span className="hidden sm:inline">Falar agora</span>
          </a>

          <a
            href="/"
            aria-label="EngeTech Reis — início"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            <Logo withWordmark={false} size={38} />
          </a>
        </div>
      </div>

      {/* Dropdown — seções + páginas de serviço */}
      {menuOpen && (
        <nav
          aria-label="Navegação principal"
          className="border-t border-edge bg-obsidian/95 backdrop-blur-md"
        >
          <p className="px-6 pt-4 pb-1 font-mono text-[10px] uppercase tracking-widest text-ink-muted/50">
            Nesta página
          </p>
          {SECTIONS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex h-12 items-center px-6 font-mono text-sm uppercase tracking-wider text-ink-muted transition-colors hover:bg-carbon/40 hover:text-brand-cyan"
            >
              {label}
            </a>
          ))}

          <div className="mx-6 my-2 border-t border-edge" />

          <p className="px-6 pt-1 pb-1 font-mono text-[10px] uppercase tracking-widest text-ink-muted/50">
            Serviços
          </p>
          {SERVICE_PAGES.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex h-12 items-center px-6 font-mono text-sm uppercase tracking-wider text-ink-muted transition-colors hover:bg-carbon/40 hover:text-brand-cyan"
            >
              {label}
            </a>
          ))}
          <div className="h-4" />
        </nav>
      )}
    </header>
  );
}
