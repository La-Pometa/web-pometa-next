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
        <h4 class="title-2 text-center" v-html="$t('pometa.colaborators')"></h4>
        <div class="layout">
          <img
            src="@/assets/img/collaborators/ajuntamentdelleida.svg"
            alt=""
            class="item"
          />
          <img src="@/assets/img/collaborators/argal.svg" alt="" class="item" />
          <img
            src="@/assets/img/collaborators/barcelonaturisme.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/cafesbatalla.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/catedradeperiodismo.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/claranuts.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/dauliba.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/diputaciodelleida.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/diputaciotursimebarcelona.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/elpalace.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/fruitaaitona.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/fruitsdeponent.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/fundacioorfeo.svg"
            alt=""
            class="item"
          />
          <img src="@/assets/img/collaborators/gac.svg" alt="" class="item" />
          <img
            src="@/assets/img/collaborators/generalitatdecatalunya.svg"
            alt=""
            class="item"
          />
          <img src="@/assets/img/collaborators/il3.svg" alt="" class="item" />
          <img
            src="@/assets/img/collaborators/lallotja.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/plataformaperlallengua.svg"
            alt=""
            class="item"
          />
          <img
            src="@/assets/img/collaborators/ponentenergia.svg"
            alt=""
            class="item"
          />
          <img src="@/assets/img/collaborators/sic24.svg" alt="" class="item" />
        </div>
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

  .team-banner {
    @apply h-80 w-full overflow-hidden;
    @apply -mt-10 sm:-mt-14 #{!important  };

    img {
      @apply h-full w-full object-cover;
    }
  }

  .title {
    @apply mb-5 sm:mb-10;
  }

  .title-2 {
    @apply leading-tight;
  }

  .brands {
    @apply bg-white dark:bg-black py-10 sm:py-20;
    .inner {
      @apply container margins-x max-w-screen-xl space-y-20;
    }

    .layout {
      @apply grid gap-7 grid-cols-2 sm:grid-cols-4;

      img {
        @apply grayscale dark:bg-white hover:grayscale-0 transition duration-300;
      }
    }
  }
}
</style>
