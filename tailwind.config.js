/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#237cfe',
        'secondary': {
          100: '#73a8ff',
          200: '#0f3672',
        },
        'topbar': '#f6f9fe',
      },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
});
