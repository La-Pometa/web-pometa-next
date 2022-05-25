const defaultTheme = require('tailwindcss/defaultTheme')
const containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

module.exports = {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/blocks/**/*.{js,ts}',
  ],
  theme: {
    container: {
      screens: containerScreens,
    },
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
        light: {
          50: '#fdfdfd',
          100: '#fcfcfc',
          200: '#fafafa',
          300: '#f8f9fa',
          400: '#f6f6f6',
          500: '#f2f2f2',
          600: '#f1f3f5',
          700: '#e9ecef',
          800: '#dee2e6',
          900: '#dde1e3',
        },
        dark: {
          50: '#4a4a4a',
          100: '#3c3c3c',
          200: '#323232',
          300: '#2d2d2d',
          400: '#222222',
          500: '#1f1f1f',
          600: '#1c1c1e',
          700: '#1b1b1b',
          800: '#181818',
          900: '#0f0f0f',
        },
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
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
