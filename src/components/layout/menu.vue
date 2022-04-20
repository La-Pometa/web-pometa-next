<script setup lang="ts"></script>
<template>
  <nav id="menu" class="flex flex-col mt-7 font-medium text-sm gap-3">
    <span class="item">
      <nuxt-link class="item" to="/">{{ $t('menu.home') }}</nuxt-link>
    </span>
    <span class="item">
      <a href="localePath('/pometa')">{{ $t('menu.pometa') }}</a>
    </span>
    <span class="item">
      <a href="localePath('/manifiesto')">{{ $t('menu.manifest') }}</a>
    </span>
    <span class="item">
      <a href="localePath('/proyectos')">{{ $t('menu.projects') }}</a>
    </span>
    <span class="item" tabindex="0"
      ><a class="not-click">{{ $t('menu.services.title') }}</a>
      <div class="sub-menu">
        <div class="item">
          <a href="localePath($t('marketing'))">{{
            $t('menu.services.marketing')
          }}</a>
        </div>
        <div class="item">
          <a href="localePath($t('design'))">{{
            $t('menu.services.design')
          }}</a>
        </div>
        <div class="item">
          <a href="localePath($t('web'))">{{ $t('menu.services.web') }}</a>
        </div>
        <div class="item">
          <a href="localePath($t('publicity'))">{{
            $t('menu.services.publicity')
          }}</a>
        </div>
      </div>
    </span>
    <span class="item"
      ><a href="localePath('/blog')">{{ $t('menu.blog') }}</a></span
    >
    <span class="item"
      ><a href="localePath('/contacto')">{{ $t('menu.contact') }}</a></span
    >
    <span class="item"
      ><a href="localePath('/desayuna-con-manzanas')">{{
        $t('menu.breakfast')
      }}</a></span
    >
    <span class="item featured-item"
      ><a href="localePath($t('kitdigital'))">{{
        $t('menu.kitdigital')
      }}</a></span
    >
  </nav>
</template>
<style lang="scss">
#menu {
  .item {
    a,
    span {
      @apply transition-all duration-500  hover:text-primary;
    }
    .not-click {
      @apply transition-all duration-500  hover:text-primary cursor-pointer;
    }
    & > a {
      @apply cursor-pointer;
    }
    &:hover {
      .sub-menu {
        @apply max-h-96 pt-4 pb-2 opacity-100;
      }
    }
    .sub-menu {
      @apply transition-all duration-500  ml-3 flex flex-col gap-2 max-h-0 overflow-hidden opacity-0;
    }
  }
}
</style>
