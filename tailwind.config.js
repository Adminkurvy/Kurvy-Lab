
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A3D9A5',
        gold: '#D4AF37',
        softYellow: '#FFF9C4',
        softPeach: '#FFE0B2',
        lightPink: '#F8BBD0',
      },
    },
  },
  plugins: [],
}
