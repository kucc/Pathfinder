import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes["light"],
          primary: "#c3201f",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
