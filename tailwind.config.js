/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'leaf': '#7EAD6A',
        'clay': '#BCD188',
        'mist': '#DEE6DF',
        'serene': '#8EBDC3',
        'pollen': '#E6DC6B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
