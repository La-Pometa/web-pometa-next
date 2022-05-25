<template>
  <div :class="{ open: isOpen }" class="collapsable-container">
    <div class="title" @click="toggle()">
      <span>{{ text }}</span> <IconPlus v-if="!isOpen" /><IconMinus v-else />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useToggle } from '@vueuse/core'
import IconPlus from '~icons/ic/sharp-plus'
import IconMinus from '~icons/ic/sharp-minus'

export default defineComponent({
  components: {
    IconPlus,
    IconMinus,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    openByDefault: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const [isOpen, toggle] = useToggle(props.openByDefault)

    return {
      isOpen,
      toggle,
    }
  },
})
</script>
<style lang="scss">
.collapsable-container {
  &:not(.open) {
    .content {
      display: none;
    }
  }

  .title {
    @apply flex gap-3 justify-between items-center py-2;
    @apply cursor-pointer;

    span {
      @apply flex items-center uppercase text-xs font-semibold;
    }
  }

  .content {
    @apply relative;
  }
}
</style>
