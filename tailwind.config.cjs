/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['merriweather', 'serif'],
        inter: ['inter', 'serif']
      },
      colors: {
        timber: '#18332f',
      },
    },
  },
  plugins: [],
}

