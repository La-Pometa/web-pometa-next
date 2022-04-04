import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
  },

  srcDir: 'src',

  css: ['~/styles/main.scss'],

  modules: [
    '@nuxtjs/i18n',
  ],

  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  i18n: {
    baseUrl: process.env.BASE_URL || 'http://new.lapometa.com',
    langDir: 'locales',
    locales: [
      { code: 'es', iso: 'es-ES', file: 'es.json', dir: 'ltr' },
      { code: 'ca', iso: 'ca', file: 'ca.json', dir: 'ltr' },
    ],
    defaultLocale: 'es',
    pages: {
      proyectos: {
        ca: '/projectes',
      },
      contacto: {
        ca: '/contacte',
      },
      'departamento-marketing-externo': {
        ca: '/departament-marqueting-extern',
      },
      'desayuna-con-manzanas': {
        ca: '/esmorza-amb-pomes',
      },
    },
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