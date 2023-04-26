const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,tsx}', './components/**/*.{js,jsx,tsx}'],
  darkMode: 'class',
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', ...fontFamily.mono]
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
        },
      },
    ],
  },
};
