<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<template>
  <header class="text-center container margins">
    <h1 class="title">
      {{ params.title }} <br />
      <span class="featured">{{ params.subtitle }}</span>
    </h1>
    <app-image :data="params.image"></app-image>
  </header>
</template>
