/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customshadow: "1px 1px 10px black",
        btnshadow: "3px 3px 0 0 #42271E",
      },
      colors: {
        mainColor: '#5F7C60',
        navColor: '#669167',
        textColor: '#E5E5E5',
        btnColor: '#669167',
        btnHover: '#4b6f4f'
      }
    },
  },
  plugins: [],
}