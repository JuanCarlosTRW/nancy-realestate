import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Dallas luxury palette
        // Token names preserved for minimal component churn; values shifted warmer.
        gold: "#C8A97E",        // warm desert gold (primary)
        goldLight: "#D4B896",   // softer warm gold
        goldDark: "#A8845A",    // burnished gold (hover)
        goldAccent: "#E8D5B8",  // cream-gold accent
        accent: "#8B4513",      // Texas terracotta
        cream: "#FAF7F2",       // warm cream bg
        warmWhite: "#FAF7F2",   // alias to warm cream (no pure white)
        charcoal: "#1C1712",    // warm deep charcoal (no pure black)
        darkText: "#2C2218",    // warm near-black body heading
        mediumText: "#5C4A38",  // warm brown body text
        lightText: "#7A6855",   // muted warm brown
        bordr: "#E8DDD0",       // warm subtle border
        bgSection: "#F2EDE4",   // alternating cream
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.3em",
        button: "0.15em",
      },
      boxShadow: {
        warm: "0 20px 40px -20px rgba(140,100,60,0.18)",
        warmLg: "0 30px 60px -25px rgba(140,100,60,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
