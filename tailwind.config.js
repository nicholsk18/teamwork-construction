/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        siteGreen: {
          500: '#45A16D',
        },
        siteBrown: {
          500: '#4E2B40',
        },
      },
    },
  },
  plugins: [],
}

