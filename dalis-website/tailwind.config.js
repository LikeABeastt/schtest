/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',   // Deep Navy
        accent: '#D4AF37',    // Gold
      },
    },
  },
  plugins: [],
}