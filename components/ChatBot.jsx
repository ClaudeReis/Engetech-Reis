"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquareText, X, ArrowRight, RotateCcw } from "lucide-react";
import { waLink, trackConversion } from "@/lib/config";

/**
 * Chatbot de qualificação — a demonstração viva do produto que o site vende
 * ("mostre, não conte"). Fluxo 100% clicável, sem digitação:
 *   serviço → ramo → prazo → resumo + WhatsApp com mensagem montada.
 *
 * O visual espelha o mock de DM do hero (bolhas, "online agora", gradiente
 * nas mensagens do usuário) — o visitante experimenta exatamente o que
 * compraria pro Instagram dele.
 */

const STEPS = {
  service: {
    bot: [
      "Oi! Eu sou o assistente da EngeTech Reis.",
      "Me conta: o que o seu negócio precisa hoje?",
    ],
    options: [
      "Site completo",
      "Landing Page",
      "Chatbot pra Instagram",
      "SEO / aparecer no Google",
    ],
    next: "segment",
  },
  segment: {
    bot: ["Boa escolha. Qual é o ramo do seu negócio?"],
    options: [
      "Clínica / Estética",
      "Comércio local",
      "Serviços (obras, elétrica, etc.)",
      "Outro ramo",
    ],
    next: "timing",
  },
  timing: {
    bot: ["E pra quando você precisa disso?"],
    options: [
      "O quanto antes",
      "Nas próximas semanas",
      "Ainda estou pesquisando",
    ],
    next: "summary",
  },
};

// Ordem das respostas pra montar o resumo e a mensagem do WhatsApp.
const ANSWER_LABELS = { service: "Preciso de", segment: "Ramo", timing: "Prazo" };

function buildWaMessage(answers) {
  return (
    "Olá! Vim pelo assistente do site da EngeTech Reis. " +
    `Preciso de: ${answers.service}. ` +
    `Ramo do negócio: ${answers.segment}. ` +
    `Prazo: ${answers.timing}.`
  );
}

function TypingDots() {
  return (
    <div
      className="flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm border border-edge bg-carbon px-4 py-3"
      aria-label="Assistente digitando"
    >
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-muted/70"
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // { from: 'bot' | 'user', text }
  const [step, setStep] = useState(null); // chave em STEPS, 'summary' ou null
  const [typing, setTyping] = useState(false);
  const [answers, setAnswers] = useState({});
  const scrollRef = useRef(null);
  const panelRef = useRef(null);
  const timersRef = useRef([]);

  // Delays curtos o bastante pra não frustrar; zerados em reduced-motion.
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TYPE_DELAY = reduced ? 60 : 750;

  const schedule = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  };

  // Limpa timers ao desmontar (evita setState em componente morto).
  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  // Autoscroll pro fim a cada mensagem/typing.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, step]);

  // Esc fecha; foco entra no painel ao abrir.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("button")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const pushBot = (texts, after) => {
    setTyping(true);
    schedule(() => {
      setTyping(false);
      setMessages((m) => [...m, ...texts.map((text) => ({ from: "bot", text }))]);
      after?.();
    }, TYPE_DELAY);
  };

  const start = () => {
    setMessages([]);
    setAnswers({});
    setStep(null);
    pushBot(STEPS.service.bot, () => setStep("service"));
  };

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) start();
  };

  const choose = (option) => {
    const current = STEPS[step];
    setMessages((m) => [...m, { from: "user", text: option }]);
    setAnswers((a) => ({ ...a, [step]: option }));
    setStep(null); // esconde as opções enquanto "digita"

    if (current.next === "summary") {
      pushBot(
        [
          "Fechado, anotei tudo.",
          "Toca no botão abaixo que eu te levo pro WhatsApp do Jonathan com o resumo pronto. Ele responde em até 24h.",
        ],
        () => setStep("summary")
      );
    } else {
      pushBot(STEPS[current.next].bot, () => setStep(current.next));
    }
  };

  const waHref = waLink(
    buildWaMessage({
      service: answers.service ?? "",
      segment: answers.segment ?? "",
      timing: answers.timing ?? "",
    })
  );

  return (
    <>
      {/* Launcher — acima da StickyCTA no mobile, canto no desktop */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Abrir assistente da EngeTech Reis"
        className={`fixed bottom-[5.75rem] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-obsidian shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian lg:bottom-6 lg:right-6 ${
          open ? "pointer-events-none scale-90 opacity-0" : "animate-glow-pulse"
        }`}
      >
        <MessageSquareText size={24} aria-hidden="true" />
      </button>

      {/* Painel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Assistente da EngeTech Reis"
        aria-hidden={!open}
        className={`fixed inset-x-3 bottom-3 z-50 flex max-h-[min(600px,85dvh)] flex-col overflow-hidden rounded-2xl border border-edge bg-carbon shadow-glow transition-all duration-300 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px] ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {/* Header — espelha o mock do hero ("online agora") */}
        <div className="flex items-center gap-3 border-b border-edge bg-obsidian/60 px-4 py-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient font-heading text-xs font-bold text-obsidian">
            ER
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-heading text-sm font-semibold text-ink">
              Assistente EngeTech
            </p>
            <p className="flex items-center gap-1.5 font-mono text-[11px] text-brand-cyan">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan"
                aria-hidden="true"
              />
              online agora
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar assistente"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-carbon hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Mensagens */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          aria-live="polite"
        >
          {messages.map(({ from, text }, i) => (
            <div
              key={i}
              className={`animate-fade-up max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                from === "bot"
                  ? "rounded-tl-sm border border-edge bg-obsidian/60 text-ink"
                  : "ml-auto rounded-tr-sm bg-brand-gradient font-medium text-obsidian"
              }`}
            >
              {text}
            </div>
          ))}

          {typing && <TypingDots />}

          {/* Resumo final */}
          {step === "summary" && (
            <div className="animate-fade-up space-y-3">
              <div className="rounded-xl bg-obsidian/60 p-3.5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  Resumo do seu pedido
                </p>
                <ul className="mt-2 space-y-1 text-sm text-ink">
                  {Object.entries(ANSWER_LABELS).map(([key, label]) => (
                    <li key={key} className="flex gap-2">
                      <span className="shrink-0 text-ink-muted">{label}:</span>
                      <span className="font-medium">{answers[key]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("chatbot_whatsapp")}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-3 font-heading text-sm font-semibold text-obsidian transition-transform hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
              >
                Continuar no WhatsApp
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={start}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl text-xs font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <RotateCcw size={13} aria-hidden="true" />
                Recomeçar conversa
              </button>
            </div>
          )}
        </div>

        {/* Opções clicáveis do passo atual */}
        {step && step !== "summary" && (
          <div className="animate-fade-up border-t border-edge bg-obsidian/40 p-3">
            <div className="grid grid-cols-1 gap-2">
              {STEPS[step].options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => choose(option)}
                  className="inline-flex min-h-[44px] items-center justify-between gap-2 rounded-xl border border-edge bg-carbon px-4 py-2.5 text-left text-sm text-ink transition-all duration-200 hover:border-brand-cyan/50 hover:bg-carbon/70 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {option}
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-brand-cyan"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
