<script setup lang="ts">
import type { Post } from '../plugins/content/types'

const { $content } = useNuxtApp()

const { data } = defineProps<{
  data: Post
}>()

const [formOpen, toggleForm] = useToggle(false)

const content = $content.getMeta(data, 'content')
const subcontent = $content.getMeta(data, 'subcontent')
</script>
<template>
  <div id="single-landing">
    <div class="top-form">
      <app-button @click="toggleForm()">{{ $t('landing.callyou') }}</app-button>
      <client-only>
        <teleport to="#modal-outlet">
          <app-modal
            :is-open="formOpen"
            :card="true"
            size="xs"
            @close="toggleForm(false)"
          >
            <form-cf7
              v-if="$content.getMeta(data, 'form')"
              v-html="$content.getMeta(data, 'form')"
            ></form-cf7>
          </app-modal>
        </teleport>
      </client-only>
    </div>
    <header
      v-if="$content.getMeta(data, 'header') === 'color'"
      class="header-color"
      :style="'--header-color:' + $content.getMeta(data, 'headerColor')"
    ></header>
    <slice-header
      v-else
      :params="{
        title: $content.getMeta(data, 'title')
          ? data.embedded.postmeta.title
          : data.title.rendered,
        image: data.featured_source,
        video: data.embedded.postmeta.video,
        size: 'desktop',
        titleOverlay: true,
      }"
    ></slice-header>
    <section class="common title">
      <h2
        v-if="$content.getMeta(data, 'title')"
        class="title-dearest"
        v-html="data.title.rendered"
      ></h2>
    </section>
    <section class="common description">
      <blockquote
        v-if="$content.getMeta(data, 'description')"
        v-html="$content.getMeta(data, 'description')"
      ></blockquote>
    </section>
    <section v-if="$content.getMeta(data, 'slider').length" class="slider">
      <slider-video-image
        :slides="$content.getMeta(data, 'slider')"
      ></slider-video-image>
    </section>
    <section
      v-if="content && (content.title || content.html)"
      class="common content-columns"
    >
      <div class="top">
        <h3 v-html="content.title"></h3>
        <div class="text" v-html="content.html"></div>
        <img
          src="@/assets/img/single-landing/arrow-down.svg"
          alt=""
          class="floating-arrow"
        />
      </div>
      <div class="columns">
        <div v-for="(box, index) of content.boxes" :key="index" class="column">
          <h3 v-html="box.title"></h3>
          <h4 v-html="box.subtitle"></h4>
          <div class="text" v-html="box.html"></div>
        </div>
      </div>
    </section>
    <section
      v-if="subcontent && (subcontent.title || subcontent.html)"
      class="common sub-content-columns"
    >
      <div class="top">
        <h3 v-html="subcontent.title"></h3>
        <div class="text" v-html="subcontent.html"></div>
      </div>
      <div class="columns">
        <div
          v-for="(box, index) of subcontent.boxes"
          :key="index"
          class="column"
        >
          <div v-if="box.image" class="image">
            <app-image :data="box.image"></app-image>
          </div>
          <div class="wrapper">
            <h3 v-html="box.title"></h3>
            <div class="text" v-html="box.html"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="data.content.rendered"
      class="content"
      v-html="data.content.rendered"
    ></section>
    <section v-if="!$content.getMeta(data, 'links').length" class="common cta">
      <cta-contact></cta-contact>
    </section>
    <section v-if="$content.getMeta(data, 'links').length" class="links">
      <div class="inner common">
        <cta-contact-links
          :links="$content.getMeta(data, 'links')"
          :subtitle="$content.getMeta(data, 'linksSubtitle')"
        ></cta-contact-links>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
