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
        title: data.embedded.postmeta.title
          ? data.embedded.postmeta.title
          : data.title.rendered,
        image: data.featured_source,
        size: 'large',
        titleOverlay: true,
      }"
    ></slice-header>
    <section class="sub-head">
      <h2
        v-if="$content.getMeta(data, 'title')"
        class="title-dearest"
        v-html="$content.getMeta(data, 'title')"
      ></h2>
    </section>
    <section v-if="$content.getMeta(data, 'slider')" class="slider">
      <slider-video-image
        :slides="$content.getMeta(data, 'slider')"
      ></slider-video-image>
    </section>
    <section class="content" v-html="data.content.rendered"></section>
  </div>
</template>
<style lang="scss">
.content {
  @apply container margins-header;
}
</style>
