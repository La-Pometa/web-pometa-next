<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import type { Post } from '../plugins/content/types'

const { data } = defineProps<{
  data: Post
}>()
</script>
<template>
  <div id="single-project">
    <slice-header
      :params="{
        title: data.embedded.postmeta.title,
        subtitle: data.embedded.postmeta.titleFeatured,
        image: data.featured_source,
        size: 'large',
      }"
    ></slice-header>
  </div>
</template>
<style lang="scss">
#single-project {
  @apply margins-y;
}
</style>
