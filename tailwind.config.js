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
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=night]"],
          'primary-content': '#134074',
          'secondary': '#facc15',
        },
      },
    ],
  },
};
