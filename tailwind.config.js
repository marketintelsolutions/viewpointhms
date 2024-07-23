/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#275e8f',
        primaryGreen: '#b2cc48'
      }
    },
  },
  plugins: [],
}

