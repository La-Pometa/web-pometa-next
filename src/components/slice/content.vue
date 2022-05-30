<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<template>
  <section class="common">
    <div class="inner" v-html="params.html"></div>
  </section>
</template>
<style lang="scss" scoped>
.inner {
  @apply prose dark:prose-invert max-w-none;
}
</style>
