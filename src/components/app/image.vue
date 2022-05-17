<template>
  <div class="responsive-image" :class="{ loaded }">
    <picture v-if="!format">
      <source v-if="!loaded && lazy" data="mini" :srcset="srcMini" />
      <source
        v-for="(src, index) in getSrcset"
        :key="index"
        :srcset="src.source_url"
        :type="src.mime_type"
      />
      <img
        ref="image"
        :src="srcImage"
        :alt="data.alt"
        :width="data.width"
        :height="data.height"
        :title="hasTitle ? (title ? title : data.title) : ''"
        :loading="lazy ? 'lazy' : 'default'"
      />
    </picture>
    <picture v-else>
      <img
        ref="image"
        :src="srcImage"
        :alt="data.alt"
        :width="data.width"
        :height="data.height"
        :title="hasTitle ? (title ? title : data.title) : ''"
        loading="lazy"
      />
    </picture>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    blur: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    data: { required: true },
    format: {
      type: String,
      default: null,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    hasTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      observer: null,
      intersected: false,
      elCopy: null,
      loaded: false,
      elWidth: 0,
      elHeight: 0,
    }
  },
  computed: {
    getSrcset() {
      if (this.elWidth < 150 || this.elHeight < 0) {
        return this.data.srcset
      }
      let sets = {}
      let lastKey = false
      for (const [key, src] of Object.entries(this.data.srcset)) {
        if (src.width <= this.elWidth || src.height <= this.elHeight) {
          if (lastKey) {
            const toSet = Object.entries(this.data.srcset).filter(
              (x) =>
                x[1].width === this.data.srcset[lastKey].width &&
                lastKey !== 'mini' &&
                lastKey !== 'mini_webp'
            )
            toSet.forEach((item) => {
              sets[item[0]] = this.data.srcset[item[0]]
            })

            lastKey = false
          }
          sets[key] = src
        } else {
          lastKey = key
          const [limitKey] = Object.entries(this.data.srcset)[
            Object.entries(this.data.srcset).length - 1
          ]
          if (key === limitKey) {
            const toSet = Object.entries(this.data.srcset).filter(
              (x) =>
                x[1].width === this.data.srcset[lastKey].width &&
                lastKey !== 'mini' &&
                lastKey !== 'mini_webp'
            )
            toSet.forEach((item) => {
              sets[item[0]] = this.data.srcset[item[0]]
            })

            lastKey = false
          }
        }

        if (src.mime_type === 'image/gif') {
          sets = {}
        }
      }

      return sets
    },
    srcImage() {
      return this.intersected
        ? this.loadImage()
        : this.lazy
        ? this.loadMini()
        : this.loadImage()
    },
    srcMini() {
      return this.loadMini()
    },
  },
  mounted() {
    if (this.lazy) {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.intersected = true
          this.observer.disconnect()
        }
      })
      this.observer.observe(this.$refs.image)
    }
    this.elWidth = this.$refs.image.offsetWidth
    this.elHeight = this.$refs.image.offsetHeight
  },
  unmounted() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    defaultImage() {
      if (!this.data.srcset?.mini) {
        return this.data.srcset?.full?.source_url
      }
      return this.data.srcset.mini_webp
        ? this.data.srcset.mini_webp.source_url
        : this.data.srcset.mini.source_url
    },
    loadMini() {
      return this.defaultImage()
    },
    loadImage() {
      const image =
        this.format && this.data.srcset[this.format]
          ? this.data.srcset[this.format].source_url
          : this.data.srcset.full
          ? this.data.srcset.full.source_url
          : this.data.srcset.full_webp.source_url

      if (this.loaded) {
        return image
      }

      if (this.lazy) {
        this.$refs.image.addEventListener('load', () => {
          this.loaded = true
          this.observer.disconnect()
        })
      }

      return image
    },
  },
})
</script>
<style lang="scss" scoped>
.responsive-image {
  @apply max-w-full overflow-hidden relative;

  &::after {
    content: '';
    @apply absolute inset-0 backdrop-blur-3xl;
  }
  &.loaded {
    &::after {
      @apply backdrop-blur-0;
    }
  }
  &.no-blur {
    &::after {
      @apply backdrop-blur-0;
    }
  }
}
picture {
  img {
  }
}
</style>
