import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 6s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-40px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'cyan-dark': {
          extend: 'dark',
          colors: {
            background: '#00101A',
            foreground: '#FFFFFF',
            primary: {
              50: '#09436C',
              100: '#0F5883',
              200: '#187FA2',
              300: '#2392C2',
              400: '#31B6E2',
              500: '#62DDED',
              600: '#82E8F6',
              700: '#ADF1FC',
              800: '#D5F2FD',
              900: '#ECF9FE',
              DEFAULT: '#62BCED',
              foreground: '#FFFFFF',
            },
            focus: '#82EAF6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
