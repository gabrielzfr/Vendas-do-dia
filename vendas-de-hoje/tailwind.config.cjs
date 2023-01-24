/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'blackBg': '#121214',
        'aquaBlue': '#81D8F7',
        'grayBg': '#202024',
        'grayPlaceholde3r': '#7C7C8A',

      },
      screens: {
        'qq' : '1250px'
    }
    },
  },
  plugins: [],
}
