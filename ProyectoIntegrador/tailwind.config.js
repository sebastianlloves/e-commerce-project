/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#375971",

          secondary: "#cfb75b",

          accent: "#a5c580",

          neutral: "#2b3440",

          "base-100": "#f5f7f4",

          info: "#4d64a8",

          success: "#5c976c",

          warning: "#b1ad4f",

          error: "#b95f60",
        },
      },
    ],
  },
};
