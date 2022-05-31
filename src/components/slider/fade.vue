<template>
  <div id="slider" ref="slider">
    <slot />
  </div>
</template>
<script>
export default defineComponent({
  data() {
    return { interval: null }
  },
  mounted() {
    this.addInterval()
  },
  beforeUnmount() {
    this.clearInterval()
  },
  methods: {
    clearInterval() {
      clearInterval(this.interval)
    },
    addInterval() {
      document
        .querySelectorAll('#slider > div:not(:last-child)')
        .forEach((el) => {
          el.classList.add('not-in')
        })
      this.interval = setInterval(() => {
        const actual = document.querySelector('#slider > div:last-child')
        const next = actual.previousElementSibling
        next.classList.remove('not-in')
        actual.classList.add('not-in')
        setTimeout(() => {
          actual.parentElement.prepend(actual)
        }, 1000)
      }, 6000)
    },
  },
})
</script>
<style lang="scss">
#slider {
  @apply relative w-full h-full;

  & > div {
    @apply placeholder-opacity-100;
    transition: all 0.8s;
  }
  .slide {
    @apply absolute inset-0 w-full h-full;

    &.not-in {
      @apply opacity-0 pointer-events-none;
    }
  }
}
</style>
