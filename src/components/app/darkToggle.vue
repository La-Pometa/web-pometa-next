<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <div>Toggle</div>
  </button>
</template>
