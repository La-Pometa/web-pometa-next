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
  <div id="archive-members">
    <div v-if="members" class="content">
      <div class="featured-wrapper">
        <div class="featured-members">
          <div
            v-for="(member, index) in featuredMembers"
            :key="index"
            class="member featured"
          >
            <div v-if="member.featured_source" class="image">
              <app-image :data="member.featured_source"></app-image>
              <div class="overlay" v-html="member.content.rendered"></div>
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
            </div>
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
      <div class="featured-wrapper">
        <div class="featured-members">
          <div v-for="index in 2" :key="index" class="member featured">
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
  </div>
</template>
<style lang="scss">
#archive-members {
  .content {
    @apply space-y-16;
  }

  .featured-wrapper {
    @apply max-w-screen-md mx-auto;
  }
  .featured-members {
    @apply grid justify-center justify-items-stretch gap-8;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .members {
    @apply sm:grid sm:gap-7;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

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
      .name {
        @apply mt-5;
      }

      &:nth-child(even) {
        .image {
          &:before {
            @apply translate-y-3;
          }
        }
      }

      .image {
        .overlay {
          @apply msm:opacity-0;
        }

        @screen sm {
          &:after,
          &:before {
            @apply transition duration-300 origin-bottom-left;
          }

          &:before {
            content: '';
            @apply absolute inset-0 bg-primary;
            @apply -translate-y-3 translate-x-3;
          }
        }
      }
    }

    .position {
      @apply text-center;
    }

    .name {
      @apply text-center z-20 relative -mt-4;
      @apply leading-[4rem];

      .featured {
        @apply leading-[4rem];
      }
    }

    .claim {
      @apply text-center -mt-4;
    }

    .image {
      @apply aspect-w-9 aspect-h-12;

      .overlay {
        @apply absolute inset-0 flex flex-col items-center justify-center z-10;
        @apply font-butler text-white text-2xl text-center bg-dark-100/70 p-5;
        @apply sm:opacity-0 transition duration-300;
      }

      img {
        @apply absolute w-full h-full object-cover grayscale;
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
</style>
