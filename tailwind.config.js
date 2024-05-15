/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#5F7C60',
        navColor: '#669167',
        linkColor: '#669167',
        textColor: '#E5E5E5'
      }
    },
  },
  plugins: [],
}