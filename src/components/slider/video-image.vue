<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Image } from '~~/src/plugins/content/types'

defineProps<{
  slides: Array<{
    type: string
    image: Image
    video: string
  }>
}>()
</script>
<template>
  <div class="slider-image-video">
    <div class="wrapper">
      <div v-for="(slide, index) of slides" :key="index" class="slide">
        <div class="inner">
          <app-image
            v-if="slide.type === 'image'"
            :data="slide.image"
          ></app-image>
          <div v-else-if="slide.type === 'video'" class="video">
            <video controls :poster="slide.image.sizes.full.source_url">
              <source :src="slide.video" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.slider-image-video {
  .wrapper {
    @apply flex overflow-auto snap-x snap-mandatory gap-10 msm:gap-0;
    &::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: '';
      @apply block pr-3;
    }
  }
  .slide {
    @apply snap-center;
    --items: 2.3;
    --inset: 2.5rem;

    flex: 0 0
      calc(100% / var(--items) - (var(--inset) / var(--items)) - var(--inset));

    &:first-child {
      margin-left: var(--inset);
    }

    @screen msm {
      --items: 1;
      --inset: 1.25rem;

      flex: 0 0 calc((100% - (var(--inset) * 2)));

      margin-left: calc(var(--inset) / 4);
      margin-right: calc(var(--inset) / 4);
    }

    .inner {
      @apply aspect-w-4 aspect-h-3;
    }

    video,
    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
