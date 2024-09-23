import type { Config } from "tailwindcss";
import fluid, { extract } from 'fluid-tailwind'

const config: Config = {
  darkMode: "class",
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        elavation: {
          one: "var(--elavation-one)",
          two: "var(--elavation-two)",
          opp_one: "var(--elavation-opp-one)",
          opp_two: "var(--elavation-opp-two)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
    },
  },
  plugins: [
    fluid
  ],
};
export default config;
