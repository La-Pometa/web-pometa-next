<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocaleLocation, useLocalePath } from 'vue-i18n-routing'
import type { Post } from '../plugins/content/types'

defineProps<{
  data: Post
  index: number
}>()

const localePath = useLocalePath()

const { locale } = useI18n()

const formatDate = (date) => {
  const newDate = new Date(date)

  return newDate.toLocaleDateString(locale.value, {
    month: 'short',
    year: 'numeric',
  })
}
</script>
<template>
  <section id="single-post" class="layout margins">
    <nuxt-link :to="localePath('/blog')" class="go-back">
      {{ $t('blog.back') }}
    </nuxt-link>
    <div class="post-title">
      <img
        class="arrow"
        src="@/assets/img/single-post/arrow-to-left.svg"
        alt=""
      />
      <h1 v-html="data.title.rendered"></h1>
    </div>
    <div class="left">
      <div class="wrapper">
        <div class="avatar"></div>
        <app-button>¡Compárteme!</app-button>
      </div>
    </div>
    <article class="post-container space-y-10">
      <div class="single-post">
        <div class="top">
          <div class="header">
            <app-image
              :data="data.featured_source"
              :lazy="false"
              class="featured"
            ></app-image>
          </div>
          <div>
            <div class="sub-image">
              <span
                v-for="(tax, i) in data.tax_info"
                :key="tax.term_id"
                class="category"
                ><span v-if="i != 0">, </span>{{ tax.name }}</span
              >
              <span v-if="data.tax_info.length > 0"> | </span>
              <span class="date">{{ formatDate(data.date) }}</span>
            </div>
          </div>
        </div>
        <div class="post-content" v-html="data.content.rendered"></div>
      </div>
    </article>
  </section>
</template>
<style lang="scss">
#single-post {
  &.layout {
    @apply container sm:px-14;
    @apply grid xl:grid-cols-12 max-w-screen-lg gap-x-14 gap-y-6;
  }

  .go-back {
    @apply absolute left-0 top-1/2 -translate-y-1/2 z-50 uppercase p-4;
    @apply text-sm hover:text-primary cursor-pointer;
    @apply msm:hidden;

    writing-mode: vertical-lr;
    text-orientation: mixed;
  }

  .post-title {
    @apply xl:col-span-9 xl:col-start-4 text-center relative;

    h1 {
      @apply text-center text-3xl lg:text-5xl lg:leading-tight;
    }

    .arrow {
      @apply mxl:hidden absolute left-0 bottom-0 -translate-x-full translate-y-1/3 w-36;
    }
  }

  .left {
    @apply mxl:row-start-3 xl:col-span-3;
  }

  .post-container {
    @apply xl:col-span-9;
  }

  .sub-image {
    @apply py-3 text-main-dark/70 dark:text-white/70;

    .category {
      @apply font-semibold;
    }
  }

  .top {
    @apply relative;
  }

  .left {
    @apply flex flex-col;

    .wrapper {
      @apply sticky top-10 flex flex-col gap-5 sm:gap-10;

      @screen mxl {
        @apply max-w-[12rem];
      }

      .avatar {
        @apply aspect-w-1 aspect-h-1 rounded-full;
        @apply bg-light-500;
      }
    }
  }
}
.single-post {
  @apply space-y-5 msm:space-y-5;

  .header {
    @apply aspect-w-7 aspect-h-4;
    .responsive-image img {
      @apply w-full h-full object-cover;
    }
  }

  video,
  iframe {
    @apply w-full;
  }
}
</style>
