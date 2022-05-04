<script setup lang="ts"></script>
<template>
  <section id="page-home" class="wrapper">
    <Slider :selectors="{ next: '.next-slide', prev: '.prev-slide' }">
      <SliderSlide>
        <div class="slide-wrapper slide-1">
          <img
            class="absolute bottom-0 right-0 mb-5 msm:w-2/3"
            src="@/assets/img/home/hand-apple.png"
            alt=""
          />
          <div class="content">
            <div class="inner">
              <h1 class="title text-center max-w-[45rem]">
                Nadie se resiste a una buena historia… Comencemos a construirla
                <span class="featured">juntos.</span>
              </h1>
              <AppButton class="sm:mt-5">Manifiesto</AppButton>
              <img
                class="absolute -top-5 right-0 mxl:w-32 h-auto mxl:translate-x-0 translate-x-2/3 -translate-y-full"
                src="@/assets/img/home/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="controls">
          <div class="next next-slide">
            <span> ¡Creemos en nuestros clientes! </span>
          </div>
        </div>
      </SliderSlide>
      <SliderSlide>
        <div class="slide-wrapper">
          <div class="w-full h-full grid lg:grid-cols-2 lg:grid-rows-2">
            <div class="left relative lg:row-span-2">
              <div class="mobile-square mlg:aspect-w-1 mlg:aspect-h-1">
                <div>
                  <div class="content">
                    <img
                      src="@/assets/img/home/claranuts.jpg"
                      class="bg-image"
                      alt="Claranuts"
                    />
                    <div class="hover-overlay">
                      <h2>
                        LAS NUECES <br />
                        MÁS LOCAS
                        <div class="featured ml-20">del mundo</div>
                      </h2>
                      <AppButton class="sm:mt-5">Descúbrelas</AppButton>
                    </div>
                  </div>
                  <SliderInfiniteLinks
                    class="links"
                    :links="[
                      {
                        title: 'Claranuts',
                        url: 'claranuts',
                      },
                      {
                        title: 'Conreem Talent',
                        url: 'csadsadsa',
                      },
                      {
                        title: 'Esther Grup',
                        url: 'dsdsadsaasdaad',
                      },
                    ]"
                  ></SliderInfiniteLinks>
                </div>
              </div>
            </div>
            <div class="top-right relative bg-white dark:bg-black">
              <div class="content h-full">
                <h3>
                  Somos una
                  <span class="text-primary">agencia creativa</span> que cree en
                  el poder motivador e inspirador de las historias. ¡Creemos en
                  nuestros clientes!
                </h3>
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
            <span> Una historia llena de talento </span>
          </div>
          <div class="prev prev-slide">
            <span> Nadie se resiste a una buena historia </span>
          </div>
        </div>
      </SliderSlide>
      <SliderSlide>
        <div class="slide-wrapper slide-2">
          <video
            autoplay
            loop
            muted
            playsinline
            poster="https://cms.lapometa.com/wp-content/uploads/2021/09/campanya-conreem-talent-lapometa.png.webp"
            class="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://cms.lapometa.com/wp-content/uploads/2021/09/VIDEO_CONREEM_TALENT_OPT.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="overlay"></div>
          <div class="content relative z-10">
            <h2 class="text-white">
              UNA HISTORIA
              <div class="featured ml-24 whitespace-nowrap">
                llena de talento
              </div>
            </h2>
            <AppButton>Descúbrela</AppButton>
          </div>
        </div>
        <div class="controls">
          <div class="prev prev-slide">
            <span> ¡Creemos en nuestros clientes! </span>
          </div>
        </div>
      </SliderSlide>
    </Slider>
  </section>
</template>
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
    @apply h-full;

    & > div {
      @apply h-full;
    }
  }

  &.slide-1,
  &.slide-2 {
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
      @apply text-primary mix-blend-normal;
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
