<script setup lang="ts"></script>
<template>
  <div id="page-pometa" class="margins-y">
    <header class="text-center container margins-x">
      <h1 class="title">
        {{ $t('pometa.title') }} <br />
        <span class="featured"> {{ $t('pometa.subtitle') }} </span>
      </h1>
      <h3
        class="title-2 max-w-screen-sm mx-auto"
        v-html="$t('pometa.claim')"
      ></h3>
    </header>
    <section class="common-xl"><member-list /></section>
    <div class="brands">
      <div class="inner">
        <h4 class="title-2 text-center">
          <b>Diseñamos y desarrollamos experiencias</b><br />
          que mejoran la vida de nuestros clientes,<br />
          y por ende, de sus usuarios.
        </h4>
      </div>
    </div>
    <section class="common">
      <cta-contact />
    </section>
  </div>
</template>
<style lang="scss">
#page-pometa {
  @apply space-y-10 sm:space-y-14;

  .brands {
    @apply bg-white dark:bg-black py-10 sm:py-20;
    .inner {
      @apply container margins-x max-w-screen-xl;
    }
  }
}
</style>
