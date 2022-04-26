<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import { useI18n } from 'vue-i18n'
import type { ArchiveResponse, Post } from '@/plugins/content/types'

const localePath = useLocalePath()

const { $content } = useNuxtApp()

const { locale } = useI18n()

const { data: postsArchive } = await useAsyncData<ArchiveResponse<Post>>(
  `posts_${locale.value}`,
  () => $content.posts().perPage(9).param('lang', locale.value).get()
)
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
    <!--     <div v-show="posts.length > 0">
      <div
        id="pagination"
        ref="pagination"
        :class="!more ? 'hide' : !loadingMore ? 'opacity-0' : ''"
      >
        <div id="loadMore" class="loader"></div>
      </div>
    </div> -->
    <div v-if="postsArchive.data.length > 0">
      <client-only>
        <masonry-wall :items="postsArchive.data" :column-width="300" :gap="40">
          <template #default="{ item, index }">
            <nuxt-link
              :key="item.id"
              :to="localePath(`/${item.slug}`)"
              class="hover:text-main-dark dark:hover:text-white no-highlight"
              :title="item.title.rendered"
            >
              <post-card :post="item" :index="index"></post-card>
            </nuxt-link>
          </template>
        </masonry-wall>
        <template #placeholder>
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <nuxt-link
              v-for="(item, index) in postsArchive.data"
              :key="item.id"
              :to="localePath(`/${item.slug}`)"
              class="hover:text-main-dark dark:hover:text-white no-highlight"
              :title="item.title.rendered"
            >
              <post-card :post="item" :index="index"></post-card>
            </nuxt-link>
          </div>
        </template>
      </client-only>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.layout {
  @apply grid msm:grid-cols-1 mlg:grid-cols-2 grid-cols-3 gap-10;
}
#pagination {
  @apply h-14 flex justify-center;

  &.hide {
    @apply hidden;
  }
}
</style>
