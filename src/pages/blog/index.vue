<script setup lang="ts">
definePageMeta({
  pageTransition: {
    mode: 'in-out',
    appear: true,
    css: false,
  },
})
</script>
<template>
  <section
    id="archive-blog"
    class="container max-w-screen-xl margins msm:mt-14 space-y-10"
  >
    <div class="header text-center">
      <h1>{{ $t('blog.title') }}</h1>
      <h2 class="subtitle">{{ $t('blog.subtitle') }}</h2>
    </div>
    <post-list />
  </section>
</template>
<style lang="scss" scoped>
#pagination {
  @apply h-14 flex justify-center items-center;

  &.hide {
    @apply hidden;
  }
}
.loader {
  @apply w-14 h-14 rounded-full border-4 border-gray-200 dark:border-gray-400 border-t-primary animate-spin;
}
</style>
