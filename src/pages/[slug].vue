<script setup lang="ts">
// import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import type { Page, Post } from '../plugins/content/types'

/* definePageMeta({
  pageTransition: {
    mode: 'in-out',
    appear: true,
    css: false,
    onLeave(el, done) {
      const mainScroll = document.querySelector('main').scrollTop
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
          mainContent.scrollTo({
            top: 0,
          })
          gsap.to(el, {
            duration: 0,
            y: 0,
          })
          done()
        })
    },
  },
}) */

const route = useRoute()
const { $content } = useNuxtApp()
const { locale } = useI18n()

const { slug } = route.params
const { data } = await useAsyncData<Post | Page>(
  `${slug}_${locale.value}`,
  () => $content.path().slug(slug.toString()).param('lang', locale.value).get()
)
</script>
<template>
  <div class="wrapper">
    <component :is="`single-${data.type}`" :data="data"></component>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply bg-primary-gray dark:bg-dark-800;
}
</style>
