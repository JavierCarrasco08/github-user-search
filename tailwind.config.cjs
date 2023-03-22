/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/*.{js,jsx}", "./src/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primaryBackgroundSun: "#f8f9fa",
        primaryBackgroundCard: "#edf2f4",
        reposSun: "#e63946",
        nameSun: "#1d3557",
        descriptionSun: "#1b263b",
        primaryBackgroundMoon: "#0d1b2a",
        primaryBackgroundCardMoon: "#1b263b",
        reposMoon: "#90e0ef",
        descriptionMoon: "#778da9",
        nameMoon: "#e0e1dd",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
