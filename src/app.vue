<script setup lang="ts">
import { useLocaleHead } from 'vue-i18n-routing'

const { $PGRedirectCheck } = useNuxtApp()
$PGRedirectCheck()

const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() =>
  reactive({
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang,
    },
    link: i18nHead.value.link,
    meta: i18nHead.value.meta,
  })
)
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
