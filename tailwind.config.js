const colors = require('tailwindcss/colors');
const clamp = require('@tailwindcss/line-clamp');


module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,css,js}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [clamp],
}
