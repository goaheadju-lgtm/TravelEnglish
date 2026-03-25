/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        darker: '#020617',
        accent: '#f59e0b',
        neon: '#2dd4bf',
        card: '#1e293b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(45, 212, 191, 0.3)',
      }
    },
  },
  plugins: [],
}