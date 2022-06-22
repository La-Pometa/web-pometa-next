<script setup lang="ts">
import type { ShareOptions } from '@vueuse/core'

const { options } = defineProps<{
  options: ShareOptions
}>()

const { isSupported, share } = useShare()
</script>
<template>
  <app-button v-if="isSupported" @click="share(options)">{{
    $t('post.share')
  }}</app-button>
</template>
