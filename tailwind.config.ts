import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C6A96C",
        goldLight: "#D4BC8A",
        goldDark: "#A8893F",
        goldAccent: "#E8D5A8",
        cream: "#FAF7F2",
        warmWhite: "#FEFCF9",
        charcoal: "#2A2A2A",
        darkText: "#1A1A1A",
        mediumText: "#4A4A4A",
        lightText: "#7A7A7A",
        bordr: "#E8E2D8",
        bgSection: "#F5F1EB",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.3em",
        button: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
