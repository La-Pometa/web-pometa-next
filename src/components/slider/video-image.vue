<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Image } from '~~/src/plugins/content/types'
import ArrowLeft from '~icons/ic/baseline-arrow-back'
import ArrowRight from '~icons/ic/baseline-arrow-forward'

defineProps<{
  slides: Array<{
    type: string
    image: Image
    video: string
  }>
}>()

const slider = ref<HTMLElement>()

const { x, arrivedState } = useScroll(slider)

const { left, right } = toRefs(arrivedState)

const getSlideWidth = () => {
  const slide = slider.value.children[0]
  return slide.clientWidth
}

const moveSlide = (direction: 'next' | 'prev') => {
  const slideWidth = getSlideWidth()

  slider.value.scrollTo({
    left: direction === 'next' ? x.value + slideWidth : x.value - slideWidth,
    behavior: 'smooth',
  })
}

const nextSlide = () => {
  if (!right.value) {
    moveSlide('next')
  }
}

const prevSlide = () => {
  if (!left.value) {
    moveSlide('prev')
  }
}
</script>
<template>
  <div class="slider-image-video">
    <div class="controls">
      <div class="inner">
        <div :class="{ show: !left }" class="prev" @click="prevSlide()">
          <ArrowLeft />
        </div>
        <div :class="{ show: !right }" class="next" @click="nextSlide()">
          <ArrowRight />
        </div>
      </div>
    </div>
    <div ref="slider" class="wrapper">
      <div v-for="(slide, index) of slides" :key="index" class="slide">
        <div v-if="slide.image || slide.video" class="inner">
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
  @screen md {
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
}
.slider-image-video {
  @apply relative;

  .controls {
    @apply margins-x container xl:max-w-screen-xl text-lg z-20 pointer-events-none;
    @apply msm:hidden;

    .inner {
      @apply relative h-full flex justify-end;
    }

    .next,
    .prev {
      @apply cursor-pointer pointer-events-auto;
      @apply w-10 h-10 text-main-dark bg-primary/70 backdrop-blur backdrop-saturate-200 flex items-center justify-center;
      @apply transition duration-300 scale-75 opacity-0 pointer-events-none;

      &.show {
        @apply opacity-100 scale-100 pointer-events-auto;
      }
    }

    .next {
      @apply right-0 origin-right;
    }

    .prev {
      @apply left-0 origin-left;
    }
  }
  .wrapper {
    @apply flex overflow-auto snap-x snap-mandatory;

    scrollbar-width: none;

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
        ((calc(100vw - var(--sidebar-width)) - var(--boxed-size)) / 2) +
          calc(var(--inset) * 2)
      )
    );

    @screen 2xl {
      --items: 2;
    }

    @screen msm {
      --items: 1;
      --inset: 0.625rem;
    }

    @screen mmd {
      --sidebar-width: 0px;
    }

    padding-left: var(--margins);
    scroll-padding-left: var(--margins);
  }
  .slide {
    @apply snap-start msm:mr-0;

    flex: 0 0
      calc(
        (100% / var(--items) - var(--inset) + (var(--inset) / var(--items))) -
          var(--margins) / var(--items)
      );

    @screen msm {
      flex: 0 0
        calc(
          (100% / var(--items) + (var(--inset) / var(--items))) - var(--margins) /
            var(--items)
        );
    }

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
