/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'dark': '#1d232a'
    },
    extend: {
    }
  },
  plugins: [],
});

