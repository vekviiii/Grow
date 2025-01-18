/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'black': '4px 4px 4px rgba(0, 0, 0, 0.5)', // black shadow
      },
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
        glowingText: {
          '0%, 100%':{
            color: '#3E7B27'
          },
          '50%':{
            color: '#85A947'
          },
        },
      },
      animation: {
        raindrop: 'raindrop 2s ease-in-out infinite', // Use smooth easing
        glowingText: 'glowingText 4s ease-in-out alternate'
      },
    },
  },
  plugins: [],
}

