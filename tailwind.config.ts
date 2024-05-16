import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        light: "#FFE6F1",
        DEFAULT: "#FF006E",
        dark: "#B3004D",
      },
      secondary: {
        light: "#EBF3FF",
        DEFAULT: "#3A86FF",
      },
      tertiary: {
        light: "#FFF9E7",
        DEFAULT: "#FFBE0B",
      },
      white: "#fff",
      black: "#000",
      gray: colors.zinc,
      red: colors.red,
      transparent: colors.transparent,
    },
    fontSize: {
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.25rem", // 36px
    },
    extend: {
      boxShadow: {
        inner: "0px 4px 0px #cc0058",
        complete:
          "0 0px 0px 0 rgb(161, 161, 171, 15%), inset 0 -6px 0 0 rgb(161, 161, 171, 10%)",
      },
      screens: {
        xs: "375px",
      },
      borderRadius: {
        large: "12px",
      },
      spacing: {
        13: "3.25rem",
      },
      animation: {
        pop: "pop .25s ease-out",
      },
      keyframes: {
        pop: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.01)" },
          "70%": { transform: "scale(1)" },
        },
      },
      maxWidth: {
        laptop: "90rem",
      },
    },
  },
};
export default config;
