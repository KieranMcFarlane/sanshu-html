/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chain': ["'chainwhacks'", ...defaultTheme.fontFamily.sans],
        'aldrich': ["'aldrich-regular'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}