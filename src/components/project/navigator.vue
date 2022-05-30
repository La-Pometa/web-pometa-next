<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
const localePath = useLocalePath()

defineProps<{
  next: string
  prev: string
}>()
</script>
<template>
  <div class="project-navigator">
    <div class="controls">
      <div class="prev">
        <nuxt-link v-if="prev" :to="localePath(`/${prev}`)" class="prev">
          <span>Historia anterior</span>
        </nuxt-link>
      </div>
      <div class="middle">
        <nuxt-link :to="localePath('/projects')" class="projects">
          <div class="square">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>Historias de nuestras marcas</span>
        </nuxt-link>
      </div>
      <div class="next">
        <nuxt-link v-if="next" :to="localePath(`/${next}`)" class="next">
          <span>Historia siguiente</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project-navigator {
  .controls {
    @apply flex justify-between items-center;

    .next,
    .prev {
      @apply cursor-pointer;
      @apply text-white mix-blend-difference uppercase text-sm font-thin;

      writing-mode: vertical-lr;
      text-orientation: mixed;

      &:hover {
        @apply text-primary mix-blend-normal;
      }
    }
    .next {
      @apply rotate-180;
    }

    .projects {
      @apply flex flex-col gap-3 justify-center items-center uppercase text-sm;

      .square {
        @apply grid grid-cols-2 grid-rows-2 gap-1;

        span {
          @apply bg-primary w-5 h-5;
        }
      }
    }
  }
}
</style>
