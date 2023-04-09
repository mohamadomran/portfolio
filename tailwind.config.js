/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,tsx}', './components/**/*.{js,jsx,tsx}'],
  darkMode: 'class',
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  daisyui: {
    themes: ['night'],
  },
};
