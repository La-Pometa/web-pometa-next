<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import type { Post } from '../plugins/content/types'

const localePath = useLocalePath()

const { data } = defineProps<{
  data: Post
}>()
</script>
<template>
  <div id="single-project">
    <slice-header
      :params="{
        title: data.embedded.postmeta.title,
        subtitle: data.embedded.postmeta.titleFeatured,
        image: data.featured_source,
        size: 'large',
        video: data.embedded.postmeta.video,
      }"
    ></slice-header>
    <section class="main-content">
      <div class="top">
        <h1 class="title" v-html="data.title.rendered"></h1>
        <div class="taxes">
          <post-taxes class="taxes" :taxes="data.embedded.taxes"></post-taxes>
        </div>
      </div>
      <div class="layout">
        <div class="wrapper">
          <div class="left">
            <div class="the-content">
              <h2
                class="text-xl font-butler font-bold"
                v-html="data.embedded.postmeta.featuredText"
              ></h2>
              <p>
                <strong>Client: </strong>
                <span v-html="data.embedded.postmeta.client"></span><br />
                <strong class="services"
                  ><post-taxes
                    :taxes="data.embedded.postmeta.services"
                  ></post-taxes
                ></strong>
              </p>
            </div>
          </div>
          <div class="right">
            <div class="featured" v-html="data.content.rendered"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="slider">
      <slider-video-image
        :slides="data.embedded.postmeta.slider"
      ></slider-video-image>
    </section>
    <section class="related-posts">
      <h5 class="title-mini">{{ $t('project.related') }}</h5>
      <div class="layout">
        <nuxt-link
          v-for="(post, index) of data.embedded.postmeta.related"
          :key="index"
          :to="localePath(`/${post.slug}`)"
          class="post hover:text-main-dark dark:hover:text-white no-highlight"
          :title="post.title.rendered"
        >
          <post-card :key="index" :post="post"></post-card>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
#single-project {
  @apply margins-y space-y-8 sm:space-y-16;

  .main-content {
    @apply grid gap-3 relative;

    .top,
    .wrapper {
      @apply container max-w-screen-xl margins-x;
    }

    .top {
      .title {
        @apply text-4xl mb-0;
      }

      .taxes {
        @apply font-bold text-primary uppercase;
      }
    }

    .wrapper {
      @apply grid md:grid-cols-2 gap-4;
    }

    .layout {
      @apply relative;

      &::before {
        content: '';
        @apply mmd:hidden bg-primary absolute right-0 inset-y-0 w-1/2 -z-10;
      }

      .left {
        @apply grid gap-3;
      }
    }

    .right {
      .featured {
        @apply p-5 bg-primary text-white dark:text-main-dark;
      }
    }
  }

  .slider {
    @apply max-w-full overflow-hidden relative;
  }

  .related-posts {
    @apply container max-w-screen-xl margins-x;

    .layout {
      @apply grid gap-10 sm:gap-28 mx-auto;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

      @screen msm {
        @apply snap-mandatory snap-x overflow-x-auto gap-0;
        @apply flex -m-5 pb-3;

        &::-webkit-scrollbar {
          display: none;
        }

        .post {
          @apply snap-center;
          --slider-margin: 1.25rem;

          margin: 0 calc(var(--slider-margin) / 4);
          flex: 0 0 calc((100% - (var(--slider-margin) * 2)));

          &:first-child {
            margin-left: var(--slider-margin);
          }
        }

        &:after {
          content: '';
          @apply block pr-3;
        }
      }
    }
  }
}
</style>
