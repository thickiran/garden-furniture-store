/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#193425',
          50: '#f1f5f2',
          100: '#d9e5dd',
          200: '#b3ccbb',
          300: '#8db399',
          400: '#679a77',
          500: '#193425',
          600: '#162d20',
          700: '#13261b',
          800: '#101e16',
          900: '#0d1711'
        },
        secondary: {
          DEFAULT: '#D3B277',
          50: '#faf8f3',
          100: '#f2eadc',
          200: '#e6d6b9',
          300: '#d9c196',
          400: '#d3b277',
          500: '#c9a158',
          600: '#b8903a',
          700: '#a07d2b',
          800: '#88691c',
          900: '#70550d'
        },
        surface: '#FFFFFF',
        muted: '#F5F5F5',
        text: '#262626'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}