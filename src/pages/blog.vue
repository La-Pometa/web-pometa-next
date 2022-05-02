<script setup lang="ts">
// import { gsap } from 'gsap'
import { useLocalePath } from 'vue-i18n-routing'
import { useI18n } from 'vue-i18n'
import type { ArchiveResponse, Post } from '@/plugins/content/types'

/* definePageMeta({
  pageTransition: {
    mode: 'in-out',
    appear: true,
    css: false,
    onLeave(el, done) {
      gsap
        .fromTo(
          el,
          {
            position: 'absolute',
            left: 0,
            right: 0,
          },
          {
            duration: 1.2,
          }
        )
        .then(() => done())
    },
  },
}) */

const localePath = useLocalePath()

const { $content } = useNuxtApp()

const { locale } = useI18n()

const page = ref(1)

const { data: postsArchive, pending } = await useAsyncData<
  ArchiveResponse<Post>
>(
  `posts_${locale.value}`,
  () =>
    $content
      .posts()
      .perPage(9)
      .page(page.value)
      .param('lang', locale.value)
      .orderby('date')
      .get(),
  {
    initialCache: false,
    watch: [page],
  }
)

const pagination = ref<HTMLElement>(null)

const posts = ref<Post[]>(postsArchive.value ? postsArchive.value.data : [])

watch(postsArchive, (postsArchive) => {
  posts.value = [...posts.value, ...postsArchive.data]
})

const morePosts = computed(() => {
  if (!postsArchive.value) return false
  return posts.value.length < postsArchive.value._paging.total
})

const loadMore = () => {
  if (morePosts.value && !pending.value) {
    page.value++
  }
}

useIntersectionObserver(pagination, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    loadMore()
  }
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
    <div v-if="posts.length > 0">
      <div class="layout">
        <nuxt-link
          v-for="(item, index) in posts"
          :key="item.id"
          :to="localePath(`/${item.slug}`)"
          class="hover:text-main-dark dark:hover:text-white no-highlight"
          :title="item.title.rendered"
        >
          <post-card :post="item" :index="index"></post-card>
        </nuxt-link>
      </div>
      <div v-if="morePosts" ref="pagination" class="layout loadmore">
        <post-card v-for="index in 3" :key="index"></post-card>
      </div>
    </div>
    <div v-else>
      <div class="layout">
        <post-card v-for="index in 9" :key="index"></post-card>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.layout {
  @apply grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10;

  &.loadmore {
    @apply mt-10;
  }
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
