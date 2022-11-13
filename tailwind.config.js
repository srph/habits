const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Author-Variable', ...defaultTheme.fontFamily.sans],
    },

    zIndex: {
      navigation: 900,
      'modal-backdrop': 1000,
      'modal-content': 1001,
      'timeline-circle': 1,
    },

    container: {
      center: true,
      padding: '2rem',
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '976px',
      '2xl': '976px',
    },

    extend: {},
  },
  plugins: [],
}
