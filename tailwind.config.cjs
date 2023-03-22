/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/*.{js,jsx}", "./src/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primaryBackgroundCard: "#f8f9fa",
        primaryBackgroundSun: "#f1faee",
        reposSun: "#e63946",
        nameSun: "#1d3557",
        descriptionSun: "#a8dadc",
        primaryBackgroundMoon: "#0d1b2a",
        primaryBackgroundCardMoon: "#1b263b",
        reposMoon: "#415a77",
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
