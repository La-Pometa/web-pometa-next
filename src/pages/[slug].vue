<template>
  <div>{{ $route.params.slug }}</div>
</template>
<script setup lang="ts">
import { useI18nStore } from '../stores/i18n'

const i18nStore = useI18nStore()

i18nStore.setRouteParams({
  es: {
    slug: 'holas',
  },
  ca: {
    slug: 'adeu',
  },
})
</script>
