<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<template>
  <section class="common the-content">
    <div class="inner-content" v-html="params.html"></div>
  </section>
</template>
<style lang="scss">
.the-content {
  .inner-content {
    @apply prose dark:prose-invert max-w-none prose-strong:text-main-dark prose-p:text-main-dark dark:prose-strong:text-white dark:prose-p:text-white;
  }
  br {
    @apply msm:hidden;
  }
}
</style>
