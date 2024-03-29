<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()

const title = params.subtitle
  ? params.title.replace(
      '%s',
      `<span class="featured">${params.subtitle}</span>`
    )
  : params.title

const video = ref(null)
const { playing, waiting, muted } = useMediaControls(video)

if (params.video) {
  useIntersectionObserver(
    video,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        video.value.play()
      } else {
        video.value.pause()
        video.value.currentTime = 0
      }
    },
    {
      threshold: 0.7,
    }
  )
}

const toggleMute = () => {
  muted.value = !muted.value
}
</script>
<script lang="ts">
export default {
  name: 'SliceHeader',
}
</script>
<template>
  <header class="header-slice" :class="params.size ? params.size : ''">
    <div class="title-container" :class="{ overlay: params.titleOverlay }">
      <h1 class="title" v-html="title"></h1>
    </div>
    <div
      v-if="params.titleOverlay || params.image"
      class="image"
      :class="{ playing }"
    >
      <div class="inner">
        <app-image
          v-if="params.image && !params.video"
          :data="params.image"
          class="top-image w-full"
        ></app-image>
        <app-video
          v-else-if="params.video"
          :video="params.video"
          :play-on-intersect="true"
          :muted="true"
          :show-controls="!params.titleOverlay"
          :loop="params.titleOverlay"
          class="video"
        ></app-video>
        <PuSkeleton v-else height="100%"></PuSkeleton>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.header-slice {
  @apply relative;

  .title-container {
    &:not(.overlay) {
      @apply margins-x container text-center;
      .title {
        @apply mb-5 sm:mb-10;
      }
    }
    &.overlay {
      @apply absolute bg-main-dark/50 inset-0 flex items-center justify-center z-10 text-white;
      @apply text-center p-8;

      .title {
        @apply mb-0 leading-tight;
      }
    }
  }

  .top-image {
    @apply h-auto;
  }

  &.large {
    .top-image {
      @apply h-full;
    }
    .image {
      @apply aspect-w-8 aspect-h-11 sm:aspect-w-9 sm:aspect-h-5;
    }
  }

  &.desktop {
    .top-image {
      @apply h-full;
    }
    .image {
      @apply aspect-w-9 aspect-h-5;
    }
  }

  .top-image {
    @apply h-44 sm:h-96 w-full relative;
    @apply transition duration-500;
    img {
      @apply absolute w-full h-full object-cover;
    }
  }

  .video {
    @apply absolute top-0 left-0 w-full h-full;
    @apply transition duration-500;

    video {
      @apply object-cover w-full h-full;
    }
  }

  .image {
    @apply relative;

    &.playing {
      .mute-button {
        @apply opacity-100;
      }

      .top-image {
        @apply opacity-0;
      }

      .video {
        @apply opacity-100;
      }
    }
  }

  .mute-button {
    @apply absolute z-20 m-2 right-0 bottom-0 w-8 h-8 flex items-center justify-center rounded-full;
    @apply bg-main-dark/70 backdrop-blur-sm backdrop-saturate-200 text-white;
    @apply transition duration-300;
    @apply opacity-0;
  }
}
</style>
