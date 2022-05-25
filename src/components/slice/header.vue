<script setup lang="ts">
import IconVolume from '~icons/ion/md-volume-high'
import IconVolumeOff from '~icons/ion/md-volume-off'
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
    <div class="image" :class="{ playing }">
      <app-image :data="params.image" class="top-image w-full"></app-image>
      <div v-if="params.video" class="video">
        <video ref="video" :src="params.video" muted playsinline></video>
      </div>
      <div v-if="params.video" class="mute-button" @click.prevent="toggleMute">
        <IconVolume v-if="!muted" class="icon"></IconVolume>
        <IconVolumeOff v-else class="icon"></IconVolumeOff>
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
    }
    &.overlay {
      @apply absolute bg-main-dark/50 inset-0 flex items-center justify-center z-10 text-white;

      .title {
        @apply mb-0;
      }
    }
  }

  &.large {
    .top-image {
      @apply h-auto aspect-w-8 aspect-h-11 sm:aspect-w-9 sm:aspect-h-5;
    }
  }

  &.desktop {
    .top-image {
      @apply h-auto aspect-w-9 aspect-h-5;
    }
  }

  .top-image {
    @apply h-96 w-full relative;
    @apply transition duration-500;
    img {
      @apply absolute w-full h-full object-cover;
    }
  }

  .video {
    @apply absolute top-0 left-0 w-full h-full;
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
