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
  <div id="blog" class="container max-w-screen-xl margins">
    <header class="header text-center">
      <h1 class="title">{{ $t('blog.title') }} <br /></h1>
      <h2 class="subtitle">{{ $t('blog.subtitle') }}</h2>
    </header>
    <section id="archive-posts">
      <post-list />
    </section>
  </div>
</template>
<style lang="scss" scoped>
#blog {
  @apply space-y-10 sm:space-y-14;
}
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
