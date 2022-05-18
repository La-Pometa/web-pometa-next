<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Component } from '@nuxt/schema'
import type { Post } from '@/plugins/content/types'

const { project } = defineProps<{
  project?: Post
  otherCards?: Component[]
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

const haveVideo = project && project.embedded.postmeta.video

const getTitle = (post: Post) => {
  return post.embedded.postmeta.title.replace(
    '%s',
    post.embedded.postmeta.titleFeatured
  )
}

const video = ref<HTMLMediaElement>(null)
const card = ref<HTMLElement>(null)

const { playing, waiting } = useMediaControls(video)

const play = () => {
  if (video.value) {
    // Select all other videos of the page and pause them before playing if the parent card is before this one
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      video.pause()
      video.currentTime = 0
    })

    video.value.play()
  }
}
const pauseAndReset = () => {
  if (video.value) {
    video.value.pause()
    video.value.currentTime = 0
  }
}

onMounted(() => {
  if (haveVideo) {
    useIntersectionObserver(
      card,
      ([{ isIntersecting }], observerElement) => {
        // detect if the video is at the middle of the frame and play it
        if (isIntersecting && isMobile.value) {
          const videos = document.querySelectorAll('video')
          videos.forEach((video) => {
            video.pause()
            video.currentTime = 0
          })
          play()
        } else if (!isIntersecting) {
          pauseAndReset()
        }
      },
      { threshold: 0.8 }
    )
  }
})
</script>
<template>
  <nuxt-link
    v-if="project"
    ref="card"
    class="project-card"
    :class="{ 'have-video': haveVideo, 'is-playing': playing && !waiting }"
    :to="project.slug"
    @mouseenter="haveVideo && !isMobile && play()"
    @mouseleave="haveVideo && !isMobile && pauseAndReset()"
  >
    <div class="image">
      <app-image
        v-if="project.featured_source"
        :data="project.featured_source"
      ></app-image>
    </div>
    <div v-if="haveVideo" class="video">
      <video
        ref="video"
        :src="project.embedded.postmeta.video"
        muted
        loop
        playsinline
      ></video>
    </div>
    <div class="overlay">
      <h3 v-html="getTitle(project)"></h3>
    </div>
  </nuxt-link>
  <div v-else class="project-card">
    <div class="image">
      <PuSkeleton height="100%" />
    </div>
  </div>
</template>
<style lang="scss">
.project-card {
  @apply relative;

  &.is-playing {
    .overlay {
      @apply opacity-0;
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

  @screen sm {
    &:hover {
      .overlay {
        @apply opacity-0;
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

  .image {
    @apply aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3;
    @apply transition duration-300;

    img {
      @apply w-full h-full object-cover;
    }
  }

  .video {
    @apply top-0 left-0 absolute w-full h-full opacity-0 pointer-events-none;
    @apply transition duration-300;

    video {
      @apply w-full h-full object-cover;
    }
  }

  .overlay {
    @apply absolute inset-0 bg-main-dark/70 flex items-center justify-center p-5;
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
