<template>
  <button :class="`size-${size} ${variant}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'md',
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<style lang="scss" scoped>
button {
  @apply transition-all duration-200 flex items-center justify-center gap-3;

  &.void {
    &-red {
      @apply text-red-500;
    }
  }

  &.size-md {
    @apply px-7 py-1.5;
  }

  &.size-lg {
    @apply px-6 py-2.5 font-semibold;
  }

  &.size-mobile-nav {
    @apply py-2.5 font-semibold px-2 text-left;
  }

  &.size-xl {
    @apply px-6 py-2.5 text-lg font-semibold;
  }

  &.size-2xl {
    @apply px-8 py-3.5 text-lg md:text-xl lg:text-3xl font-bold;
  }

  &.primary {
    @apply bg-primary text-main-dark hover:bg-gray-700 hover:text-primary;
  }

  &.secondary {
    @apply bg-secondary text-white hover:bg-secondary;
  }

  &.black {
    @apply bg-main-dark text-white hover:bg-secondary;
  }
}
</style>
