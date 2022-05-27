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
  <div id="blog" class="container max-w-screen-xl margins space-y-10">
    <header class="header text-center">
      <h1 class="title mb-10">
        {{ $t('blog.title') }} <br />
        <span class="featured">{{ $t('blog.subtitle') }}</span>
      </h1>
    </header>
    <section id="archive-posts">
      <post-list />
    </section>
  </div>
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
