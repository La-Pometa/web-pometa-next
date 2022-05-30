<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import type { Params } from '~~/src/plugins/content/types/Page'
const localePath = useLocalePath()

const { params } = defineProps<{
  params: Params
}>()
</script>
<template>
  <div class="slice-links">
    <div class="links">
      <div
        v-for="(link, index) of params.links"
        :key="index"
        class="link"
        :to="link.link"
      >
        <div class="left">
          <app-image v-if="link.image" class="image" :data="link.image" />
          <PuSkeleton v-else height="100%"></PuSkeleton>
        </div>
        <div class="right">
          <div class="content-wrapper" v-html="link.title"></div>
          <div class="content-wrapper" v-html="link.subtitle"></div>
          <div class="sub-links">
            <nuxt-link
              v-for="(subLink, subIndex) of link.links"
              :key="`${index}-${subIndex}`"
              class="sub-link"
              :to="subLink.link"
              ><span v-html="subLink.title"></span
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.slice-links {
  @apply flex flex-col items-center justify-center gap-16 py-5 margins-x;

  h3 {
    @apply font-butler font-bold text-xl lg:text-2xl;
  }

  .links {
    @apply flex md:justify-around flex-wrap gap-7 w-full;

    .link {
      @apply flex items-start gap-8;

      .image {
        @apply w-20 md:w-36 aspect-w-1 aspect-h-1 rounded-full translate-x-0 overflow-hidden;

        img {
          @apply absolute inset-0 w-full h-full object-cover;
        }
      }

      .right {
        @apply flex flex-col gap-2;

        .sub-link {
          @apply font-bold hover:text-primary;
        }
        .sub-links {
          @apply flex flex-col;
        }
      }

      h4 {
        @apply font-butler font-bold text-xl lg:text-2xl max-w-[15rem];
      }
    }
  }
}
</style>
