/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
colors:{
        'nav-blue': '#55889D',
        'page': '#E6F4FB',
        'content1': '#C9E5F1',
        'content2': '#ACD5E6'
      }
    },
  },
  plugins: [],
}
