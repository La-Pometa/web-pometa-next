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
          <h1 class="max-w-[45rem]">
            Nadie se resiste a una buena historia… Comencemos a construirla
            <span class="featured">juntos.</span>
          </h1>
          <AppButton class="sm:mt-5">Manifiesto</AppButton>
          <img
            class="absolute top-0 right-0 mxl:w-32 mxl:translate-x-0 translate-x-2/3 -translate-y-full mb-5"
            src="@/assets/img/home/arrow-right.svg"
            alt=""
          />
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
        <h1 class="max-w-[45rem]">
          Nadie se resiste a una buena historia… Comencemos a construirla
          <span class="featured">juntos.</span>
        </h1>
      </div>
      <div class="controls">
        <div class="next next-slide"><span>¿Hablamos de tu marca?</span></div>
        <div class="prev prev-slide">
          <span>Nadie se resiste a una buena historia</span>
        </div>
      </div>
    </SliderSlide>
    <SliderSlide>
      <div class="slide-wrapper">
        <h1 class="max-w-[45rem]">
          Nadie se resiste a una buena historia… Comencemos a construirla
          <span class="featured">juntos.</span>
        </h1>
      </div>
      <div class="controls">
        <div class="next next-slide"><span>¿Hablamos de tu marca?</span></div>
        <div class="prev prev-slide">
          <span>Nadie se resiste a una buena historia</span>
        </div>
      </div>
    </SliderSlide>
  </Slider>
</template>
<style lang="scss" scoped>
.slide-wrapper {
  @apply w-full h-screen p-14;
  @apply flex items-center justify-center;

  .content {
    @apply relative flex flex-col items-center justify-center gap-7;

    h1 {
      @apply sm:text-7xl text-center leading-[3rem] sm:leading-[4.3rem];
    }
  }

  .featured {
    @apply font-dearest text-primary text-6xl sm:text-9xl leading-[3rem] sm:leading-[4.3rem];
  }
}

.controls {
  div {
    @apply p-4 hover:text-primary cursor-pointer uppercase text-sm font-thin;
  }
  .next {
    @apply absolute right-0 top-1/2 -translate-y-1/2;

    writing-mode: vertical-lr;
    text-orientation: mixed;

    span {
      @apply block -rotate-180 origin-center;
    }
  }

  .prev {
    @apply absolute left-0 top-1/2 -translate-y-1/2;

    writing-mode: vertical-lr;
    text-orientation: mixed;

    span {
      @apply block origin-center;
    }
  }
}
</style>
