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
        'text-spin': {
          '0%': { left: '0px' },
          '100%': { left: '100%' }
          // '0%, 100%': { left: '0px' },
          // '25%': { transform: 'translate(-51%,-50%)' },
          // '75%': { transform: 'translate(-49%,-50%)' }
        },
        'text-spin2': {
          '0%': { right: '100%' },
          '100%': { right: '0' }
          // '0%, 100%': { left: '0px' },
          // '25%': { transform: 'translate(-51%,-50%)' },
          // '75%': { transform: 'translate(-49%,-50%)' }
        }
      },

      colors: {
        primary: 'var(--color-primary)'
      }
    }
  },
  plugins: []
}
