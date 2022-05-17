<script setup lang="ts">
import type { Post } from '@/plugins/content/types'

const { project } = defineProps<{
  project?: Post
}>()

const haveVideo = project && project.embedded.postmeta.video

const getTitle = (post: Post) => {
  return post.embedded.postmeta.title.replace(
    '%s',
    post.embedded.postmeta.titleFeatured
  )
}

const video = ref(null)

const { playing, waiting } = useMediaControls(video)

const play = () => {
  if (video.value) {
    video.value.play()
  }
}
const pauseAndReset = () => {
  if (video.value) {
    video.value.pause()
    video.value.currentTime = 0
  }
}
</script>
<template>
  <nuxt-link
    v-if="project"
    ref="card"
    class="project-card"
    :class="{ 'have-video': haveVideo, 'is-playing': playing && !waiting }"
    :to="project.slug"
    @mouseenter="haveVideo && play()"
    @mouseleave="haveVideo && pauseAndReset()"
  >
    <div v-if="project.featured_source" class="image">
      <app-image :data="project.featured_source"></app-image>
    </div>
    <div v-if="haveVideo" class="video">
      <video
        ref="video"
        :src="project.embedded.postmeta.video"
        muted
        loop
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

  &:hover {
    .overlay {
      @apply opacity-0;
    }

    &.have-video.is-playing {
      .video {
        @apply opacity-100;
      }
      .image {
        @apply opacity-0;
      }
    }
  }

  .image {
    @apply aspect-w-4 aspect-h-3;
    @apply transition duration-300;

    img {
      @apply w-full h-full object-cover;
    }
  }

  .video {
    @apply top-0 left-0 absolute w-full h-full opacity-0;
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
