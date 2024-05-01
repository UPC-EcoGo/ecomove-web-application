/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'background-blue': '#E6F4FB',
        'background-reservation' : '#C9E5F1',
        'background-input': '#ACD5E6',
        'button-color':'#55889D'
      },
      fontFamily:{
        'kumbh-sans': 'Kumbh Sans'
      }
    },
  },
  plugins: [],
}