/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['iranYekan'],
    },
    colors: {
      transparent: 'transparent',
      surface: {
        100: '#020B1F',
        200: '#0C132C',
        300: '#182040',
        400: '#2F3756',
        500: '#7E848E',
        600: '#C4D4EC',
        700: '#DCE9FC',
        800: '#F3F8FC',
        900: '#FBFDFE'
      },
    },
  },
  plugins: [],
}