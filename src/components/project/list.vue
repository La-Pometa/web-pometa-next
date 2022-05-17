<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import { useI18n } from 'vue-i18n'
import type { ArchiveResponse, Post } from '@/plugins/content/types'

const localePath = useLocalePath()

const { $content } = useNuxtApp()

const { locale } = useI18n()

const { data: projectsArchive, pending } = await useLazyAsyncData<
  ArchiveResponse<Post>
>(`projects_${locale.value}`, () =>
  $content
    .projects()
    .param('lang', locale.value)
    .orderby('menu_order')
    .order('asc')
    .perPage(99)
    .get()
)
</script>
<template>
  <section id="projects-list">
    <div v-if="projectsArchive" class="layout">
      <project-card
        v-for="(project, index) of projectsArchive.entries"
        :key="index"
        :project="project"
      >
      </project-card>
    </div>
    <div v-else class="layout">
      <project-card v-for="index of 9" :key="index"></project-card>
    </div>
  </section>
</template>
<style lang="scss">
#projects-list {
  .layout {
    @apply grid gap-5 sm:gap-5;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}
</style>
