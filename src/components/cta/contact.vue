<template>
  <div class="cta-contact">
    <h2>
      ¿Hablamos de
      <div class="featured ml-20 whitespace-nowrap">tu marca?</div>
    </h2>
    <AppButton>Contáctanos</AppButton>
  </div>
</template>
<style lang="scss" scoped>
.cta-contact {
  @apply flex flex-col items-center justify-center gap-7 py-5;

  h2 {
    @apply font-butler font-semibold text-3xl lg:text-5xl text-center leading-[2rem] lg:leading-[3rem];

    .featured {
      @apply font-dearest text-primary text-5xl lg:text-8xl leading-[2rem] lg:leading-[3rem] font-normal;
    }
  }
}
</style>
