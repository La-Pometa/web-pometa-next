<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Component } from '@nuxt/schema'
import type { Post } from '@/plugins/content/types'
import IconVolume from '~icons/ion/md-volume-high'
import IconVolumeOff from '~icons/ion/md-volume-off'

const { project } = defineProps<{
  project?: Post
  otherCards?: Component[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

const haveVideo = project && project.embedded.postmeta.video

const haveVerticalVideo = project && project.embedded.postmeta.videoVertical

const getTitle = (post: Post) => {
  return post.embedded.postmeta.title.replace(
    '%s',
    post.embedded.postmeta.titleFeatured
  )
}
</script>
<template>
  <nuxt-link
    v-if="project"
    ref="card"
    class="project-card"
    :class="{ 'have-video': haveVideo }"
    :to="project.slug"
  >
    <div class="inner">
      <div v-if="!haveVideo">
        <app-image
          v-if="project.featured_source"
          class="image msm:hidden"
          :data="project.featured_source"
        ></app-image>
        <app-image
          v-if="project.embedded.postmeta.imageVertical"
          class="image sm:hidden"
          :data="project.embedded.postmeta.imageVertical"
        ></app-image>
      </div>
      <div v-else>
        <app-video
          v-if="haveVideo"
          :video="project.embedded.postmeta.video"
          :show-controls="false"
          :loop="true"
          :play-on-hover="true"
          :muted="true"
          class="video msm:hidden"
        ></app-video>
        <app-video
          v-if="haveVerticalVideo"
          :video="project.embedded.postmeta.videoVertical"
          :show-controls="false"
          :loop="true"
          :play-on-intersect="true"
          :muted="true"
          class="video sm:hidden"
        ></app-video>
      </div>
      <div class="overlay">
        <h3 v-html="getTitle(project)"></h3>
      </div>
    </div>
  </nuxt-link>
  <div v-else class="project-card">
    <div class="inner">
      <PuSkeleton height="100%" />
    </div>
  </div>
</template>
<style lang="scss">
.project-card {
  @apply relative;

  @screen sm {
    &:hover {
      .overlay {
        @apply opacity-0;
      }

      .mute-button {
        @apply opacity-100;
      }

      &.have-video {
        .video {
          @apply opacity-100;
        }
        .image {
          @apply opacity-0;
        }
      }
    }
  }

  .inner {
    @apply aspect-w-8 aspect-h-11 sm:aspect-w-4 sm:aspect-h-3;
    @apply transition duration-300;
  }

  .image {
    @apply w-full h-full object-cover;
  }

  .video {
    @apply w-full h-full;
  }

  .overlay {
    @apply absolute inset-0 bg-main-dark/70 flex items-center justify-center p-5 pointer-events-none;
    @apply transition duration-300;

    h3 {
      @apply text-white text-2xl font-bold font-butler text-center;

      br {
        @apply hidden;
      }
    }
  }
}
</style>
