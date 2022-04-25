<template>
  <div class="layout-default">
    <layout-sidebar></layout-sidebar>
    <main>
      <NuxtPage />
    </main>
  </div>
  <cookie-consent></cookie-consent>
</template>
<style lang="scss" scoped>
.layout-default {
  @apply flex max-w-[100vw] overflow-x-hidden relative;

  main {
    @apply flex-1 relative max-w-full overflow-x-hidden;
    @apply transition duration-500;
  }
}
</style>
