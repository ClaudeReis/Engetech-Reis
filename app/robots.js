import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

// Gera /robots.txt no build estático.
//
// Política de bots de IA (decidida em 02/08/2026):
// liberados os que citam a fonte e podem mandar visita de volta, como GPTBot
// (ChatGPT), ClaudeBot (Claude), Google-Extended (Gemini), Applebot-Extended
// (Siri), meta-externalagent (Meta AI) e Amazonbot. Para uma agência que vende
// presença digital, aparecer nessas respostas é o produto.
//
// Bloqueados só os dois que coletam para treinar e não devolvem tráfego
// nenhum: CCBot (Common Crawl) e Bytespider (ByteDance).
//
// ATENÇÃO: o Cloudflare tem um "managed robots.txt" que injetava um bloco
// próprio ANTES deste conteúdo, bloqueando 9 bots de IA de uma vez. Ele foi
// desligado no painel para esta política valer. Se algum dia o robots.txt em
// produção voltar a mostrar "# BEGIN Cloudflare Managed content", é porque o
// recurso foi religado no painel e está sobrescrevendo o que está aqui.
const TREINO_SEM_RETORNO = ["CCBot", "Bytespider"];

export default function robots() {
  return {
    rules: [
      { userAgent: TREINO_SEM_RETORNO, disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
