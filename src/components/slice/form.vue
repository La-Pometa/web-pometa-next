<script setup lang="ts">
import type { Params } from '~~/src/plugins/content/types/Page'

const { params } = defineProps<{ params: Params }>()
</script>
<script lang="ts">
export default defineComponent({
  name: 'SliceForm',
})
</script>
<template>
  <section class="slice-form" :class="params.type">
    <div class="content">
      <div
        v-if="params.type === 'textform' || params.type === 'formtext'"
        class="inner"
      >
        <div class="content" v-html="params.html"></div>
        <img
          src="@/assets/img/contact/arrow-left-contact.svg"
          class="mmd:hidden absolute right-10 -bottom-10 translate-y-full"
          alt=""
        />
      </div>
    </div>
    <form-cf7 class="form"><div v-html="params.form"></div></form-cf7>
  </section>
</template>
<style lang="scss">
.slice-form {
  @apply container margins-x;

  &.form {
    @apply md:max-w-screen-md;
  }

  &.textform {
    @apply grid md:grid-cols-12 gap-6 items-start;

    .content {
      @apply md:col-span-6 prose dark:prose-invert relative;

      h1 {
        @apply text-secondary text-3xl font-bold;
      }

      a {
        @apply text-secondary no-underline;
      }
    }

    .form {
      @apply md:col-span-6;
    }
  }
}
</style>
