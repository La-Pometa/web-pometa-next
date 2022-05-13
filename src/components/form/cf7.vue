<template>
  <div class="cf7-form">
    <slot></slot>
  </div>
</template>
<script>
export default defineComponent({
  data() {
    return {
      elm: null,
      inputs: [],
      render: '',
      formId: 0,
      submitElm: null,
      acceptanceElm: null,
    }
  },
  mounted() {
    const form = this.$el.querySelector('form')
    this.elm = form
    this.submitElm = form.querySelector('[type="submit"]')
    this.acceptanceElm = form.querySelector('.wpcf7-acceptance input')

    if (this.acceptanceElm) {
      this.submitElm.disabled = true

      this.acceptanceElm.addEventListener('change', () => {
        if (this.acceptanceElm.checked) {
          this.submitElm.disabled = false
        } else {
          this.submitElm.disabled = true
        }
      })
    }

    form.addEventListener('submit', async (evt) => {
      evt.preventDefault()
      this.removeAllSpans()
      this.fetchAllInputs()
      this.submitElm.classList.add('loading')
      this.parseResponse(
        await this.$content.postFormCf7(this.inputs, this.formId)
      )
      this.submitElm.classList.remove('loading')
    })
  },
  methods: {
    removeAllSpans() {
      this.elm
        .querySelectorAll('span.error_message, span.success_message')
        .forEach((elm) => {
          elm.parentElement.removeChild(elm)
        })
      this.elm.querySelectorAll('.invalid').forEach((elm) => {
        elm.classList.remove('invalid')
      })
    },
    fetchAllInputs() {
      this.inputs = []
      const allFields = this.elm.querySelectorAll(
        'input:not([type="submit"]), textarea, select'
      )
      allFields.forEach((elm) => {
        let field

        if (elm.type === 'checkbox') {
          if (elm.checked) {
            field = { name: elm.name, value: elm.value }
          } else {
            return
          }
        } else if (elm.type === 'file') {
          if (elm.files.length > 0) {
            field = { name: elm.name, value: elm.files[0] }
          } else {
            return
          }
        } else {
          field = { name: elm.name, value: elm.value }
        }

        if (field.name === '_wpcf7') {
          this.formId = parseInt(field.value)
        }

        this.inputs.push(field)
      })
    },
    parseResponse(res) {
      if (res.status === 'validation_failed') {
        res.invalid_fields.forEach((field) => {
          field.elm = this.elm.querySelector(`${field.into} > *`)

          const errorSpan = document.createElement('span')
          errorSpan.innerHTML = field.message
          errorSpan.classList.add('error_message')
          field.elm.parentElement.appendChild(errorSpan)

          field.elm.classList.add('invalid')
          const listener = () => {
            field.elm.classList.remove('invalid')
            field.elm.parentElement.removeChild(errorSpan)
            field.elm.removeEventListener('focus', listener)
          }
          field.elm.addEventListener('focus', listener)
        })
      } else if (this.submitElm) {
        this.elm.reset()
        const successSpan = document.createElement('span')
        successSpan.innerHTML = res.message
        successSpan.classList.add('success_message')
        this.submitElm.parentElement.appendChild(successSpan)
        setTimeout(() => {
          this.submitElm.parentElement.removeChild(successSpan)
        }, 3000)
      }
    },
  },
})
</script>
<style lang="scss">
.cf7-form {
  [type='text'],
  [type='email'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select {
    max-width: 100%;
    @apply dark:placeholder:text-white w-full border-0 border-b-2 focus:placeholder:text-primary border-b-primary bg-transparent focus:ring-0 focus:ring-secondary/20 px-0;

    &.invalid {
      @apply border-b-red-400;
    }
  }
  select {
    @apply focus:text-primary;
  }
  form > p {
    @apply mb-5;

    &:last-of-type {
      @apply mb-0;
    }
  }

  .two-cols {
    @apply grid sm:grid-cols-2 gap-5;
  }
  .three-cols {
    @apply grid grid-cols-3 gap-5;
  }
  .max-sm {
    @apply sm:max-w-sm;
  }

  .wpcf7-radio {
    @apply flex flex-col;
  }

  .error_message {
    @apply text-xs text-red-600 mt-2 block;
  }
  .success_message {
    @apply text-xs text-green-500 mt-3 block;
  }
  textarea {
    @apply resize-none h-32;
  }
  .lopd {
    @apply text-justify;
    font-size: 0.65rem /* 12px */;
    line-height: 0.75rem /* 16px */;
  }
  [type='radio'] {
    @apply mr-2;
  }
  [type='checkbox'] {
    @apply inline-block border-primary rounded-full text-secondary focus:border-secondary checked:border-secondary focus:ring-4 focus:ring-offset-0 focus:ring-secondary/20 mr-2;

    & ~ span {
      @apply text-sm;
    }
  }
  [type='submit'] {
    @apply w-auto block px-8 mx-auto relative outline-none py-2 cursor-pointer hover:bg-secondary hover:text-white transition-all bg-gray-100 shadow-sm focus:border-secondary focus:ring-4 focus:ring-offset-0 focus:ring-secondary/20;

    &.loading {
      @apply bg-secondary transition-all text-white;
      animation: bg-fade 0.8s ease-in infinite;
    }

    &[disabled] {
      @apply pointer-events-none opacity-50;
    }
  }
  .lopd ~ span {
    @apply text-xs;
  }
  .info {
    @apply text-sm opacity-50;
  }
  .input-inline {
    & > * {
      @apply inline;
    }
    input:not([type='checkbox']),
    select {
      @apply w-auto;
    }
  }
}

@keyframes bg-fade {
  0% {
    @apply opacity-100;
    transform: scale(1);
  }
  50% {
    @apply opacity-50;
    transform: scale(0.97);
  }
  100% {
    @apply opacity-100;
    transform: scale(1);
  }
}
</style>
