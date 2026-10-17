import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#100e0b",
        surface: {
          DEFAULT: "#181512",
          card: "#14110e",
          border: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
        },
        aurora: {
          teal: "#093c3f",
          emerald: "#059669",
          mint: "#4ef2bb",
          indigo: "#1e1b4b",
          blue: "#3b82f6",
          purple: "#a855f7",
          violet: "#6366f1",
        },
        brand: {
          ivory: "#fbfaf8",
          stone: "#a6a096",
          darkstone: "#635e55",
          accent: "#4ef2bb",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        serif: [
          "var(--font-editorial)",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "drift-slow": "drift 30s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        drift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(25px, -15px) scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
