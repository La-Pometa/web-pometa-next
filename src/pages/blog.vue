<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import { useI18n } from 'vue-i18n'
import type { ArchiveResponse, Post } from '@/plugins/content/types'

const localePath = useLocalePath()

const { $content } = useNuxtApp()

const { locale } = useI18n()

const page = ref(1)

const {
  data: postsArchive,
  refresh,
  pending,
} = useAsyncData<ArchiveResponse<Post>>(
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
    lazy: true,
  }
)

const pagination = ref<HTMLElement>(null)

const posts = ref<Post[]>(postsArchive.value ? postsArchive.value.data : [])

watch(postsArchive, (postsArchive) => {
  posts.value = [...posts.value, ...postsArchive.data]
})

const loadMore = () => {
  if (postsArchive.value._paging.totalPages > page.value && !pending.value) {
    page.value++
    refresh()
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
    </div>
    <div :class="{ 'opacity-0': !pending }">
      <div id="pagination" ref="pagination">
        <div id="loadMore" class="loader"></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.layout {
  @apply grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10;
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
