import type { Config } from "tailwindcss";
import fluid, { extract } from 'fluid-tailwind'

export default {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  theme: {
    screens: {
      "2xs": "23.4375rem", /* 375px */
      xs: "30rem", /* 480px */
      sm: "37.5rem", /* 600px */
      md: "48rem", /* 768px */
      lg: "64rem", /* 1024px */
      xl: "80rem", /* 1280px */
      "2xl": "87.5rem", /* 1400px */
      "3xl": "100rem", /* 1600px */
      "4xl": "118.75rem", /* 1900px */
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "sans-serif"],
      mono: ["var(--font-geist-mono)", "sans-serif"],
      primary: ["var(--font-chaney-reg)", "sans-serif"],
      wide: ["var(--font-chaney-wide)", "sans-serif"],
      ultraext: ["var(--font-chaney-reg-ultra-ext)", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    fluid
  ],
} satisfies Config;
