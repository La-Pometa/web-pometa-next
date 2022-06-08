<script setup lang="ts">
import type { Page } from '../plugins/content/types'

const { data, margins = true } = defineProps<{
  data: Page
  margins?: boolean
}>()
</script>
<template>
  <slice-render
    :class="{ 'margins-y': margins }"
    :slices="data.slices"
  ></slice-render>
</template>
