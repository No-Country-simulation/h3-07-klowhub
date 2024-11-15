import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primario100: "#dfd1f3",
        primario200: "#bfa3e7",
        primario300: "#9f74dc",
        primario400: "#9f74dc",
        primario500: "#632daf",
        primario600: "#532692",
        primario700: "#421e75",
        primario800: "#321758",
        primario900: "#210f3a",
        secundario100: "#c0d6fb",
        secundario200: "#a1c2fa",
        secundario300: "#81aef8",
        secundario400: "#6299f6",
        secundario500: "#4285f4",
        secundario600: "#0E61EA",
        secundario700: "#0a49b0",
        secundario800: "#073075",
        secundario900: "#03183B",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
