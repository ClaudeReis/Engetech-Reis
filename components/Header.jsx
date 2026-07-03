"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { waLink, WA_MESSAGES } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge bg-obsidian/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-wrap flex h-16 items-center justify-between">
        <a
          href="#topo"
          aria-label="EngeTech Reis — início"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
        >
          <Logo withWordmark={false} size={38} />
        </a>

        {/* Navegação por âncoras — só desktop (no mobile o CTA manda) */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {[
            { label: "Serviços", href: "#oferta" },
            { label: "Projetos", href: "#projetos" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(WA_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-edge bg-carbon/60 px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span className="hidden sm:inline">Falar agora</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
