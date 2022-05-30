<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
const localePath = useLocalePath()
</script>
<template>
  <footer class="mt-auto flex flex-col gap-8 pt-10">
    <div id="info" class="flex flex-col gap-1 text-center text-xs font-thin">
      <nuxt-link :to="localePath($t('menu.contact-link'))">{{
        $t('footer.oficinas')
      }}</nuxt-link>
      <a href="mailto:info@lapometa.com">info@lapometa.com</a>
      <span>T:<a href="tel:+34973282570">(+34) 973 28 25 70</a></span>
    </div>
    <div
      id="footer-menu"
      class="flex gap-1 flex-col text-center text-xs font-bold"
    >
      <nuxt-link :to="localePath($t('footer.privacity-link'))">{{
        $t('footer.privacidad')
      }}</nuxt-link>
      <nuxt-link :to="localePath($t('footer.cookies-link'))">{{
        $t('footer.cookies')
      }}</nuxt-link>
      <nuxt-link :to="localePath($t('footer.legal'))">{{
        $t('footer.aviso')
      }}</nuxt-link>
      <nuxt-link :to="localePath($t('footer.map-link'))">{{
        $t('footer.map')
      }}</nuxt-link>
    </div>
  </footer>
</template>
