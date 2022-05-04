<script setup lang="ts">
const { variant } = defineProps({
  variant: {
    type: String as () => 'default' | 'light',
    default: 'default',
  },
})
</script>
<template>
  <div class="cta-contact" :class="variant">
    <h2>
      ¿Hablamos de
      <div class="featured ml-20 whitespace-nowrap">tu marca?</div>
    </h2>
    <AppButton :variant="variant === 'light' ? 'light' : 'primary'"
      >Contáctanos</AppButton
    >
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

  &.light {
    h2 .featured {
      @apply text-white;
    }
  }
}
</style>
