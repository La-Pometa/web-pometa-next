<script setup lang="ts"></script>
<template>
  <Slider :selectors="{ next: '.next-slide', prev: '.prev-slide' }">
    <SliderSlide>
      <div class="slide-wrapper">
        <img
          class="absolute bottom-0 right-0 mb-5 msm:w-2/3"
          src="@/assets/img/home/hand-apple.png"
          alt=""
        />
        <div class="content">
          <div class="inner">
            <h1 class="title max-w-[45rem]">
              Nadie se resiste a una buena historia… Comencemos a construirla
              <span class="featured">juntos.</span>
            </h1>
            <AppButton class="sm:mt-5">Manifiesto</AppButton>
            <img
              class="absolute top-0 right-0 mxl:w-32 h-auto mxl:translate-x-0 translate-x-2/3 -translate-y-full mb-5"
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
        <div class="w-full h-full grid lg:grid-cols-2 grid-rows-2">
          <div class="left relative lg:row-span-2">
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
          </div>
          <div class="top-right relative bg-white dark:bg-black">
            <div class="content h-full">
              <h3>
                Somos una <span class="text-primary">agencia creativa</span> que
                cree en el poder motivador e inspirador de las historias.
                ¡Creemos en nuestros clientes!
              </h3>
            </div>
            <img
              class="absolute bottom-0 left-1/2 mlg:w-16 -translate-x-1/2 translate-y-1/2"
              src="@/assets/img/home/arrow-down.svg"
              alt=""
            />
          </div>
          <div class="bottom-right">
            <div class="content h-full">
              <h2>
                ¿Hablamos de
                <div class="featured ml-20 whitespace-nowrap">tu marca?</div>
              </h2>
              <AppButton>Contáctanos</AppButton>
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
      <div class="slide-wrapper">
        <video
          autoplay
          loop
          muted
          playsinline
          poster="https://cms.lapometa.com/wp-content/uploads/2021/09/campanya-conreem-talent-lapometa.png.webp"
          class="z absolute inset-0 w-full h-full object-cover"
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
            <div class="featured ml-24 whitespace-nowrap">llena de talento</div>
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
</template>
<style lang="scss" scoped>
.slide-wrapper {
  @apply w-full h-screen min-h-[45rem];
  @apply flex items-center justify-center;

  .content {
    @apply relative h-full p-14 flex flex-col items-center justify-center gap-7;

    .hover-overlay {
      @apply absolute inset-0 bg-black/60 text-white h-full p-14 flex flex-col items-center justify-center gap-7;

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

    .title {
      @apply text-4xl lg:text-7xl text-center leading-[3rem] lg:leading-[4.3rem] font-semibold;
    }

    h3 {
      @apply font-butler font-semibold text-3xl;
    }
    h2 {
      @apply font-butler font-semibold text-3xl lg:text-5xl text-center leading-[2rem] lg:leading-[3rem];

      .featured {
        @apply font-dearest text-primary text-5xl lg:text-8xl leading-[2rem] lg:leading-[3rem] font-normal;
      }
    }
  }

  .featured {
    @apply font-dearest text-primary text-6xl lg:text-9xl leading-[3rem] lg:leading-[4.3rem] font-normal;
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
