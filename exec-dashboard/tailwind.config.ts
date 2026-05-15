import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Observal dark theme — deep blue-tinted darks */
        background: "#1a1a2e",
        foreground: "#e0dff5",
        card: {
          DEFAULT: "#22223a",
          foreground: "#e0dff5",
        },
        muted: {
          DEFAULT: "#2a2a45",
          foreground: "#8b8aa3",
        },
        border: {
          DEFAULT: "rgba(139, 138, 163, 0.2)",
          subtle: "rgba(139, 138, 163, 0.08)",
          hover: "rgba(139, 138, 163, 0.35)",
        },
        primary: {
          DEFAULT: "#7c5cfc",
          foreground: "#1a1a2e",
        },
        accent: {
          DEFAULT: "#2e2e4a",
          foreground: "#e0dff5",
          blue: "#5b8af5",
          purple: "#7c5cfc",
          emerald: "#34d399",
          amber: "#fbbf24",
          rose: "#fb7185",
          cyan: "#22d3ee",
        },
        success: "#34d399",
        warning: "#fbbf24",
        info: "#5b8af5",
        destructive: "#fb7185",
        sidebar: {
          bg: "#141428",
          foreground: "#b8b7d1",
          border: "rgba(139, 138, 163, 0.15)",
          accent: "#252542",
          "accent-foreground": "#d4d3eb",
        },
        /* Chart palette matching Observal */
        chart: {
          1: "#7c5cfc",
          2: "#22d3ee",
          3: "#6b7280",
          4: "#c084fc",
          5: "#fbbf24",
          6: "#fb7185",
          7: "#34d399",
          8: "#f472b6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(124,92,252,0.15)",
        "glow-blue": "0 0 20px rgba(91,138,245,0.15)",
        "glow-emerald": "0 0 20px rgba(52,211,153,0.15)",
        card: "0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)",
        elevated: "0 4px 32px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
