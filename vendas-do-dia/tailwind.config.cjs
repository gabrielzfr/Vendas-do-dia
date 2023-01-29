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
        'mm': '375px',
        'sm': '590px',
        'md': '790px',
        'qq' : '1250px'
    }
    },
  },
  plugins: [],
}
