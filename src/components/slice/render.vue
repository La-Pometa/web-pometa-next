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
.slices {
  @apply space-y-8 sm:space-y-16;
}
</style>
