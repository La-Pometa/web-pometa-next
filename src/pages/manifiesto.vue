<template>
  <section id="page-manifest">
    <header class="container margins text-center">
      <h1>
        {{ $t('manifest.title') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('manifest.subtitle') }}
      </h2>
      <h3
        class="title-2 max-w-screen-sm mx-auto"
        v-html="$t('manifest.claim')"
      ></h3>
    </header>
    <div class="first bg-white dark:bg-black">
      <div class="content">
        <div class="left">
          <blockquote
            class="title-2"
            v-html="$t('manifest.lefttext')"
          ></blockquote>
          <img
            class="arrow"
            src="@/assets/img/manifest/arrow-right.svg"
            alt=""
          />
        </div>
        <div class="right">
          <h4 class="title-2" v-html="$t('manifest.wewant')"></h4>
        </div>
        <div class="center">
          <h4
            class="title-2 text-center max-w-screen-sm mx-auto"
            v-html="$t('manifest.cocreate')"
          ></h4>
        </div>
      </div>
    </div>
    <div class="second">
      <img class="hand" src="@/assets/img/home/hand-apple.png" alt="" />
      <div class="content">
        <div class="left">
          <img class="bg-image" src="@/assets/img/manifest/lines.svg" alt="" />
          <img
            class="arrow"
            src="@/assets/img/manifest/arrow-white.svg"
            alt=""
          />
          <h4 class="title-2" v-html="$t('manifest.bottom.topleft')"></h4>
        </div>
        <div class="right">
          <h4 class="title-2" v-html="$t('manifest.bottom.topright')"></h4>
        </div>
        <div class="center">
          <cta-contact variant="light" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.content {
  @apply container margins-x grid lg:grid-cols-2 gap-28 lg:gap-44;
}
.right {
  @apply lg:pt-32;
}

.center {
  @apply lg:col-span-2;
}
.first {
  @apply mt-14 pb-10;
  .content {
    @apply -translate-y-12;
  }
  .left {
    @apply relative;
  }
  .right {
    @apply text-right;
  }

  .arrow {
    @apply absolute;
  }

  @screen lg {
    .arrow {
      @apply right-0 top-0 translate-x-[120%];
    }
  }

  @screen mlg {
    .arrow {
      @apply right-0 bottom-0 translate-y-full rotate-90 w-24;
    }
  }
}

.second {
  @apply bg-primary py-20 relative;

  .hand {
    @apply absolute top-0 right-0 mlg:w-44;
    @apply -translate-y-1/2;
  }

  .right {
    @apply text-center;
  }

  .left {
    @apply p-[13%] -m-[13%] relative flex items-center justify-center mlg:translate-x-8;

    .bg-image {
      @apply absolute w-full max-w-md mlg:max-w-[22rem] -translate-x-8;
    }

    h4 {
      @apply relative max-w-[24rem] mlg:max-w-[18rem];
    }
  }

  .arrow {
    @apply absolute;
  }

  @screen lg {
    .arrow {
      @apply bottom-0 translate-x-[150%] translate-y-1/3;
    }
  }

  @screen mlg {
    .arrow {
      @apply bottom-0 translate-y-1/3 -translate-x-[350%] rotate-90 w-16;
    }
  }
}
</style>
