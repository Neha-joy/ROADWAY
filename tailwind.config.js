/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        roadwayRed: "#ef0707",
        roadwayBlack: "#000000",
        roadwayWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};