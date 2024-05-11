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
      colors: {
        primary: 'var(--color-primary)'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/icons/HomeBackground.svg')"
      },
      keyframes: {
        'text-spin': {
          '0%': { left: '0px' },
          '100%': { left: '100%' }
        },
        'text-spin2': {
          '0%': { right: '100%' },
          '100%': { right: '0' }
        },
        popup: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
