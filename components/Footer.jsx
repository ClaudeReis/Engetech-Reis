import { MessageCircle, Instagram } from "lucide-react";
import Logo from "./Logo";
import { waLink, WA_MESSAGES, INSTAGRAM_URL, PROMO_SLOTS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-carbon/40">
      <div className="section-wrap py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-pretty font-heading text-sm leading-relaxed text-ink-muted">
              Design que atrai. Código que estrutura. Automação que vende.
            </p>
          </div>

          <nav aria-label="Contato" className="flex flex-col gap-3">
            <a
              href={waLink(WA_MESSAGES.final)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-md text-sm text-ink-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </a>
            {/* TODO: trocar pelo @ real do Instagram em lib/config.js */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-md text-sm text-ink-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
            >
              <Instagram size={16} aria-hidden="true" />
              Instagram
            </a>
          </nav>
        </div>

        {/* PS de reforço — agrupado por fundo, sem borda (consistente com o
            padrão de agrupamento interno adotado na Offer) */}
        <div className="mt-10 rounded-xl bg-obsidian/50 p-4">
          <p className="text-pretty text-sm leading-relaxed text-ink-muted">
            <span className="font-semibold text-ink">PS:</span> o preço de R$497 é
            de lançamento — restam {PROMO_SLOTS.left} das {PROMO_SLOTS.total}{" "}
            vagas. Quando fecharem, volta ao valor normal.
          </p>
        </div>

        {/* Rodapé legal / LGPD */}
        <div className="mt-8 flex flex-col gap-3 border-t border-edge pt-6 text-xs text-ink-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EngeTech Reis. Rio de Janeiro, RJ.</p>
          {/* LGPD — relevante caso seja adicionado formulário de captação */}
          <p className="max-w-md text-pretty">
            Ao enviar seus dados, você concorda com nossa Política de Privacidade
            e com o tratamento dos seus dados conforme a LGPD.
          </p>
        </div>
      </div>
    </footer>
  );
}
