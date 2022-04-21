<template>
  <client-only>
    <div>
      <Transition name="fade-up">
        <div v-if="!accepted" class="cookie-banner">
          <div class="top">
            <div class="title">{{ $t('cookies.policy') }}</div>
            <div class="description">
              <div>{{ $t('cookies.uses') }}</div>
            </div>
          </div>
          <div class="bottom">
            <app-button variant="void" size="lg" @click="togglePreferences()">{{
              $t('cookies.preferences')
            }}</app-button>
            <app-button variant="primary" size="lg" @click="accept()">{{
              $t('cookies.accept')
            }}</app-button>
          </div>
        </div>
      </Transition>
      <!--       <app-modal
        :is-open="preferencesOpen"
        :card="true"
        size="md"
        @close="togglePreferences(false)"
      >
        <cookie-preferences @save="accept" />
      </app-modal> -->
    </div>
  </client-only>
</template>
<script setup lang="ts">
const accepted = useStorage('cookie-consent', false)

const [preferencesOpen, togglePreferences] = useToggle(false)

const accept = () => {
  accepted.value = true
  togglePreferences(false)
}
</script>
<style lang="scss">
.cookie-banner {
  @apply bg-white dark:bg-gray-900 m-7;
  @apply fixed z-20 bottom-0 right-0;
  @apply grid shadow-lg max-w-sm;

  .top {
    @apply text-center grid gap-4 p-6;

    img {
      @apply max-w-[70%] msm:max-w-[50%] mx-auto;
    }

    .title {
      @apply text-2xl font-bold font-butler;
    }
    .description {
      @apply px-7;
    }
  }

  .bottom {
    @apply grid grid-cols-2 bg-light-300 dark:bg-gray-800;
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  @apply transition-all duration-200 ease-in-out;
  @media (prefers-reduced-motion) {
    transition: none;
  }
}
.fade-up-enter,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
  @media (prefers-reduced-motion) {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
