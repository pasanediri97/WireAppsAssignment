/** @type {import('tailwindcss').Config} */
const {platformSelect} = require('nativewind');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
