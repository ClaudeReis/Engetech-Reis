"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";

/**
 * Accordion acessível (aria-expanded / aria-controls, navegável por teclado).
 * items: [{ q, a }]
 */
export default function Accordion({ items, defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-edge overflow-hidden rounded-2xl border border-edge bg-carbon">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-obsidian/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan sm:px-6"
              >
                <span className="font-heading text-base font-semibold text-ink sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    isOpen
                      ? "border-brand-cyan/60 text-brand-cyan"
                      : "border-edge text-ink-muted"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-pretty leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
