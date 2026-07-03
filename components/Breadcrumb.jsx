import { ChevronRight } from "lucide-react";

/**
 * Trilha de navegação: Início › Serviços › [label atual].
 * "Serviços" aponta pra seção #servicos da home. O último item é a página
 * atual (sem link). O BreadcrumbList (JSON-LD) fica em ServiceJsonLd.
 */
export default function Breadcrumb({ label }) {
  const linkCls =
    "rounded text-ink-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian";
  return (
    <nav aria-label="Trilha de navegação" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
        <li>
          <a href="/" className={linkCls}>Início</a>
        </li>
        <li aria-hidden="true"><ChevronRight size={13} className="text-edge" /></li>
        <li>
          <a href="/#servicos" className={linkCls}>Serviços</a>
        </li>
        <li aria-hidden="true"><ChevronRight size={13} className="text-edge" /></li>
        <li aria-current="page" className="text-ink">{label}</li>
      </ol>
    </nav>
  );
}
