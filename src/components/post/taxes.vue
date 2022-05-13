<script setup lang="ts">
import type { Tax } from '~~/src/plugins/content/types/Post'
defineProps<{
  taxes: Tax[]
}>()
</script>
<template>
  <span v-for="(tax, i) in taxes" :key="tax.term_id" class="category"
    ><span v-if="i != 0">, </span>{{ tax.name }}</span
  >
</template>
