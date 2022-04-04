<script setup lang="ts">
import { h } from 'vue'
import * as slices from '../slices'
import type { Slice } from './types/slice'

const props = defineProps<{ slices: Slice[] }>()

const render = () => {
  if (props.slices.length) {
    return h(
      'div',
      {
        class: 'slice-render',
      },
      props.slices.map((slice) => h(slices[slice.type]))
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
