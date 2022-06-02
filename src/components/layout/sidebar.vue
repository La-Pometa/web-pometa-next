<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import type { LocaleObject } from 'vue-i18n-routing'
import { useLocalePath } from 'vue-i18n-routing'
import { switchLocalePath } from '~~/src/plugins/i18n'

const emit = defineEmits(['toggled'])

const router = useRouter()

const sidebarWrapper = ref()

const { locale, locales } = useI18n()
const localePath = useLocalePath()

const [isOpen, toggleOpen] = useToggle(false)

watch(isOpen, (isOpen) => {
  emit('toggled', isOpen)
})

onClickOutside(sidebarWrapper, () => {
  toggleOpen(false)
})

watch(router.currentRoute, () => {
  toggleOpen(false)
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
const isTablet = breakpoints.smaller('xl')

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  )
})
</script>
<template>
  <div
    id="sidebar-wrapper"
    ref="sidebarWrapper"
    class="flex"
    :class="{ open: isOpen, toggleable: isTablet }"
    @mouseover="!isMobile && toggleOpen(true)"
    @mouseleave="!isMobile && toggleOpen(false)"
  >
    <div
      id="left-sideBar"
      ref="sidebar"
      class="transition-all duration-500 fixed inset-y-0 flex bg-white dark:bg-dark-900 z-20"
    >
      <div id="left-sidebar-content" class="p-7 msm:p-5 w-64 flex flex-col">
        <NuxtLink :to="localePath('/')">
          <div v-if="$i18n.locale == 'ca'" class="logo cat">
            <div class="responsive-image">
              <img
                class="dark:hidden"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-cat.svg"
              />
            </div>
            <div class="responsive-image">
              <img
                class="hidden dark:block"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-cat-white.svg"
              />
            </div>
          </div>
          <div v-if="$i18n.locale == 'es'" class="logo esp">
            <div class="responsive-image">
              <img
                class="dark:hidden"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-esp.svg"
              />
            </div>
            <div class="responsive-image">
              <img
                class="hidden dark:block"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-esp-white.svg"
              />
            </div>
          </div>
          <div v-if="$i18n.locale == 'en'" class="logo eng">
            <div class="responsive-image">
              <img
                class="dark:hidden"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-eng.svg"
              />
            </div>
            <div class="responsive-image">
              <img
                class="hidden dark:block"
                alt="logo la pometa"
                :width="300"
                :height="82"
                src="@/assets/img/layout/logos-pometa-eng-white.svg"
              />
            </div>
          </div>
        </NuxtLink>
        <LayoutMenu></LayoutMenu>
        <LayoutFooter></LayoutFooter>
      </div>
      <div
        id="sidebar-visible"
        class="border-l border-gray-100 dark:border-dark-500 bg-white dark:bg-dark-900 px-3 transition-all duration-500 relative z-10"
      >
        <div id="sidebarToggler" ref="sidebarToggler">
          <div class="button" @click="toggleOpen()">
            <div class="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <NuxtLink class="logo" :to="localePath('/')">
            <div v-if="$i18n.locale == 'ca'" class="cat">
              <div class="responsive-image">
                <img
                  class="dark:hidden"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-cat.svg"
                />
              </div>
              <div class="responsive-image">
                <img
                  class="hidden dark:block"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-cat-white.svg"
                />
              </div>
            </div>
            <div v-if="$i18n.locale == 'es'" class="esp">
              <div class="responsive-image">
                <img
                  class="dark:hidden"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-esp.svg"
                />
              </div>
              <div class="responsive-image">
                <img
                  class="hidden dark:block"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-esp-white.svg"
                />
              </div>
            </div>
            <div v-if="$i18n.locale == 'en'" class="eng">
              <div class="responsive-image">
                <img
                  class="dark:hidden"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-eng.svg"
                />
              </div>
              <div class="responsive-image">
                <img
                  class="hidden dark:block"
                  alt="logo la pometa"
                  :width="300"
                  :height="82"
                  src="@/assets/img/layout/logos-pometa-eng-white.svg"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
        <div
          id="visible-content"
          class="transition-all duration-500 h-full flex items-center justify-center sticky top-0"
        >
          <div class="grid items-center justify-items-center gap-5">
            <span class="font-butler text-sm divide-y grid">
              <NuxtLink
                v-for="l in availableLocales"
                :key="l.code"
                :to="switchLocalePath(l.code)"
                class="py-2 last:pb-0 first:pt-0"
                >{{ l.name }}</NuxtLink
              >
            </span>
            <div class="burger-wrapper">
              <div class="burger black small">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <nuxt-link :to="localePath($t('menu.breakfast-link'))">
              <div class="taza responsive-image w-6">
                <img
                  class="dark:hidden"
                  :alt="$t('menu.breakfast')"
                  :width="141"
                  :height="113"
                  src="@/assets/img/layout/taza_pometa.svg"
                />
                <img
                  class="hidden dark:block"
                  :alt="$t('menu.breakfast')"
                  :width="141"
                  :height="113"
                  src="@/assets/img/layout/taza_pometa_white.svg"
                /></div
            ></nuxt-link>
          </div>
        </div>

        <div
          class="logo-mini transition-all duration-500 absolute top-3 left-1/2 transform -translate-x-1/2 msm:hidden"
        >
          <div class="responsive-image">
            <img
              class="dark:hidden"
              alt="logo la pometa"
              :width="221"
              :height="300"
              src="@/assets/img/layout/anagrama-pometa.svg"
            />
          </div>
          <div class="responsive-image">
            <img
              class="hidden dark:block"
              alt="logo la pometa"
              :width="221"
              :height="300"
              src="@/assets/img/layout/anagrama-pometa-white.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      id="content-margin"
      class="transition-all duration-500 h-full inline-block"
    ></div>
  </div>
