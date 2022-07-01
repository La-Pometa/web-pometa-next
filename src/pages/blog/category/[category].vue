<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import IconBack from '~icons/ion/arrow-back-sharp'

const localePath = useLocalePath()

definePageMeta({
  pageTransition: {
    mode: 'in-out',
    appear: true,
    css: false,
  },
})

const { params } = useRoute()
</script>
<template>
  <div id="blog" class="container max-w-screen-xl margins">
    <header class="header text-center">
      <nuxt-link :to="localePath('/blog')" class="go-back"
        ><icon-back></icon-back> {{ $t('blog.back') }}
      </nuxt-link>
    </header>
    <section id="archive-posts">
      <post-list :category="(params.category as string)" />
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
.go-back {
  @apply inline-flex justify-center items-center gap-4 hover:text-secondary;
}
.loader {
  @apply w-14 h-14 rounded-full border-4 border-gray-200 dark:border-gray-400 border-t-primary animate-spin;
}
</style>
