<script setup lang="ts">
import IconWhatsapp from '~icons/ph/whatsapp-logo-light'
import IconFacebook from '~icons/ph/facebook-logo-light'
import IconInstagram from '~icons/ph/instagram-logo-light'
import IconTwitter from '~icons/ph/twitter-logo-light'
import IconLinkedin from '~icons/ph/linkedin-logo-light'
</script>
<template>
  <div id="social">
    <a
      href="https://api.whatsapp.com/send?phone=+34649935970&text=!Hola%20Laia!,%20%C2%BFnos%20puedes%20ayudar?"
      target="_blank"
      title="Whatsapp de La Pometa"
      class="no-highlight"
    >
      <IconWhatsapp />
    </a>
    <a
      href="https://www.instagram.com/lapometaagencia/"
      target="_blank"
      title="Instagram La Pometa"
      class="no-highlight"
    >
      <IconInstagram />
    </a>
    <a
      href="https://facebook.com/lapometaagencia/"
      target="_blank"
      title="Facebook La Pometa"
      class="no-highlight"
    >
      <IconFacebook />
    </a>
    <a
      href="https://www.linkedin.com/company/lapometagaagencia/"
      target="_blank"
      title="LinkedIn La Pometa"
      class="no-highlight"
    >
      <IconLinkedin />
    </a>
    <a
      href="https://twitter.com/LaPometaAgencia"
      target="_blank"
      title="Twitter La Pometa"
      class="no-highlight"
    >
      <IconTwitter />
    </a>
  </div>
</template>
<style lang="scss">
#social {
  @apply flex gap-3 justify-center text-lg;

  a {
    @apply hover:text-secondary;
  }
}
</style>
