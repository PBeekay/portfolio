import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Point Tailwind's color names to your CSS variables
      colors: {
        background: 'var(--color-bg)',
        'background-secondary': 'var(--color-bg-secondary)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};
export default config;