import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  fontFamily: {
    body: ['"Manrope"', "sans-serif"],
  },
  extend: {},
  colors: {
    first: "#D87D4A",
    secound: "#F1F1F1",
    third: "#000000",
    hover: "#FBAF85",
  },
  plugins: [daisyui],
};