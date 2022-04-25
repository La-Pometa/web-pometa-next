import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'La Pometa Agencia',
    meta: [
      { name: 'theme-color', content: '#bfd5c2' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
    ]
  },

  experimental: {
    reactivityTransform: true,
    // viteNode: true,
  },

  loading: {
    color: '#bfd5c2',
    height: '2px',
  },

  srcDir: 'src',

  css: [
    '~/assets/styles/main.scss',
    '~/assets/fonts/butler/stylesheet.css',
    '~/assets/fonts/sset/stylesheet.css',
    '~/assets/fonts/dearest/stylesheet.css',
    '@wordpress/block-library/build-style/common.css',
    '@wordpress/block-library/build-style/theme.css',
    '@wordpress/block-library/build-style/style.css'
  ],

  modules: [
    '@nuxtjs/i18n',
  ],

  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  tailwindcss: {
    configPath: '~~/tailwind.config.js',
  },

  i18n: {
    baseUrl: process.env.BASE_URL || 'https://new.lapometa.com',
    langDir: 'locales',
    locales: [
      { code: 'es', name: 'Esp', iso: 'es-ES', file: 'es.json', dir: 'ltr' },
      { code: 'ca', name: 'Cat', iso: 'ca', file: 'ca.json', dir: 'ltr' },
    ],
    defaultLocale: 'es',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'es'
    }
  },

  vueuse: {
    ssrHandlers: true,
  },

  publicRuntimeConfig: {
    WP_URL: process.env.WP_URL
  },
})