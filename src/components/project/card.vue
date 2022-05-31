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

const getTitle = (post: Post) => {
  return post.embedded.postmeta.title.replace(
    '%s',
    post.embedded.postmeta.titleFeatured
  )
}

const video = ref<HTMLMediaElement>(null)
const card = ref<HTMLElement>(null)

const { playing, waiting, muted } = useMediaControls(video)

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
        class="msm:hidden"
        :data="project.featured_source"
      ></app-image>
      <app-image
        v-if="project.embedded.postmeta.imageVertical"
        class="sm:hidden"
        :data="project.embedded.postmeta.imageVertical"
      ></app-image>
    </div>
    <div v-if="haveVideo" class="video">
      <video
        ref="video"
        :src="
          !isMobile
            ? project.embedded.postmeta.video
            : project.embedded.postmeta.videoVertical
        "
        loop
        muted
        playsinline
      ></video>
    </div>
    <div v-if="haveVideo" class="mute-button" @click.prevent="muted = !muted">
      <IconVolume v-if="!muted" class="icon"></IconVolume>
      <IconVolumeOff v-else class="icon"></IconVolumeOff>
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

  .image {
    @apply aspect-w-8 aspect-h-11 sm:aspect-w-4 sm:aspect-h-3;
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

  .mute-button {
    @apply absolute z-10 m-2 right-0 bottom-0 w-8 h-8 flex items-center justify-center rounded-full;
    @apply bg-main-dark/70 backdrop-blur-sm backdrop-saturate-200 text-white;
    @apply transition duration-300;
    @apply opacity-0;
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
