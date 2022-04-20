<template>
  <footer class="mt-auto flex flex-col gap-8 pt-10">
    <div id="info" class="flex flex-col gap-1 text-center text-xs font-thin">
      <a href="localePath('/contacto')">{{ $t('footer.oficinas') }}</a>
      <a href="mailto:info@lapometa.com">info@lapometa.com</a>
      <span>T:<a href="tel:+34973282570">(+34) 973 28 25 70</a></span>
    </div>
    <div
      id="footer-menu"
      class="flex gap-1 flex-col text-center text-xs font-bold"
    >
      <a href="localePath($t('privacidad'))">{{ $t('footer.privacidad') }}</a>
      <a href="localePath($t('cookies'))">{{ $t('footer.cookies') }}</a>
      <a href="localePath($t('aviso'))">{{ $t('footer.aviso') }}</a>
      <a href="localePath($t('map'))">{{ $t('footer.map') }}</a>
    </div>
  </footer>
</template>
