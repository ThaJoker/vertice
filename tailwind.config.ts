import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vertice: {
          dark: "#002B5C",
          blue: "#0077CC",
          light: "#E6F0FA",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;