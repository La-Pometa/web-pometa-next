<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'

const { variant } = defineProps({
  variant: {
    type: String as () => 'default' | 'light',
    default: 'default',
  },
})

const localePath = useLocalePath()
</script>
<template>
  <div class="cta-contact" :class="variant">
    <h2 v-html="$t('cta.contact.title')"></h2>
    <nuxt-link :to="localePath($t('menu.contact-link'))"
      ><AppButton :variant="variant === 'light' ? 'light' : 'primary'">{{
        $t('cta.contact.button')
      }}</AppButton></nuxt-link
    >
  </div>
</template>
<style lang="scss">
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
