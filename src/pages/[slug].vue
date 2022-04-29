<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Page, Post } from '../plugins/content/types'

const route = useRoute()
const { $content } = useNuxtApp()
const { locale } = useI18n()

const { slug } = route.params
const { data } = await useAsyncData<Post | Page>(
  `post_${slug}_${locale.value}`,
  () => $content.path().slug(slug.toString()).param('lang', locale.value).get()
)
</script>
<template>
  <component :is="`single-${data.type}`" :data="data"></component>
</template>
