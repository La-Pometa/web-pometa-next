<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

const [isOpen, toggleOpen] = useToggle(false)
</script>
<template>
  <div class="layout-default">
    <layout-sidebar @toggled="toggleOpen($event)"></layout-sidebar>
    <main>
      <div class="overlay" :class="{ open: isMobile && isOpen }"></div>
      <NuxtPage />
    </main>
    <cookie-consent></cookie-consent>
  </div>
</template>
<style lang="scss" scoped>
.layout-default {
  @apply flex max-w-[100vw] overflow-x-hidden relative h-full;

  main {
    @apply flex-1 relative max-w-full overflow-x-hidden;
    @apply transition duration-500;

    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;

    .overlay {
      @apply absolute inset-0 w-full h-full bg-white/70 dark:bg-dark-900/70 z-50;
      @apply pointer-events-none opacity-0;
      @apply transition duration-500;

      &.open {
        @apply opacity-100 pointer-events-auto;
      }
    }
  }
}
</style>
