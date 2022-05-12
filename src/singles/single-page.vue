<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import type { Page } from '../plugins/content/types'

const { data } = defineProps<{
  data: Page
}>()
</script>
<template>
  <slice-render :slices="data.slices"></slice-render>
</template>
