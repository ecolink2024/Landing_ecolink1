/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'eco-forest': '#1e3a1e',
        'eco-green': '#4d9b4d',
        'eco-light-green': '#a3d1a3',
        'eco-pink': '#e15b97',
        'eco-beige': '#f5f2eb',
        'eco-text-dark': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
