<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<template>
  <section class="slice-form" :class="params.type">
    <form-cf7><div v-html="params.form"></div></form-cf7>
  </section>
</template>
<style lang="scss">
.slice-form {
  @apply container margins-x max-w-screen-md;
}
</style>
