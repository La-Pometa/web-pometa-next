<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import type { Image } from '~~/src/plugins/content/types'

defineProps({
  variant: {
    type: String as () => 'default' | 'light',
    default: 'default',
  },
  subtitle: {
    type: String,
    default: '',
  },
  links: {
    type: Array as unknown as () => [
      {
        title: string
        link: string
        image: Image
      }
    ],
    required: true,
  },
})

const localePath = useLocalePath()
</script>
<template>
  <div class="cta-contact-links" :class="variant">
    <div class="top">
      <h2 v-html="$t('cta.contact.title')"></h2>
      <h3 v-if="subtitle" v-html="subtitle"></h3>
    </div>
    <div class="links">
      <nuxt-link
        v-for="(link, index) of links"
        :key="index"
        class="link"
        :to="link.link"
      >
        <div class="left">
          <app-image v-if="link.image" class="image" :data="link.image" />
          <PuSkeleton v-else height="100%"></PuSkeleton>
        </div>
        <h4 v-html="link.title"></h4>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss">
.cta-contact-links {
  @apply flex flex-col items-center justify-center gap-16 py-5;

  h2 {
    @apply font-butler font-semibold text-3xl lg:text-5xl text-center leading-[2rem] lg:leading-[3rem];

    .featured {
      @apply font-dearest text-primary text-5xl lg:text-8xl leading-[2rem] lg:leading-[3rem] font-normal;
    }
  }

  h3 {
    @apply font-bold uppercase text-center mt-2;
  }

  &.light {
    h2 .featured {
      @apply text-white;
    }
  }

  .links {
    @apply flex justify-around flex-wrap gap-7 w-full;

    .link {
      @apply flex items-center gap-3;

      .image {
        @apply w-20 md:w-36 aspect-w-1 aspect-h-1 rounded-full translate-x-0 overflow-hidden;

        img {
          @apply absolute inset-0 w-full h-full object-cover;
        }
      }

      h4 {
        @apply font-butler font-bold text-xl lg:text-2xl max-w-[15rem];
      }
    }
  }
}
</style>
