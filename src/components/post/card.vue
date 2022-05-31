<script setup lang="ts">
import type { Post } from '@/plugins/content/types'
defineProps<{
  post?: Post
  index?: number
}>()
</script>
<template>
  <div v-if="post" class="blog-card">
    <div v-if="post.featured_source" class="blog-card-img">
      <app-image :data="post?.featured_source"></app-image>
    </div>
    <div v-else class="blog-card-img"><PuSkeleton height="100%" /></div>
    <div>
      <h2 class="blog-card-title" v-html="post.title.rendered"></h2>
    </div>
    <div class="blog-card-excerpt">
      <p v-if="post.excerpt" v-html="post.excerpt.rendered"></p>
    </div>
    <div class="read-more">{{ $t('blog.post.readmore') }}</div>
  </div>
  <div v-else class="blog-card">
    <div class="blog-card-img"><PuSkeleton height="100%" /></div>
    <div>
      <h2 class="blog-card-title"><PuSkeleton /></h2>
    </div>
    <p class="blog-card-excerpt"><PuSkeleton :count="3" /></p>
  </div>
</template>
<style lang="scss">
.blog-card {
  @apply gap-5 h-full flex flex-col;

  .blog-card-img {
    @apply aspect-w-1 aspect-h-1 relative;

    img {
      @apply object-cover w-full h-full;
    }
  }

  h2 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .blog-card-title {
    @apply font-butler font-bold leading-tight text-2xl px-7 text-center;
  }

  .date {
    @apply text-gray-400 font-thin;
  }

  .blog-card-excerpt {
    @apply pb-5 text-center;

    p,
    p div {
      @apply leading-normal line-clamp-3;
    }
  }
  .read-more {
    @apply font-butler cursor-pointer underline text-secondary hover:text-white dark:hover:text-main-dark bg-transparent hover:bg-secondary transition-all px-2 py-1 inline-block mx-auto;
  }
}
</style>
