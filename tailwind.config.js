/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-primary": "rgb(231, 254, 41)",
        "color-primary": "rgb(19, 19, 19)",
        "color-secondary": "rgb(19, 19, 19, 0.6)",
        "color-finely": "rgb(19, 19, 19, 0.7)",
      },
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};