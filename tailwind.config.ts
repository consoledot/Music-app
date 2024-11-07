import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.6s ease-in-out",
        slideUp: "slideUp 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
