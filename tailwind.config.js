/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System EngeTech Reis
        // Escada de superfícies (do mais afundado ao mais elevado). A profundidade
        // é o que separa os planos — a borda sozinha não dá conta: `edge` sobre
        // `carbon` rende só 1.35:1 de contraste.
        sunken: "#0B0F18", // caixas internas, dentro de um card
        obsidian: "#07090F", // background principal
        carbon: "#121826", // cards
        raised: "#1A2233", // card de seção-pilar (oferta, destaque)
        edge: "#263142", // bordas
        // Hairlines para agrupar/separar dentro de um card, sem competir com `edge`.
        hairline: "rgba(255,255,255,0.06)",
        "hairline-strong": "rgba(255,255,255,0.10)",
        ink: {
          DEFAULT: "#F4F6FB", // texto principal (quase-branco) — 18.4:1 no obsidian
          muted: "#A8B0BD", // texto secundário — 9.1:1
          // Terceiro nível de texto. Existe para substituir `text-ink-muted/40-60`,
          // que reprovava em AA (2.3:1 a 3.8:1). Este passa: 6.4:1 no obsidian.
          subtle: "#8B93A3",
        },
        brand: {
          cyan: "#00D9FF",
          violet: "#7C4DFF",
          blue: "#2A72FF",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #00D9FF 0%, #2A72FF 45%, #7C4DFF 100%)",
        // Gradiente de CTA: para no azul em vez de correr até o violeta.
        // Texto obsidian sobre a ponta violeta rende 4.14:1 (reprova em AA);
        // sobre a ponta azul, 4.69:1 (passa). Visualmente quase idêntico.
        "cta-gradient": "linear-gradient(135deg, #00D9FF 0%, #2A72FF 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(0,217,255,0.14) 0%, rgba(124,77,255,0.14) 100%)",
        // Textura HUD / grid sutil de fundo
        "hud-grid":
          "linear-gradient(rgba(38,49,66,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(38,49,66,0.35) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,217,255,0.25), 0 0 24px rgba(0,217,255,0.18)",
        "glow-violet": "0 0 0 1px rgba(124,77,255,0.25), 0 0 24px rgba(124,77,255,0.18)",
        // Elevação real (sombra projetada), não glow. Usada para levantar o card
        // de seção-pilar acima do plano dos cards comuns.
        raise:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 64px -24px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(0,217,255,0.25)" },
          "50%": { boxShadow: "0 0 34px rgba(0,217,255,0.5)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
