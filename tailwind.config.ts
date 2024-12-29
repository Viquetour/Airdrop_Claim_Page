import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        header:["Bebas Neue", "serif"],
        beta:["biryani", "serif"],
      }
    }
  },
  plugins: [],
} satisfies Config;
