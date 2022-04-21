<script setup lang="ts">
const props = defineProps<{
  selectors: { next: string; prev: string }
}>()

const slider = ref<HTMLElement>()

const { x, arrivedState } = useScroll(slider)

const { left, right } = toRefs(arrivedState)

const getSlideWidth = () => {
  const slide = slider.value.children[0]
  return slide.clientWidth
}

const moveSlide = (direction: 'next' | 'prev') => {
  const slideWidth = getSlideWidth()

  slider.value.scrollTo({
    left: direction === 'next' ? x.value + slideWidth : x.value - slideWidth,
    behavior: 'smooth',
  })
}

const nextSlide = () => {
  if (!right.value) {
    moveSlide('next')
  }
}

const prevSlide = () => {
  if (!left.value) {
    moveSlide('prev')
  }
}

const setupControls = () => {
  const next = document.querySelectorAll(props.selectors.next)
  const prev = document.querySelectorAll(props.selectors.prev)

  if (next) {
    next.forEach((el) => {
      el.addEventListener('click', nextSlide)
    })
  }

  if (prev) {
    prev.forEach((el) => {
      el.addEventListener('click', prevSlide)
    })
  }
}

onMounted(() => {
  setupControls()
})
</script>
<template>
  <div ref="slider" class="slider">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.slider {
  @apply flex overflow-x-auto scroll-smooth snap-x snap-mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
<style lang="scss">
.slider {
  .slide {
    @apply snap-start;

    flex: 0 0 100%;
  }
}
</style>
