const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    screens: {
      m2xl: { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      mxl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mlg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mmd: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      msm: { max: '639px' },
      ...defaultTheme.screens,
    },
    fontFamily: {
      sset: ['Sukhumvit Set', 'Arial'],
      butler: ['Butler', 'Helvetica', 'Arial'],
    },
    extend: {
      colors: {
        primary: '#bfd5c2',
        secondary: '#8d9d8f',
        'main-dark': '#3c3c3b',
      },
      height: {
        100: '32rem',
        110: '34rem',
        120: '36rem',
        screen2: 'calc(100vh - 60px)',
      },
      padding: {
        full: '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
