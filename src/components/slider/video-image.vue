<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Image } from '~~/src/plugins/content/types'
import ArrowLeft from '~icons/ion/chevron-left'
import ArrowRight from '~icons/ion/chevron-right'

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
    <div class="controls">
      <div class="next">
        <ArrowLeft />
      </div>
      <div class="prev">
        <ArrowRight />
      </div>
    </div>
    <div class="wrapper">
      <div v-for="(slide, index) of slides" :key="index" class="slide">
        <div class="inner">
          <app-image
            v-if="slide.type === 'image'"
            :data="slide.image"
            :has-title="true"
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
#sidebar-wrapper.toggleable {
  &:not(.open) {
    & ~ main {
      .slider-image-video {
        .wrapper {
          --sidebar-width: 56px;
        }
      }
    }
  }
}
.slider-image-video {
  .controls {
    @apply flex justify-end pb-6 gap-2 container margins-x xl:max-w-screen-xl text-xl;
    @apply msm:hidden;

    .next,
    .prev {
      @apply text-primary hover:text-main-dark dark:hover:text-white;
    }
  }
  .wrapper {
    @apply flex overflow-auto snap-x snap-mandatory;
    &::-webkit-scrollbar {
      display: none;
    }
    &:after {
      content: '';
      @apply block;
      padding-right: var(--margins);
    }

    --boxed-size: 100%;

    @media (min-width: 640px) {
      --boxed-size: 640px;
    }
    @media (min-width: 768px) {
      --boxed-size: 768px;
    }
    @media (min-width: 1024px) {
      --boxed-size: 1024px;
    }
    @media (min-width: 1280px) {
      --boxed-size: 1280px;
    }

    --items: 2;
    --inset: 1.25rem;
    --sidebar-width: 312px;

    --margins: max(
      calc(var(--inset) * 2),
      calc(
        ((calc(100vw - var(--sidebar-width)) - var(--boxed-size)) / 2) + 2.5rem
      )
    );

    padding-left: var(--margins);
    scroll-padding-left: var(--margins);

    @screen 2xl {
      --items: 2;
    }

    @screen msm {
      --items: 1;
      --inset: 0.625rem;
    }
  }
  .slide {
    @apply snap-start msm:mr-0;

    flex: 0 0
      calc(
        (100% / var(--items) - var(--inset) + (var(--inset) / var(--items))) -
          var(--margins) / var(--items)
      );

    margin-right: var(--inset);

    .inner {
      @apply aspect-w-4 aspect-h-3;
    }

    &:last-of-type {
      margin-right: 0;
    }

    video,
    img {
      @apply top-0 left-0 z-10 absolute w-full h-full object-cover;
    }
  }
}
</style>