</template>
<style lang="scss">
#sidebarToggler {
  @apply md:opacity-0 md:pointer-events-none absolute -top-px -left-px w-screen flex gap-0 transition-all duration-500 z-20;
  @apply dark:bg-dark-800/90 bg-primary-gray/90 backdrop-filter backdrop-blur-md backdrop-saturate-200;
  .button {
    @apply text-main-dark w-14 h-14 flex items-center justify-center text-xl bg-primary;
  }
  .logo {
    @apply max-h-14 p-3 px-4 flex items-center justify-center flex-1;
    @apply flex items-center;

    img {
      @apply h-11;
    }
  }
}
@screen mmd {
  #content {
    flex: 0 0 100vw;
  }
  #content-margin {
    min-width: 0 !important;
  }
  #sidebar-wrapper:not(.open) {
    #sidebarToggler {
      @apply transform translate-x-14;
    }
    #left-sideBar {
      transform: translateX(-100%);
    }
  }
  #sidebar-wrapper.open {
    & + main {
      transform: translateX(calc(3.5rem + 16rem));
    }
    #left-sideBar {
      transform: translateX(0);
    }
  }
}
@screen md {
  #sidebar-wrapper.toggleable {
    #left-sideBar {
      transform: translateX(-16rem);
    }
    &.open {
      #left-sideBar {
        transform: translateX(0);
      }
    }
    &:not(.open) {
      #content-margin {
        min-width: 3.5rem;
      }
    }
    &:not(.open) {
      .logo-mini {
        @apply opacity-100;
      }
    }
  }
}

.logo-mini {
  @apply opacity-0;
}

#sidebar-wrapper {
  @apply transition-all duration-500 bg-white dark:bg-dark-900;
  @apply relative z-50;
}
#sidebar-visible {
  flex: 0 0 3.5rem;
  width: 3.5rem;
}

.burger-wrapper {
  @apply msm:hidden cursor-pointer hidden;
}

.burger {
  @apply flex flex-col space-y-2;
  span {
    @apply bg-main-dark;
    width: 2rem;
    height: 2px;
  }
  &.small {
    @apply space-y-1;
    span {
      width: 1.5rem;
      height: 2px;
    }
  }
  &.black {
    span {
      @apply bg-main-dark dark:bg-white;
    }
  }
  &:hover {
    span {
      @apply bg-white;
    }
  }
}
#content-margin {
  @apply transition-all duration-500;
  min-width: 312px;
}
#content {
  @apply transition-all duration-500;
}
#left-sideBar {
  box-shadow: 0 0 0 1px rgba(122, 122, 122, 0.1);
}
</style>
