const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        top: '2px -1px 8px 2px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        green: "#37523B",
        mediumGreen: "#6D9C4E",
        plantGreen: "#D9E2D2",
        red: "#A03F3F",
        white: "#ffffff",
        water: "#2B6589",
        lightGrey: "#F4F4F3",
        darkGrey: "#AFAFAF",
      },
      screens: {
        'xs': '380px',
      },

    },
  },
  plugins: [],
};
