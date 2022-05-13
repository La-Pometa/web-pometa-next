<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()

const title = params.title.replace(
  '%s',
  `<span class="featured">${params.subtitle}</span>`
)
</script>
<template>
  <header class="header-slice">
    <div class="margins-x container text-center">
      <h1 class="title" v-html="title"></h1>
    </div>
    <app-image :data="params.image" class="top-image w-full"></app-image>
  </header>
</template>
<style lang="scss">
.header-slice {
  .top-image {
    @apply h-96 w-full relative;
    img {
      @apply absolute w-full h-full object-cover;
    }
  }
}
</style>
