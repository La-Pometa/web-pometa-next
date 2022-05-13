<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

defineProps<{
  date: string
}>()

const formatDate = (date) => {
  const newDate = new Date(date)

  return newDate.toLocaleDateString(locale.value, {
    month: 'short',
    year: 'numeric',
  })
}
</script>
<template>
  <span class="date">{{ formatDate(date) }}</span>
</template>
