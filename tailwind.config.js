/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/icons/HomeBackground.svg')"
      },
      keyframes: {
        wiggle: {
          '0%, 50%, 100%': { transform: 'translate(-50%,-50%)' },
          '25%': { transform: 'translate(-51%,-50%)' },
          '75%': { transform: 'translate(-49%,-50%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 2s liner infinite'
      }
    }
  },
  plugins: []
}
