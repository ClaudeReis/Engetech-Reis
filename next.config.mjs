/** @type {import('next').NextConfig} */

// Em build do GitHub Pages (project site claudereis.github.io/Engetech-Reis/),
// os assets ficam num subcaminho. O workflow define GITHUB_PAGES=true.
// Local e Vercel rodam na raiz (sem basePath).
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "Engetech-Reis";

const nextConfig = {
  reactStrictMode: true,

  // Exportação 100% estática: gera a pasta /out com HTML + CSS + JS.
  output: "export",

  // Necessário no export estático (não há servidor pra otimizar imagens).
  images: {
    unoptimized: true,
  },

  // URLs com barra final → /pasta/index.html (compatível com hospedagem estática).
  trailingSlash: true,

  // Prefixo do repositório, aplicado só no build do GitHub Pages.
  basePath: isGithubPages ? `/${repo}` : undefined,
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
};

export default nextConfig;
