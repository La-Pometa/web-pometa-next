<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { LocaleObject } from 'vue-i18n-routing'
import { localePath, switchLocalePath } from 'vue-i18n-routing'
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  )
})
</script>
<template>
  <div id="sidebar-wrapper" ref="sidebarWrapper" class="flex min-h-screen">
    <div
      id="left-sideBar"
      ref="sidebar"
      class="transition-all duration-500 fixed inset-y-0 flex bg-white dark:bg-gray-900 z-20"
    >
      <div id="left-sidebar-content" class="p-7 msm:p-5 w-64 flex flex-col">
        <a href="localePath('/')">
          <div class="logo"></div>
        </a>
        <nav id="menu" class="flex flex-col mt-7 font-medium text-xs gap-4">
          <span tabindex="0"
            ><a href="localePath('/')">{{ $t('home') }}</a></span
          >
          <span tabindex="0"
            ><a href="localePath('/pometa')">{{ $t('laPometa') }}</a></span
          >
          <span tabindex="0"
            ><a href="localePath('/proyectos')">{{ $t('projects') }}</a></span
          >
          <span tabindex="0"
            ><a class="not-click">{{ $t('special') }}</a>
            <div class="sub-menu">
              <div class="item">
                <a href="localePath($t('marketing'))">{{ $t('marketing') }}</a>
              </div>
              <div class="item">
                <a href="localePath($t('design'))">{{ $t('design') }}</a>
              </div>
              <div class="item">
                <a href="localePath($t('web'))">{{ $t('web') }}</a>
              </div>
              <div class="item">
                <a href="localePath($t('publicity'))">{{ $t('publicity') }}</a>
              </div>
            </div>
          </span>
          <span tabindex="0"
            ><a href="localePath('/blog')">{{ $t('blog') }}</a></span
          >
          <span tabindex="0"
            ><a href="localePath('/contacto')">{{ $t('contact') }}</a></span
          >
          <span tabindex="0"
            ><a href="localePath('/desayuna-con-manzanas')">{{
              $t('breakfast')
            }}</a></span
          >
          <span tabindex="0" class="featured-item"
            ><a href="localePath($t('kitdigital'))">{{
              $t('kitdigital')
            }}</a></span
          >
        </nav>
        <footer class="mt-auto flex flex-col gap-4 pt-10">
          <div
            id="info"
            class="flex flex-col gap-2 text-center text-xs font-thin"
          >
            <a href="localePath('/contacto')">{{ $t('oficinas') }}</a>
            <a href="mailto:info@lapometa.com">info@lapometa.com</a>
            <span>T:<a href="tel:+34973282570">(+34) 973 28 25 70</a></span>
          </div>
          <div
            id="footer-menu"
            class="flex flex-col text-center text-xs font-bold"
          >
            <a href="localePath($t('privacidad'))">{{ $t('privacidad') }}</a>
            <a href="localePath($t('cookies'))">{{ $t('cookies') }}</a>
            <a href="localePath($t('aviso'))">{{ $t('aviso') }}</a>
            <a href="localePath($t('map'))">{{ $t('map') }}</a>
          </div>
        </footer>
      </div>
      <div
        id="sidebar-visible"
        class="border-l border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 transition-all duration-500 relative z-10"
      >
        <div
          id="sidebarToggler"
          ref="sidebarToggler"
          class="sm:opacity-0 sm:pointer-events-none absolute top-0 -left-px text-white w-14 h-14 flex items-center justify-center text-xl bg-main-dark transition-all duration-500 z-20"
        >
          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="visible-content"
          class="transition-all duration-500 h-screen flex items-center justify-center sticky top-0"
        >
          <div class="grid items-center justify-items-center gap-5">
            <span>
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code) || ''"
                >{{ locale.code }}</NuxtLink
              >
            </span>
            <div class="msm:hidden cursor-pointer">
              <div class="burger black small">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a href="localePath('/desayuna-con-manzanas')">
              <div class="responsive-image w-6"></div
            ></a>
          </div>
        </div>

        <div
          class="logo-mini transition-all duration-500 absolute top-3 left-1/2 transform -translate-x-1/2 msm:hidden"
        ></div>
      </div>
    </div>
    <div
      id="content-margin"
      class="transition-all duration-500 min-h-screen h-full inline-block"
    ></div>
  </div>
</template>
<style lang="scss">
@screen msm {
  #content {
    flex: 0 0 100vw;
  }
  #wrapper {
    #content-margin {
      min-width: 0 !important;
    }
  }
  #wrapper:not(.open) {
    #sidebarToggler {
      @apply transform translate-x-full;
    }
    #sidebar-wrapper {
      #left-sideBar {
        transform: translateX(-100%);
      }
    }
  }
  #wrapper.open {
    #content {
      transform: translateX(calc(3.5rem + 16rem));
    }
    #left-sideBar {
      transform: translateX(0);
    }
  }
}
@screen sm {
  #sidebar-wrapper:not(.stick) {
    #left-sideBar {
      transform: translateX(-16rem);
    }
    &:hover {
      #left-sideBar {
        transform: translateX(0);
      }
    }
    &:not(:hover) {
      #content-margin {
        min-width: 3.5rem;
      }
    }
    &:not(:hover) {
      .logo-mini {
        @apply opacity-100;
      }
    }
  }
}

#wrapper {
  max-width: 100vw;
  .logo-mini {
    @apply opacity-0;
  }
}

.featured-item a {
  @apply bg-primary py-0.5 px-2 hover:bg-gray-700 font-bold text-main-dark;
}

#sidebar-wrapper {
  @apply transition-all duration-500  bg-white dark:bg-gray-900;
}
#sidebar-visible {
  flex: 0 0 3.5rem;
  width: 3.5rem;
}

.burger {
  @apply flex flex-col space-y-2;
  span {
    @apply bg-white;
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
      @apply bg-primary;
    }
  }
}
#menu {
  & > span {
    a,
    span {
      @apply transition-all duration-500  hover:text-primary;
    }
    .not-click {
      @apply transition-all duration-500  hover:text-primary uppercase cursor-pointer;
    }
    & > a {
      @apply uppercase cursor-pointer;
    }
    &:hover {
      .sub-menu {
        @apply max-h-96 pt-5 pb-3 opacity-100;
      }
    }
    .sub-menu {
      @apply transition-all duration-500  ml-3 h-full flex flex-col gap-3 max-h-0 overflow-hidden opacity-0;
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
