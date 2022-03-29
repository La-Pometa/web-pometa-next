<script setup lang="ts">
import type { slice } from './types/slice'
const { slices } = defineProps<{ slices: slice[] }>()

const render = () => {
  if (slices) {
    return h(
      'div',
      {
        attrs: { class: 'components' },
      },
      slices.map((slice) =>
        h(`slice-${slice.type}`, {
          props: { params: slice.params },
        })
      )
    )
  }
}
</script>

<template>
  <render />
</template>

<style lang="scss">
.the-content {
  @apply container mx-auto py-5 px-3;
}
.components {
  @apply space-y-8 sm:space-y-16;

  .the-content:first-child {
    @apply mt-8 sm:mt-16;
  }
}
</style>
