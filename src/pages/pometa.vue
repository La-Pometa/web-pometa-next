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
    <div v-if="members" class="content">
      <div class="featured-members">
        <div
          v-for="(member, index) in featuredMembers"
          :key="index"
          class="member featured"
        >
          <div v-if="member.featured_source" class="image">
            <app-image :data="member.featured_source"></app-image>
          </div>
          <div class="inner">
            <div class="name title-3">
              {{ member.embedded.postmeta.membersName }}
              <span class="featured">
                {{ member.embedded.postmeta.membersSurname }}
              </span>
            </div>
            <div
              class="position"
              v-html="member.embedded.postmeta.membersTitle"
            ></div>
            <div class="claim" v-html="member.content.rendered"></div>
          </div>
        </div>
      </div>
      <div class="members">
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
          <div
            class="claim"
            v-html="member.embedded.postmeta.membersTitle"
          ></div>
        </div>
      </div>
    </div>
    <div v-else class="content">
      <div class="featured-members">
        <div v-for="index in 1" :key="index" class="member featured">
          <div class="image">
            <PuSkeleton height="100%" />
          </div>
          <div class="inner">
            <div class="name title-3">
              <PuSkeleton />
            </div>
            <div class="position"><PuSkeleton :count="3" /></div>
            <div class="claim"><PuSkeleton :count="3" /></div>
          </div>
        </div>
      </div>
      <div class="members">
        <div v-for="index in 6" :key="index" class="member">
          <div class="image">
            <PuSkeleton height="100%" />
          </div>
          <div class="title-3 mt-2">
            <PuSkeleton />
          </div>
          <div>
            <PuSkeleton />
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
    @apply space-y-16;

    .featured-members {
      @apply grid grid-flow-col max-w-screen-lg mx-auto;
    }
    .members {
      @apply sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-7;

      @screen msm {
        @apply snap-mandatory snap-x overflow-x-auto;
        @apply flex -m-5 pb-3;

        &::-webkit-scrollbar {
          display: none;
        }

        .member {
          @apply snap-center;
          --slider-margin: 1.25rem;

          margin: 0 calc(var(--slider-margin) / 4);
          flex: 0 0 calc(100% - (var(--slider-margin) * 2));

          &:first-child {
            margin-left: var(--slider-margin);
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

      &.featured {
        @apply grid lg:grid-cols-12 gap-5 lg:gap-10;

        .image {
          @apply lg:col-span-5;
        }

        .inner {
          @apply lg:col-span-7;
        }

        .position {
          @apply mt-3 lg:mt-5;
        }

        .claim {
          @apply mt-8 lg:mt-16;
        }
      }

      .name {
        @apply leading-[4rem];
      }

      &:not(.featured) {
        .name {
          @apply text-center z-20 relative -mt-4;

          .featured {
            @apply leading-[4rem];
          }
        }
        .claim {
          @apply text-center -mt-4;
        }
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

            &:before {
              @apply -translate-y-3 translate-x-3;
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
      }
    }
  }
}
</style>
