<template>
  <section id="page-pometa">
    <header class="container margins text-center">
      <h1 class="title">
        {{ $t('pometa.title') }} <br />
        <span class="featured"> {{ $t('pometa.subtitle') }} </span>
      </h1>
      <h3
        class="title-2 max-w-screen-sm mx-auto"
        v-html="$t('pometa.claim')"
      ></h3>
    </header>
  </section>
</template>
