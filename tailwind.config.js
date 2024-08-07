/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Graphik: ["Graphik", "sans-serif"],
        GraphikBold: ["Graphik-bold", "sans-serif"],
      },
      colors: {
        primary: "#2091F9",
        text: "#252B42",
        secondaryText: "#374754",
        darkBackground: "#252B42",
      },
    },
  },
  plugins: [],
};
