<template>
  <Transition name="modal-open">
    <div v-if="isOpen" ref="modal" class="modal" :class="size" tabindex="-1">
      <div class="slot">
        <div class="relative h-full">
          <div v-if="card" class="card-wrapper">
            <div ref="slot" class="card">
              <div class="close" @click="close"><IconClose /></div>
              <slot />
            </div>
          </div>
          <div v-else ref="slot" class="h-full">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onClickOutside, onKeyUp } from '@vueuse/core'

import IconClose from '~icons/mdi/close'

export default defineComponent({
  components: {
    IconClose,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: null,
    },
  },
  emits: ['close'],
  setup(_props, { emit }) {
    const slot = ref()
    const modal = ref()
    const component = ref()

    const close = () => {
      emit('close')
    }

    onClickOutside(slot, () => {
      close()
    })
    onKeyUp('Escape', () => {
      close()
    })

    return {
      slot,
      component,
      modal,
      close,
    }
  },
})
</script>

<style lang="scss">
.modal-open-enter-active,
.modal-open-leave-active {
  @apply transition-all duration-200 ease-in-out;
  .slot {
    @apply transition-all duration-300;
  }
  @media (prefers-reduced-motion) {
    @apply transition-none;
  }
}
.modal-open-enter,
.modal-open-leave-to {
  @apply opacity-0;
  .slot {
    @apply translate-y-10;
  }
}
.modal {
  @apply fixed inset-0 z-[999] p-3;
  @apply bg-primary/70;
  @apply transition-all duration-200 ease-in-out;
  @apply flex items-start justify-center;

  &.md {
    .slot {
      @apply w-screen max-w-screen-md relative;
    }
  }
  &.sm {
    .slot {
      @apply w-screen max-w-screen-sm relative;
    }
  }
  &.xs {
    .slot {
      @apply w-screen max-w-md relative;
    }
  }

  &.full {
    .slot {
      @apply w-screen relative;
    }
  }

  .slot {
    @apply transition-all duration-300 h-full overflow-hidden;
  }

  &.visible {
    @apply opacity-100;
  }

  .card-wrapper {
    @apply h-full flex items-center pointer-events-none;

    .card {
      @apply bg-white p-5 pointer-events-auto shadow-xl w-full relative max-h-full overflow-y-auto;

      .close {
        @apply absolute top-0 right-0 z-10;
        @apply transition duration-300;
        @apply p-2.5 cursor-pointer;
      }
    }
  }
}
</style>
