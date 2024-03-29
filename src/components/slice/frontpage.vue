<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import type { Params } from '~~/src/plugins/content/types/Page'
const localePath = useLocalePath()

const { params } = defineProps<{
  params: Params
}>()

const getTitle = (title: string, subtitle: string) => {
  return title.replace('%s', `<div class="featured">${subtitle}</div>`)
}
</script>
<template>
  <section id="page-home" class="wrapper">
    <Slider :selectors="{ next: '.next-slide', prev: '.prev-slide' }">

      <SliderSlide>
        <div class="slide-wrapper">
          <div class="w-full h-full grid lg:grid-cols-2 lg:grid-rows-2">
            <div class="left relative lg:row-span-2">
              <div class="mobile-square">
                <div class="h-full">
                  <slider-fade class="slider-fade">
                    <div
                      v-for="(slide, index) of params.projectSlider"
                      :key="index"
                      class="slide"
                    >
                      <div class="content">
                        <app-image :data="slide.image"></app-image>
                        <div class="hover-overlay">
                          <h2
                            v-html="getTitle(slide.title, slide.subtitle)"
                          ></h2>
                          <nuxt-link :to="localePath(`/${slide.link}`)"
                            ><AppButton class="sm:mt-5">{{
                              $t('home.projects')
                            }}</AppButton></nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </slider-fade>
                  <SliderInfiniteLinks
                    class="links"
                    :links="params.projectList"
                  ></SliderInfiniteLinks>
                </div>
              </div>
            </div>
            <div class="top-right relative bg-white dark:bg-black">
              <div class="content h-full">
                <h3 v-html="$t('home.title2')"></h3>
                <img
                  class="absolute bottom-0 left-1/2 mlg:w-16 -translate-x-1/2 translate-y-1/2"
                  src="@/assets/img/home/arrow-down.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="bottom-right">
              <div class="content h-full">
                <cta-contact />
              </div>
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="next next-slide">
            <span> {{ $t('home.prev1') }} </span>
          </div>
        </div>
      </SliderSlide>


      <SliderSlide>
        <div class="slide-wrapper slide-1">
          <img
            class="absolute bottom-0 right-0 mb-5 msm:w-2/3"
            src="@/assets/img/home/hand-apple.png"
            alt=""
          />
          <div class="content">
            <div class="inner">
              <h1
                class="title text-center max-w-[45rem]"
                v-html="$t('home.title1')"
              ></h1>
              <nuxt-link :to="localePath('/manifest')">
                <AppButton>{{ $t('home.manifest') }}</AppButton>
              </nuxt-link>
              <img
                class="absolute -top-5 right-0 mxl:w-32 h-auto mxl:translate-x-0 translate-x-2/3 -translate-y-full"
                src="@/assets/img/home/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="prev prev-slide">
            <span> {{ $t('home.prev2') }} </span>
          </div>
          <div class="next next-slide">
            <span> {{ $t('home.next2') }} </span>
          </div>
        </div>
      </SliderSlide>
      
      <SliderSlide>
        <div class="slide-wrapper slide-2">
          <app-video
            :video="params.videoSlice.video"
            :play-on-intersect="true"
            :loop="true"
            :muted="true"
            :show-controls="false"
            class="absolute inset-0 w-full h-full object-cover"
          ></app-video>
          <div class="overlay"></div>
          <div class="content relative z-10">
            <h2
              class="text-white"
              v-html="
                getTitle(params.videoSlice.title, params.videoSlice.subtitle)
              "
            ></h2>
            <nuxt-link :to="localePath(`/${params.videoSlice.link.to}`)">
              <app-button>
                <span v-html="params.videoSlice.link.title"></span>
              </app-button>
            </nuxt-link>
          </div>
        </div>
        <div class="controls">
          <div class="prev prev-slide">
            <span> {{ $t('home.prev1') }} </span>
          </div>
        </div>
      </SliderSlide>
    </Slider>
  </section>
</template>
<style lang="scss">
.slide-wrapper {
  h3 {
    @apply font-butler font-semibold text-xl lg:text-3xl;
  }
  h2 {
    @apply font-butler font-semibold text-3xl lg:text-5xl text-center leading-[2rem] lg:leading-[3rem];

    .featured {
      @apply font-dearest text-primary text-5xl lg:text-8xl leading-[2rem] lg:leading-[3rem] font-normal;
    }
  }
}
</style>
<style lang="scss" scoped>
.wrapper {
  @apply dark:bg-dark-800 bg-primary-gray;
}
.slide-wrapper {
  @apply w-full overflow-y-auto overflow-x-hidden h-screen relative min-h-[40rem];
  @apply flex items-center justify-center;

  max-height: 100vh;
  /* mobile viewport bug fix */
  max-height: -webkit-fill-available;

  .links {
    @apply absolute bottom-0 w-full;
  }

  .mobile-square {
    @apply h-full mlg:aspect-w-8 mlg:aspect-h-8;
  }

  &.slide-1,
  &.slide-2 {
    .title {
      @apply mb-5 sm:mb-10;
    }
    .content {
      @apply absolute inset-0 w-full h-full;
    }
  }
  .content {
    @apply relative min-h-[15rem] h-full p-14 flex flex-col items-center justify-center gap-7;
    .hover-overlay {
      @apply absolute inset-0 bg-black/60 text-white h-full p-14 flex flex-col items-center justify-center gap-7;

      &.overlay-invert {
        @apply bg-white dark:bg-black text-main-dark dark:text-white;
      }

      @screen lg {
        @apply opacity-0 transition duration-300;

        &:hover {
          @apply opacity-100;
        }
      }
    }

    .bg-image {
      @apply absolute inset-0 w-full h-full object-cover;
    }

    .inner {
      @apply relative flex flex-col items-center justify-center gap-7;
    }
  }
}

.overlay {
  @apply absolute inset-0 w-full h-full bg-black/60;
}
.controls {
  div {
    @apply absolute z-20 p-4 cursor-pointer;
    @apply text-white mix-blend-difference uppercase text-sm font-thin;

    writing-mode: vertical-lr;
    text-orientation: mixed;

    &:hover {
      @apply text-secondary mix-blend-normal;
    }
  }
  .next {
    @apply right-0 top-1/2 rotate-180 -translate-y-1/2;
  }

  .prev {
    @apply left-0 top-1/2 -translate-y-1/2;
  }
}
</style>
<style lang="scss">
#page-home .slide .responsive-image {
    @apply absolute inset-0 w-full h-full;
    img {
      @apply w-full h-full object-cover;
    }

}
.slider-fade {
  .responsive-image {
    @apply absolute inset-0 w-full h-full;

    img {
      @apply w-full h-full object-cover;
    }
  }
}
</style>
