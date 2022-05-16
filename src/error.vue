<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'

const { error } = defineProps({
  error: Object,
})

useHead({
  title: error.message,
})

const localePath = useLocalePath()

const clear = () => {
  clearError({
    redirect: localePath('/'),
  })
}
</script>
<template>
  <div class="wrapper">
    <h1>{{ error.statusCode }}</h1>
    <h3 class="subtitle text-center" v-html="error.message"></h3>
    <app-button @click="clear">{{ $t('error.return') }}</app-button>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply flex flex-col h-screen items-center justify-center p-4;
}
</style>
