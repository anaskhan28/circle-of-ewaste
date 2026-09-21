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
        brand: {
          blue: "#1264C4",
          "deep-blue": "#0B3B82",
          "bright-blue": "#1598E8",
          green: "#168A3A",
          "leaf-green": "#62B92E",
        },
        dark: "#111827",
        muted: "#6B7280",
        "light-bg": "#F7FAFC",
        "very-light-green": "#F1F9F3",
        "very-light-blue": "#F2F7FD",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-blue-green":
          "linear-gradient(135deg, #0B3B82 0%, #1264C4 50%, #168A3A 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0B3B82 0%, #1264C4 60%, #0d6e2f 100%)",
        "gradient-card":
          "linear-gradient(135deg, #F2F7FD 0%, #F1F9F3 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 2px 20px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.12)",
        blue: "0 4px 24px rgba(18, 100, 196, 0.2)",
        green: "0 4px 24px rgba(22, 138, 58, 0.2)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
