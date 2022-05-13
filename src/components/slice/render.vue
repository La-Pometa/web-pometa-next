<script setup lang="ts">
import type { Slice } from '~~/src/plugins/content/types/Page'

const { slices } = defineProps<{
  slices: Slice[]
}>()
</script>

<template>
  <div class="slices">
    <component
      :is="`slice-${slice.type}`"
      v-for="(slice, index) in slices"
      :key="index"
      :params="slice.params"
    ></component>
  </div>
</template>

<style lang="scss">
.the-content {
  @apply container mx-auto py-5 px-3;
}
.slices {
  @apply space-y-8 sm:space-y-16 margins-y;

  .the-content:first-child {
    @apply mt-8 sm:mt-16;
  }
}
</style>
