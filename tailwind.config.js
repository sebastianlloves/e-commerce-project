/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./Clases/index.html",
    "./Clases/src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        navbar: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        azure: {
          50: "#f2f6fc",
          100: "#e2ecf7",
          200: "#ccdef1",
          300: "#aac9e6",
          400: "#81acd9",
          500: "#6391ce",
          600: "#4f79c1",
          700: "#4262a9",
          800: "#3d5490",
          900: "#354873",
          950: "#242e47",
        },
      },
    },
  },
  plugins: [],
};
