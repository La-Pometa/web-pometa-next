<script setup lang="ts">
import { gsap } from 'gsap'
import { useLocalePath } from 'vue-i18n-routing'
const localePath = useLocalePath()

const { links } = defineProps<{
  links: { title: string; link: string }[]
}>()

const slider = ref<HTMLElement>(null)
const wrapper = ref<HTMLElement>(null)

const tween: gsap.core.Tween[] = []

onMounted(() => {
  setTimeout(() => {
    const wrapperWidth = wrapper.value.clientWidth
    const sliderWidth = slider.value.clientWidth

    const nToClone = Math.ceil(sliderWidth / wrapperWidth) * 2

    const duration = links.length * 3

    const duplicates = Array.from({ length: nToClone }, () =>
      wrapper.value.cloneNode(true)
    )

    if (duplicates.length > 0) {
      duplicates.forEach((duplicate) => {
        slider.value.appendChild(duplicate)

        tween.push(
          gsap.to(duplicate, {
            duration,
            x: -wrapperWidth,
            ease: 'linear',
            repeat: -1,
            animationTimingFunction: 'linear',
          })
        )
      })
    }

    tween.push(
      gsap.to(wrapper.value, {
        duration,
        x: -wrapperWidth,
        ease: 'linear',
        repeat: -1,
        animationTimingFunction: 'linear',
      })
    )
  }, 500)
})

const pause = () => {
  tween.forEach((tween) => tween.pause())
}

const play = () => {
  tween.forEach((tween) => tween.play())
}
</script>
<template>
  <div
    ref="slider"
    class="infinite-links slider"
    @mouseenter="pause"
    @mouseleave="play"
  >
    <div ref="wrapper" class="wrapper">
      <div v-for="(link, index) of links" :key="index" class="link-wrapper">
        <nuxt-link :to="localePath(`/${link.link}`)" class="slide-link">
          <span v-html="link.title"></span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.infinite-links {
  @apply mix-blend-difference overflow-x-hidden flex;

  .link-wrapper {
    @apply w-auto;
  }
}
.swiper-infinite-links .swiper-wrapper {
  @apply ease-linear;
}
</style>
<style lang="scss" scoped>
.wrapper {
  @apply flex;
}
.slide-link {
  @apply text-white font-butler text-xl sm:text-4xl py-8 px-4 block relative hover:text-secondary whitespace-nowrap;

  &::after {
    content: '';
    @apply absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-1 rounded-full bg-white;
  }
}
</style>
