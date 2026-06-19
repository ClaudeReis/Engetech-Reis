import { Bot, Check, Star, Zap, Search } from "lucide-react";

/**
 * Mockup ilustrativo do hero: dramatiza a proposta de valor —
 * (1) DM do Instagram respondida automaticamente às 23h e
 * (2) o negócio aparecendo no topo da busca do Google.
 * Decorativo/ilustrativo: descrito via aria-label, detalhes internos ocultos a SR.
 */
export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[340px] select-none"
      role="img"
      aria-label="Demonstração: um cliente manda mensagem no Instagram às 23h e o chatbot responde na hora, enquanto o negócio aparece no topo da busca do Google."
    >
      {/* halo de glow atrás do mock */}
      <div
        aria-hidden="true"
        className="glow-blob absolute inset-0 -z-10 rounded-[2rem] bg-brand-cyan/30"
      />

      {/* ---- Telefone / DM do Instagram ---- */}
      <div
        aria-hidden="true"
        className="rotate-[1.5deg] rounded-[1.6rem] border border-edge bg-carbon p-3 shadow-glow"
      >
        {/* header do chat */}
        <div className="flex items-center gap-2.5 border-b border-edge pb-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient font-heading text-xs font-bold text-obsidian">
            ER
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-semibold text-ink">
              seu_negocio
            </p>
            <p className="flex items-center gap-1.5 text-[11px] text-ink-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ativo agora
            </p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2 py-0.5 font-mono text-[10px] text-brand-cyan">
            <Bot size={11} /> bot
          </span>
        </div>

        {/* mensagens */}
        <div className="space-y-2.5 pt-3">
          <div className="flex items-end gap-1.5">
            <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-obsidian px-3 py-2 text-[13px] text-ink">
              Oi! Vocês ainda atendem hoje?
            </div>
          </div>
          <p className="pl-1 font-mono text-[10px] text-ink-muted">23:14</p>

          <div className="flex items-end justify-end gap-1.5">
            <div className="max-w-[82%] rounded-2xl rounded-br-md bg-brand-gradient px-3 py-2 text-[13px] font-medium text-obsidian">
              Oi! Atendemos sim. Posso já te enviar os horários e o link de
              agendamento?
            </div>
          </div>
          <p className="flex items-center justify-end gap-1 pr-1 font-mono text-[10px] text-brand-cyan">
            <Zap size={10} /> respondido em 0,8s
            <Check size={11} className="-ml-0.5" />
          </p>
        </div>
      </div>

      {/* ---- Card de resultado do Google (flutuante) ---- */}
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -left-4 w-[230px] -rotate-[3deg] rounded-xl border border-edge bg-carbon/95 p-3.5 shadow-glow-violet backdrop-blur sm:-left-8"
      >
        <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] text-ink-muted">
          <Search size={11} className="text-brand-violet" />
          google.com
        </div>
        <p className="text-[11px] text-emerald-400/90">
          seunegocio.com.br › servicos
        </p>
        <p className="font-heading text-[13px] font-semibold leading-snug text-ink">
          Seu Negócio — atendimento em Botafogo, RJ
        </p>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="flex gap-0.5 text-brand-cyan">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="text-[10px] text-ink-muted">
            5,0 · Aberto agora
          </span>
        </div>
        <span className="mt-2 inline-block rounded-md bg-brand-violet/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-brand-violet">
          1º resultado
        </span>
      </div>
    </div>
  );
}
