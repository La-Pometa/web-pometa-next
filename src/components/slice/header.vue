<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<template>
  <header>
    <div class="margins-x container text-center">
      <h1 class="title">
        {{ params.title }} <br />
        <span class="featured">{{ params.subtitle }}</span>
      </h1>
    </div>
    <app-image :data="params.image" class="top-image w-full"></app-image>
  </header>
</template>
