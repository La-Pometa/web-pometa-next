<script setup lang="ts">
defineProps<{
  data: {
    name: string
    image: string
  }
}>()
</script>
<template>
  <div class="author">
    <div class="avatar-wrapper">
      <div class="avatar-circle" v-html="data.image"></div>
    </div>
    <span>{{ $t('post.author_by') }} {{ data.name }}</span>
  </div>
</template>
<style lang="scss">
.avatar-circle {
  @apply aspect-w-1 aspect-h-1 rounded-full overflow-hidden mxl:w-10;
  @apply bg-light-500;

  img {
    @apply w-full h-full object-cover;
  }
}

.author {
  @apply text-center flex xl:flex-col gap-2 xl:gap-4;
  @apply mxl:items-center;
}
</style>
