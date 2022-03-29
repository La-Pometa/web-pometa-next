import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
  },

  srcDir: 'src',

  css: ['~/styles/main.scss'],

  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  vueuse: {
    ssrHandlers: true,
  },
})
