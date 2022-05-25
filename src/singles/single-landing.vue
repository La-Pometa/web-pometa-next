<script setup lang="ts">
import type { Post } from '../plugins/content/types'

const { $content } = useNuxtApp()

const { data } = defineProps<{
  data: Post
}>()

const [formOpen, toggleForm] = useToggle(false)

const content = $content.getMeta(data, 'content')
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
    <slice-header
      :params="{
        title: $content.getMeta(data, 'title')
          ? data.embedded.postmeta.title
          : data.title.rendered,
        image: data.featured_source,
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
    <section v-if="$content.getMeta(data, 'slider')" class="slider">
      <slider-video-image
        :slides="$content.getMeta(data, 'slider')"
      ></slider-video-image>
    </section>
    <section v-if="content" class="common content-columns">
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
      v-if="data.content.rendered"
      class="content"
      v-html="data.content.rendered"
    ></section>
    <section v-if="!$content.getMeta(data, 'links').length" class="common cta">
      <cta-contact></cta-contact>
    </section>
    <section v-if="$content.getMeta(data, 'links').length" class="common links">
      <cta-contact-links
        :links="$content.getMeta(data, 'links')"
        :subtitle="$content.getMeta(data, 'linksSubtitle')"
      ></cta-contact-links>
    </section>
  </div>
</template>
<style lang="scss">
#single-landing {
  @apply margins-y space-y-8 sm:space-y-16 msm:pt-0;
  .content {
    @apply container margins-x;
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

  .content-columns {
    @apply grid gap-20;

    .top {
      @apply max-w-lg mx-auto relative;

      .floating-arrow {
        @apply absolute right-0 sm:top-0 msm:bottom-0 w-20 sm:w-28 translate-y-full sm:translate-x-full sm:translate-y-1/2;
      }
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
      @apply flex gap-10 justify-center flex-wrap;

      .column {
        @apply w-full max-w-[20rem];
      }
    }
  }
}
</style>
