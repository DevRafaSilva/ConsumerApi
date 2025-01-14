/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        contract: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        contract: 'contract 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
