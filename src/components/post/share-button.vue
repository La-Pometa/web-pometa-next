<script setup lang="ts">
import type { ShareOptions } from '@vueuse/core'

const { options } = defineProps<{
  options: ShareOptions
}>()

const { isSupported, share } = useShare()
</script>
<template>
  <div>
    <app-button v-if="isSupported" class="w-full" @click="share(options)">{{
      $t('post.share')
    }}</app-button>
  </div>
</template>