#single-landing {
  @apply margins-y space-y-8 sm:space-y-16 msm:pt-0;
  .content {
    @apply container margins-x;
  }

  section.links {
    @apply bg-white dark:bg-dark-800 py-14 msm:py-7 -mb-20 msm:-mb-10 #{!important};
  }

  .title {
    h2 {
      @apply text-center;
    }
  }

  .description {
    blockquote {
      @apply text-lg md:text-3xl;

      br {
        @apply msm:hidden;
      }

      strong,
      b {
        @apply font-butler;
      }
    }
  }

  .top-form {
    @apply container margins-x flex justify-end sticky top-10 z-40 -mb-12 sm:-mb-20;
  }

  .sub-content-columns {
    @apply grid gap-20;

    .top {
      @apply max-w-screen-md mx-auto relative;
    }

    .text {
      @apply text-center text-xl;
    }

    h3 {
      @apply text-center text-primary font-bold font-butler text-xl sm:text-3xl;
    }

    h4 {
      @apply font-semibold uppercase text-center mb-6;
    }

    .columns {
      @apply grid md:grid-cols-2 gap-y-10;

      .image {
        @apply aspect-w-13 aspect-h-7;

        img {
          @apply absolute w-full h-full object-cover;
        }
      }

      .wrapper {
        @apply p-10;
      }
    }
  }
  .content-columns {
    @apply grid gap-20;

    .top {
      @apply max-w-lg mx-auto relative;

      .floating-arrow {
        @apply absolute right-0 sm:top-0 msm:bottom-0 w-20 sm:w-28 translate-y-full sm:translate-x-full sm:translate-y-1/2;
      }
    }

    .text {
      @apply text-center text-lg sm:text-xl;
    }

    h3 {
      @apply text-center text-primary font-bold font-butler text-2xl sm:text-3xl;
    }

    h4 {
      @apply font-semibold uppercase text-center mb-6;
    }

    .columns {
      @apply flex gap-10 justify-center flex-wrap;

      .column {
        @apply w-full max-w-[20rem];
      }
    }
  }
}
</style>
<style lang="scss">
#single-landing .content {
  .pg-row-col2 {
    @apply grid sm:grid-cols-2 gap-3;

    img {
      @apply w-full;
    }
  }

  h3 {
    @apply font-butler font-bold text-lg;
  }

  img {
    @apply my-5;
  }

  .landing-icons-grid .image_with_text > p {
    flex-direction: row !important;
    height: auto !important;
  }
  .landing-icons-grid .image_with_text a {
    flex: 0 0 100px;
    text-align: right !important;
    margin-top: unset !important;
    margin-left: auto;
  }
  .kit-digital-solucion .wpb_wrapper > .vc_separator + .wpb_text_column {
    border-left: 1px solid #cccccc;
    padding-left: 15px;
    margin-left: 15px;
  }
  .kit-digital-solucion + .kit-digital-solucion {
    margin-top: 35px;
  }

  .landing-icons-grid .image_with_text img {
    width: 80px !important;
    height: 80px !important;
  }
  .landing-icons-grid .landing-bullet-title {
    font-size: 24px !important;
    text-align: left !important;
    line-height: 28px !important;
  }

  @media (max-width: 768px) {
    .landing-icons-grid .image_with_text img {
      width: 80px !important;
      height: 80px !important;
    }
    .landing-icons-grid .landing-bullet-title {
      font-size: 20px !important;
      line-height: 24px !important;
    }
    .landing-icons-grid .image_with_text > p {
      gap: 5px !important;
    }
  }

  h2,
  h1 {
    @apply py-5;
  }

  table {
    @apply w-full max-w-none prose dark:prose-invert my-5;
  }

  img {
    @apply inline-block;
  }

  .landing-icons-grid .landing-bullet-title {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
  .landing-icons-grid .landing-bullet-title {
    font-size: 24px !important;
    text-align: left !important;
    line-height: 28px !important;
  }

  .landing-icons-grid .image_with_text a {
    margin-top: auto;
    font-size: 12px;
  }

  .landing-icons-grid .image_with_text a {
    flex: 0 0 100px;
    text-align: right !important;
    margin-top: unset !important;
    margin-left: auto;
  }

  .image_with_text {
    & > p {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 170px;
      gap: 10px;
      padding: 10px;
      box-sizing: border-box;
      transition: all 0.4s;
    }

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      filter: hue-rotate(166deg) opacity(0.3);
    }

    & > p {
      flex-direction: row !important;
      height: auto !important;
    }
  }

  .landing {
    &-box {
      @apply border p-5 my-4 border-primary;
    }
    &-featured {
      @apply p-5 my-4 bg-primary;
    }
  }
}
</style>
