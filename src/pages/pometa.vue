<script setup lang="ts">
import { useLocalePath } from 'vue-i18n-routing'
import { useI18n } from 'vue-i18n'
import type { ArchiveResponse, Post } from '@/plugins/content/types'

const localePath = useLocalePath()

const { $content } = useNuxtApp()

const { locale } = useI18n()

const { data: membersArchive, pending } = await useLazyAsyncData<
  ArchiveResponse<Post>
>(`members_${locale.value}`, () =>
  $content
    .members()
    .param('lang', locale.value)
    .orderby('menu_order')
    .order('asc')
    .perPage(99)
    .get()
)

const members = computed(() =>
  membersArchive.value
    ? membersArchive.value.entries.filter(
        (member) => !member.embedded.postmeta.membersFeatured
      )
    : null
)
const featuredMembers = computed(() =>
  membersArchive.value
    ? membersArchive.value.entries.filter(
        (member) => member.embedded.postmeta.membersFeatured
      )
    : null
)
</script>
<template>
  <section id="page-pometa">
    <header class="text-center">
      <h1 class="title">
        {{ $t('pometa.title') }} <br />
        <span class="featured"> {{ $t('pometa.subtitle') }} </span>
      </h1>
      <h3
        class="title-2 max-w-screen-sm mx-auto"
        v-html="$t('pometa.claim')"
      ></h3>
    </header>
    <div class="content">
      <div v-if="members" class="members">
        <div v-for="(member, index) in members" :key="index" class="member">
          <div v-if="member.featured_source" class="image">
            <app-image :data="member.featured_source"></app-image>
            <div class="overlay" v-html="member.content.rendered"></div>
          </div>
          <div class="name title-3">
            {{ member.embedded.postmeta.membersName }}
            <span class="featured">
              {{ member.embedded.postmeta.membersSurname }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <cta-contact />
  </section>
</template>
<style lang="scss">
#page-pometa {
  @apply container margins space-y-10 sm:space-y-14;

  .content {
    .members {
      @apply sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-7;

      @screen msm {
        @apply snap-mandatory snap-x overflow-x-auto;
        @apply flex -m-3 pb-3;

        &::-webkit-scrollbar {
          display: none;
        }

        .member {
          @apply snap-center;

          margin: 0 calc(0.75rem / 4);
          flex: 0 0 calc(100% - (0.75rem * 2));

          &:first-child {
            margin-left: 0.75rem;
          }
        }

        &:after {
          content: '';
          @apply block pr-3;
        }
      }
    }
    .member {
      @apply relative;

      .name {
        @apply text-center z-20 relative -mt-4;
      }

      .image {
        @apply aspect-w-9 aspect-h-12;

        .overlay {
          @apply absolute inset-0 flex items-center justify-center z-10;
          @apply font-butler text-white text-2xl text-center bg-dark-100/70 p-5;
          @apply sm:opacity-0 transition duration-300;
        }

        img {
          @apply absolute w-full h-full object-cover grayscale z-10;
        }
      }

      &.featured {
        .image {
          @screen sm {
            &:after,
            &:before {
              @apply transition duration-300 origin-bottom-left;
            }

            &:before {
              content: '';
              @apply absolute inset-0 bg-primary;
            }

            &:after {
              content: '';
              @apply absolute inset-0 border border-primary;
            }
          }
        }
      }
      /* 
      &:not(.featured) {
        .image {
          @screen sm {
            &:before {
              @apply transition duration-300 origin-bottom-left;
            }

            &:before {
              content: '';
              @apply absolute inset-0 bg-primary;
            }
          }
        }
      } */

      &:hover {
        .overlay {
          @apply opacity-100;
        }

        .image {
          &:after {
            @apply -translate-y-6 translate-x-6;
          }
          &:before {
            @apply -translate-y-3 translate-x-3;
          }
        }
      }
    }
  }
}
</style>
