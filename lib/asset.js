// Resolve o caminho de um asset estático (imagens em /public) considerando o
// basePath do GitHub Pages. No export estático, o src renderizado não recebe
// o prefixo do repo automaticamente, então prefixamos aqui.
//
// Local/Vercel: NEXT_PUBLIC_BASE_PATH = ""  → asset("/x.webp") = "/x.webp"
// GitHub Pages: NEXT_PUBLIC_BASE_PATH = "/Engetech-Reis"
//               → asset("/x.webp") = "/Engetech-Reis/x.webp"
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  if (!path) return path;
  // URLs absolutas (http/https) passam direto.
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}
