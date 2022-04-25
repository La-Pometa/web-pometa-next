<script setup lang="ts">
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import type { Swiper as SwiperClass } from 'swiper/types'
import { Autoplay, FreeMode } from 'swiper'

import 'swiper/css'

import 'swiper/css/free-mode'

defineProps<{
  links: { title: string; url: string }[]
}>()

const modules = [FreeMode, Autoplay]
</script>
<template>
  <Swiper
    :autoplay="{
      delay: 0,
    }"
    :slides-per-view="'auto'"
    :speed="7000"
    :loop="true"
    :modules="modules"
    class="swiper-infinite-links"
  >
    <SwiperSlide
      v-for="(link, index) of links"
      :key="index"
      class="slide-wrapper"
    >
      <nuxt-link :to="link.url" class="slide-link">
        {{ link.title }}
      </nuxt-link>
    </SwiperSlide>
  </Swiper>
</template>
<style lang="scss">
.swiper-infinite-links {
  @apply mix-blend-difference;

  .slide-wrapper {
    @apply w-auto;
  }
}
.swiper-infinite-links .swiper-wrapper {
  @apply ease-linear;
}
</style>
<style lang="scss" scoped>
.slide-link {
  @apply text-white font-butler text-xl sm:text-4xl py-8 px-4 block relative hover:text-primary;

  &::after {
    content: '';
    @apply absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-white;
  }
}
</style>
