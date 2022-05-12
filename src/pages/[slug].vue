<script setup lang="ts">
import { gsap } from 'gsap'
import { createError } from 'h3'
import { useI18n } from 'vue-i18n'
import { useI18nStore } from '../stores/i18n'
import type { Page, Post } from '../plugins/content/types'

definePageMeta({
  pageTransition: {
    mode: 'in-out',
    appear: true,
    css: false,
    /*     onLeave(el, done) {
      const mainContent = document.querySelector('main')
      const mainScroll = mainContent ? mainContent.scrollTop : 0
      gsap
        .fromTo(
          el,
          {
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 10,
          },
          {
            duration: 1.2,
            y: window.innerHeight + mainScroll,
          }
        )
        .then(() => done())
    },
    onEnter(el, done) {
      const mainContent = document.querySelector('main')
      const mainScroll = mainContent ? mainContent.scrollTop : 0
      gsap
        .fromTo(
          el,
          {
            y: window.innerHeight + mainScroll,
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 10,
          },
          {
            duration: 1.2,
            y: mainScroll,
          }
        )
        .then(() => {
          done()
        })
    }, */
  },
})

const route = useRoute()
const { $content } = useNuxtApp()
const { locale } = useI18n()

const { slug } = route.params
const { data, error } = await useAsyncData<Post | Page>(
  `${slug}_${locale.value}`,
  () => $content.path().slug(slug.toString()).param('lang', locale.value).get()
)

if (error.value) {
  const errorCaptured = error.value as any
  throwError(
    createError({
      statusCode: errorCaptured.status,
      message: JSON.parse(errorCaptured.response.text).message,
    })
  )
}

const i18nStore = useI18nStore()

i18nStore.setRouteParams(data.value.translation)
</script>
<template>
  <component :is="`single-${data.type}`" v-if="data" :data="data"></component>
</template>
