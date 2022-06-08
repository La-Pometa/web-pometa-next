<script setup lang="ts">
import IconVolume from '~icons/ion/md-volume-high'
import IconVolumeOff from '~icons/ion/md-volume-off'
import IconVolumePlay from '~icons/ion/md-play'
import IconVolumePause from '~icons/ion/md-pause'
import IconVolumeReset from '~icons/ion/md-refresh'
import type { Image } from '~~/src/plugins/content/types'

export interface Video {
  preview?: Image
  sources: Array<{
    src: string
    mimeType: string
  }>
}

const {
  video,
  autoplay: isAutoplay = false,
  muted: isMuted = false,
  loop: isLoop = false,
  controls: haveControls = false,
  showControls = true,
  playOnIntersect = false,
  playOnHover = false,
} = defineProps<{
  video: Video
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  showControls?: boolean
  playOnIntersect?: boolean
  playOnHover?: boolean
}>()

const videoEl = ref<HTMLVideoElement>(null)
const { buffered, currentTime, playing, waiting, muted, ended } =
  useMediaControls(videoEl)

const toggleMute = () => {
  muted.value = !muted.value
}

const play = () => {
  if (videoEl.value) {
    if (ended.value) {
      currentTime.value = 0
      ended.value = false
    }
    videoEl.value.play()
  }
}

const pause = ({ reset: boolena } = { reset: false }) => {
  if (videoEl.value) {
    videoEl.value.pause()
    if (boolena) {
      currentTime.value = 0
      ended.value = false
    }
  }
}

const togglePlay = () => {
  if (videoEl.value) {
    if (videoEl.value.paused) {
      play()
    } else {
      pause()
    }
  }
}

if (playOnIntersect) {
  useIntersectionObserver(
    videoEl,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        play()
      } else {
        if (playing.value) {
          pause()
        }
        currentTime.value = 0
      }
    },
    {
      threshold: 0.7,
    }
  )
}
</script>
<script lang="ts">
export default defineComponent({
  name: 'AppVideo',
})
</script>
<template>
  <div
    class="video-wrapper"
    :class="{
      playing,
      played: currentTime != 0 && !ended,
      playOnIntersect,
      playOnHover,
      showControls,
    }"
    @mouseenter="playOnHover && play()"
    @mouseleave="playOnHover && pause({ reset: true })"
  >
    <video
      ref="videoEl"
      :autoplay="isAutoplay"
      :loop="isLoop"
      :muted="isMuted"
      :controls="haveControls"
      playsinline
    >
      <source
        v-for="(source, index) of video.sources"
        :key="index"
        :src="source.src"
        :type="source.mimeType"
      />
    </video>
    <div class="preview">
      <app-image v-if="video.preview" :data="video.preview"></app-image>
    </div>
    <div
      v-if="showControls || ended"
      class="mute-button"
      @click.prevent="toggleMute"
    >
      <IconVolume v-if="!muted" class="icon"></IconVolume>
      <IconVolumeOff v-else class="icon"></IconVolumeOff>
    </div>
    <div
      v-if="showControls || ended"
      class="play-button"
      @click.prevent="togglePlay"
    >
      <IconVolumeReset v-if="ended" class="icon"></IconVolumeReset>
      <IconVolumePlay
        v-else-if="!playing"
        class="icon translate-x-0.5"
      ></IconVolumePlay>
      <IconVolumePause v-else class="icon"></IconVolumePause>
    </div>
  </div>
</template>
<style lang="scss">
.video-wrapper {
  @apply overflow-hidden relative;

  &.showControls:hover {
    .play-button {
      @apply opacity-100;
    }
  }

  .mute-button {
    @apply absolute z-20 m-2 right-0 bottom-0 w-8 h-8 flex items-center justify-center rounded-full;
    @apply bg-main-dark/70 backdrop-blur-sm backdrop-saturate-200 text-white cursor-pointer;
    @apply transition duration-300;
    @apply opacity-0;
  }

  .play-button {
    @apply absolute z-20 m-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center rounded-full;
    @apply bg-main-dark/70 hover:bg-main-dark hover:scale-105 backdrop-blur-sm backdrop-saturate-200 text-white text-3xl cursor-pointer;
    @apply transition duration-300;
  }

  .preview {
    @apply absolute top-0 left-0 w-full h-full;
    @apply transition duration-300;

    .responsive-image {
      @apply w-full h-full object-cover;
    }

    img {
      @apply object-cover w-full h-full;
    }
  }

  video {
    @apply opacity-0 w-full h-full object-cover;
    @apply transition duration-300;
  }

  &.playing,
  &.played {
    .mute-button {
      @apply opacity-100;
    }
    .play-button {
      @apply opacity-0;
    }
    .preview {
      @apply opacity-0;
    }
    video {
      @apply opacity-100;
    }
  }
}
</style>
