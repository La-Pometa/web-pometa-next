import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
    link: [
      {
        rel: 'icon', type: 'image/png', href: '/nuxt.png',
      },
    ],
  },
  srcDir: 'src',
  buildModules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
})
