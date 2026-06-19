"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { waLink, WA_MESSAGES, trackConversion } from "@/lib/config";

/**
 * Barra de CTA fixa no rodapé — só em mobile/tablet (lg:hidden).
 * Aparece depois que o hero sai da tela e some perto do rodapé,
 * pra não cobrir o CTA final nem o footer.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        y + window.innerHeight >= document.body.scrollHeight - 520;
      setShow(y > window.innerHeight * 0.9 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-edge bg-carbon/95 p-2.5 pl-4 shadow-glow backdrop-blur-md">
        <div className="min-w-0">
          <p className="truncate font-heading text-sm font-semibold leading-tight text-ink">
            Presença digital completa
          </p>
          <p className="truncate font-mono text-[11px] text-ink-muted">
            setup R$350 • em 24h
          </p>
        </div>
        <a
          href={waLink(WA_MESSAGES.offer)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("sticky_mobile_cta")}
          aria-label="Começar agora — abrir WhatsApp"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-3 font-heading text-sm font-semibold text-obsidian transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
        >
          Começar
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
