<script>
export default {
  props: {
    slices: {
      type: Array,
      required: true,
    },
  },
  setup() {},
  render(h) {
    return h(
      'div',
      {
        attrs: { class: 'components' },
      },
      this.slices.map((slice) =>
        h('slice-' + slice.type, {
          props: { params: slice.params },
        })
      )
    )
  },
}
</script>

<style lang="scss">
.the-content {
  @apply container mx-auto py-5 px-3;
}
.components {
  @apply space-y-8 sm:space-y-16;

  .the-content:first-child {
    @apply mt-8 sm:mt-16;
  }
}
</style>
