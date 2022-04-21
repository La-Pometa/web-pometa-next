<script setup lang="ts">
const slide = ref(null)
</script>
<template>
  <div ref="slide" class="slide">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.slide {
  @apply relative overflow-x-hidden;
}
</style>
