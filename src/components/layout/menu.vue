<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
const localePath = useLocalePath()
</script>
<template>
  <nav id="menu" class="flex flex-col mt-7 font-medium text-sm gap-3">
    <span class="item">
      <nuxt-link class="item" :to="localePath('/')">{{
        $t('menu.home')
      }}</nuxt-link>
    </span>
    <span class="item">
      <nuxt-link :to="localePath($t('menu.pometa-link'))">{{
        $t('menu.pometa')
      }}</nuxt-link>
    </span>
    <span class="item">
      <nuxt-link :to="localePath($t('menu.manifest-link'))">{{
        $t('menu.manifest')
      }}</nuxt-link>
    </span>
    <span class="item">
      <nuxt-link :to="localePath($t('menu.projects-link'))">{{
        $t('menu.projects')
      }}</nuxt-link>
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
      ><nuxt-link :to="localePath($t('menu.blog-link'))">{{
        $t('menu.blog')
      }}</nuxt-link></span
    >
    <span class="item"
      ><nuxt-link :to="localePath($t('menu.contact-link'))">{{
        $t('menu.contact')
      }}</nuxt-link></span
    >
    <span class="item"
      ><nuxt-link :to="localePath($t('menu.breakfast-link'))">{{
        $t('menu.breakfast')
      }}</nuxt-link></span
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
      &:hover,
      &.router-link-active {
        @apply text-primary;
      }
    }
    .not-click {
      @apply hover:text-primary cursor-pointer;
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
.featured-item a {
  @apply bg-primary py-0.5 px-2 hover:bg-gray-700 text-main-dark;
  @apply transition duration-300;
}
</style>
