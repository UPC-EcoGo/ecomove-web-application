/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'card-text': '#ACD5E6',
        'background-blue': '#E6F4FB'
      },
      fontFamily:{
        'kumbh-sans': 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}