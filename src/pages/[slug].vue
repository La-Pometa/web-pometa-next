<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Page, Post } from '../plugins/content/types'

const route = useRoute()
const { $content } = useNuxtApp()
const { locale } = useI18n()

const { slug } = route.params
const { data, error } = await useAsyncData<Post | Page>(
  `${slug}_${locale.value}`,
  () => $content.path().slug(slug.toString()).param('lang', locale.value).get()
)
if (error.value) {
  throwError(error.value as Error)
}
</script>
<template>
  <div class="wrapper">
    <component :is="`single-${data.type}`" :data="data"></component>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply bg-primary-gray dark:bg-dark-800;
}
</style>
