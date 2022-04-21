const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/blocks/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
      dearest: ['Dearest'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#bfd5c2',
          gray: '#F8F8F8',
        },
        secondary: '#8d9d8f',
        'main-dark': '#3c3c3b',
      },
      height: {
        100: '32rem',
        110: '34rem',
        120: '36rem',
        screen2: 'calc(100vh - 60px)',
      },
      width: {
        screen2: 'calc(100vw - 312px)',
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
