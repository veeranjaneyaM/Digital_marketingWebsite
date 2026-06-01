import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#02030a",
        "void-soft": "#0a1020",
        electric: "#1d7bff",
        cyan: "#4df6ff",
        silver: "#d8e1ff",
        violet: "#7f5cff"
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        body: ["var(--font-poppins)"],
        ui: ["var(--font-inter)"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(77, 246, 255, 0.22)",
        panel: "0 20px 80px rgba(3, 10, 28, 0.55)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at top left, rgba(29,123,255,0.32), transparent 35%), radial-gradient(circle at top right, rgba(127,92,255,0.24), transparent 30%), linear-gradient(135deg, rgba(77,246,255,0.10), rgba(2,3,10,0))"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
        marquee: "marquee 22s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(77, 246, 255, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(77, 246, 255, 0.28)" }
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
