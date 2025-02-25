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
        "light-purp": "#D8B1FC", // Replace with your desired color
        "dark-purp": "#7551DC",
        "light-yellow": "#F9EEE2",
        "dark-yellow": "#FFCC6A",
      },
    },
  },
  plugins: [],
} satisfies Config;
