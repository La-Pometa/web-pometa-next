<template>
  <div class="layout-default">
    <app-sidebar></app-sidebar>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.layout-default {
  @apply flex;

  main {
    @apply flex-1;
  }
}
</style>
