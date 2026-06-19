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
        obsidian: "#07090F", // background principal
        carbon: "#121826", // cards
        edge: "#263142", // bordas
        ink: {
          DEFAULT: "#F4F6FB", // texto principal (quase-branco)
          muted: "#A8B0BD", // texto secundário
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
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(0,217,255,0.14) 0%, rgba(124,77,255,0.14) 100%)",
        // Textura HUD / grid sutil de fundo
        "hud-grid":
          "linear-gradient(rgba(38,49,66,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(38,49,66,0.35) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,217,255,0.25), 0 0 24px rgba(0,217,255,0.18)",
        "glow-violet": "0 0 0 1px rgba(124,77,255,0.25), 0 0 24px rgba(124,77,255,0.18)",
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
