/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#0284C7',
          'cyan-dark': '#0369A1',
          'cyan-light': '#38BDF8',
          amber: '#F59E0B',
          'amber-dark': '#D97706',
          'amber-light': '#FBBF24',
          emerald: '#10B981',
          slate: '#0F172A',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(2, 132, 199, 0.25)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
