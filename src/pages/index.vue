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
          <span>¡Creemos en nuestros clientes!</span>
        </div>
      </div>
    </SliderSlide>
    <SliderSlide>
      <div class="slide-wrapper">
        <div class="w-full h-full grid lg:grid-cols-2 grid-rows-2">
          <div class="left lg:row-span-2"></div>
          <div class="top-right relative bg-white dark:bg-black">
            <div class="content h-full">
              <h2>
                Somos una <span class="text-primary">agencia creativa</span> que
                cree en el poder motivador e inspirador de las historias.
                ¡Creemos en nuestros clientes!
              </h2>
            </div>
            <img
              class="absolute bottom-0 left-1/2 mlg:w-16 -translate-x-1/2 translate-y-1/2"
              src="@/assets/img/home/arrow-down.svg"
              alt=""
            />
          </div>
          <div class="bottom-right">
            <div class="content h-full">
              <h2 class="title">
                <div>¿Hablamos de</div>
                <div class="featured ml-8 whitespace-nowrap">tu marca?</div>
              </h2>
              <AppButton>Contáctanos</AppButton>
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="next next-slide">
          <span>Una historia llena de talento</span>
        </div>
        <div class="prev prev-slide">
          <span>Nadie se resiste a una buena historia</span>
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
          <h2 class="title text-white">
            <div>UNA HISTORIA</div>
            <div class="featured ml-24 whitespace-nowrap">llena de talento</div>
          </h2>
          <AppButton>Descúbrelo</AppButton>
        </div>
      </div>
      <div class="controls">
        <div class="prev prev-slide">
          <span>¡Creemos en nuestros clientes!</span>
        </div>
      </div>
    </SliderSlide>
  </Slider>
</template>
<style lang="scss" scoped>
.slide-wrapper {
  @apply w-full h-screen;
  @apply flex items-center justify-center;

  .content {
    @apply relative p-14 flex flex-col items-center justify-center gap-7;

    .inner {
      @apply relative flex flex-col items-center justify-center gap-7;
    }

    .title {
      @apply text-5xl sm:text-7xl text-center leading-[3rem] sm:leading-[4.3rem];
    }

    h2 {
      @apply font-butler text-3xl;
    }
  }

  .featured {
    @apply font-dearest text-primary text-6xl sm:text-9xl leading-[3rem] sm:leading-[4.3rem];
  }
}

.overlay {
  @apply absolute inset-0 w-full h-full bg-black/60;
}
.controls {
  div {
    @apply absolute z-10 p-4 hover:text-primary text-white mix-blend-difference hover:mix-blend-normal cursor-pointer uppercase text-sm font-thin;
  }
  .next {
    @apply right-0 top-1/2 -translate-y-1/2;

    writing-mode: vertical-lr;
    text-orientation: mixed;

    span {
      @apply block -rotate-180 origin-center;
    }
  }

  .prev {
    @apply left-0 top-1/2 -translate-y-1/2;

    writing-mode: vertical-lr;
    text-orientation: mixed;

    span {
      @apply block origin-center;
    }
  }
}
</style>
