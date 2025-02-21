/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/scripts/**/*.js', // Caminho corrigido para a pasta "scripts"
    './index.html', // Caminho direto para o arquivo HTML na raiz
  ],
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
