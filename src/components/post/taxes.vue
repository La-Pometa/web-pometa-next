<script setup lang="ts">
import type { Tax } from '~~/src/plugins/content/types/Post'
const { taxes } = defineProps<{
  taxes: Tax[]
}>()

const string = taxes.map((tax) => tax.name).join(', ')
</script>
<template>
  <span v-html="string"></span>
</template>
