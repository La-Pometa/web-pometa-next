<template>
  <section id="archive-projects">
    <header class="text-center">
      <h1 class="title">
        {{ $t('projects.title') }} <br />
        <span class="featured"> {{ $t('projects.subtitle') }} </span>
      </h1>
    </header>
    <project-list />
  </section>
</template>
<style lang="scss">
#archive-projects {
  @apply container margins space-y-10 sm:space-y-14;
}
</style>
  