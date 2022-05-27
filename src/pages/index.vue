<script setup lang="ts">
import { createError } from 'h3'
import { useI18n } from 'vue-i18n'
import { useI18nStore } from '../stores/i18n'
import type { Page, Post } from '../plugins/content/types'

const { $content, $seo } = useNuxtApp()
const { locale } = useI18n()

const { data, error } = await useAsyncData<Post | Page>(
  `frontpage_${locale.value}`,
  () => $content.path().param('lang', locale.value).get()
)

if (error.value) {
  const errorCaptured = error.value as any
  throwError(
    createError({
      statusCode: errorCaptured.status,
      message: JSON.parse(errorCaptured.response.text).message,
    })
  )
}

const i18nStore = useI18nStore()

i18nStore.setRouteParams(data.value.translation)

useHead($seo.getHead(data.value as Post))
</script>
<template>
  <component :is="`single-${data.type}`" v-if="data" :data="data"></component>
</template>
