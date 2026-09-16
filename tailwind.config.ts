import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        panel: "#121212",
        line: "#262626",
        acid: "#FFC700",
        amber: "#D4A017",
        muted: "#A1A1AA",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      maxWidth: { shell: "1440px" },
    },
  },
  plugins: [],
} satisfies Config;