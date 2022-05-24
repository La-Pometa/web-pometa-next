<script setup lang="ts">
import type { Post } from '../plugins/content/types'

defineProps<{
  data: Post
}>()
</script>
<template>
  <div id="single-landing">
    <slice-header
      :params="{
        title: data.title.rendered,
        image: data.featured_source,
        size: 'large',
        titleOverlay: true,
      }"
    ></slice-header>
    <section class="content" v-html="data.content.rendered"></section>
  </div>
</template>
<style lang="scss">
.content {
  @apply container margins-header;
}
</style>
