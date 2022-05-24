<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
const localePath = useLocalePath()
</script>
<script lang="ts">
export default defineComponent({
  name: 'LayoutMenu',
})
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
          <nuxt-link :to="localePath($t('menu.services.marketing-link'))">{{
            $t('menu.services.marketing')
          }}</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="localePath($t('menu.services.design-link'))">{{
            $t('menu.services.design')
          }}</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="localePath($t('menu.services.publicity-link'))">{{
            $t('menu.services.publicity')
          }}</nuxt-link>
        </div>
        <div class="item">
          <nuxt-link :to="localePath($t('menu.services.web-link'))">{{
            $t('menu.services.web')
          }}</nuxt-link>
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
      ><nuxt-link :to="localePath($t('menu.kitdigital-link'))">{{
        $t('menu.kitdigital')
      }}</nuxt-link></span
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
#menu .item.featured-item a {
  @apply bg-primary py-0.5 px-2 text-main-dark;
  @apply transition duration-300;

  &:hover,
  &.router-link-active {
    @apply bg-gray-700 text-primary;
  }
}
</style>
