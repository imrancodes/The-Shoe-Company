/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media450':'450px',
        'media250':'250px',
        'media900':'900px'
      }
    },
  },
  plugins: [],
}

