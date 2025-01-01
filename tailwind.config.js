/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        raindrop: {
          '0%': {
            transform: 'translateY(0)', 
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(100px)', // Fall midway
            opacity: '0.5', // Fade to semi-transparent
          },
          '100%': {
            transform: 'translateY(200px)', // Fall completely
            opacity: '0', // Fully transparent
          },
        },
      },
      animation: {
        raindrop: 'raindrop 2s ease-in-out infinite', // Use smooth easing
      },
    },
  },
  plugins: [],
}

