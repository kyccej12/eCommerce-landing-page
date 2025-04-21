/** @type {import('@tailwindcss/vite').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.10s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        },
        fontFamily: {
          sans: ['Jost', 'sans-serif'],
        },

      },
    },
  }