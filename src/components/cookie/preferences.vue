<template>
  <div class="settings-wrapper">
    <div class="top">
      <h2>{{ $t('cookies.settings') }}</h2>
      <p class="mt-4">{{ $t('cookies.info') }}</p>
    </div>
    <div class="content">
      <app-collapsable
        v-for="(cookieGroup, index) in mapedCookies"
        :key="index"
        :text="cookieGroup.type"
      >
        <div class="inner">
          <table class="prose msm:prose-sm max-w-none w-full">
            <tbody>
              <tr>
                <td>{{ $t('cookies.item.name') }}</td>
                <td class="msm:hidden">{{ $t('cookies.item.expires') }}</td>
                <td>{{ $t('cookies.item.desc') }}</td>
                <td class="text-right truncate"></td>
              </tr>
              <tr v-for="(cookie, i) in cookieGroup.cookies" :key="i">
                <td v-html="cookie.name"></td>
                <td class="msm:hidden" v-html="cookie.expires"></td>
                <td v-html="cookie.desc"></td>
                <td class="text-right">
                  <input
                    v-model="cookie.enabled"
                    type="checkbox"
                    @change="toggleCookie(cookie.obj)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </app-collapsable>
    </div>
    <div class="bottom">
      <div class="top">
        <app-button variant="void" @click.native="save(false, true)">{{
          $t('cookies.reject')
        }}</app-button>
        <app-button variant="void" @click.native="save(false)">{{
          $t('cookies.save')
        }}</app-button>
      </div>
      <app-button variant="black" @click.native="save(true)">{{
        $t('cookies.acceptAll')
      }}</app-button>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  useContext,
} from '@nuxtjs/composition-api'
import { useStorage } from '@vueuse/core'

export default defineComponent({
  setup(_props, { emit }) {
    const { $content, i18n } = useContext()

    const cookiesGroups = $content.getSettings()[i18n.locale].cookies

    const cookiesConfig = useStorage(
      'cookies-config',
      cookiesGroups
        .map((group: any) => {
          return [
            group.cookies.map((cookie: any) => {
              return {
                obj: cookie.obj,
                enabled: true,
              }
            }),
          ]
        })
        .flat(2)
    )

    const mapedCookies = computed(() =>
      cookiesGroups.map((group: any) => {
        return {
          type: group.type,
          cookies: group.cookies.map((cookie: any) => {
            return {
              name: cookie.name,
              expires: cookie.expires,
              desc: cookie.desc,
              obj: cookie.obj,
              enabled: cookiesConfig.value.find(
                (c: any) => c.obj === cookie.obj
              )?.enabled,
            }
          }),
        }
      })
    )

    const toggleCookie = (cookie: number) => {
      const toChange = cookiesConfig.value.find((c: any) => c.obj === cookie)
      if (toChange) {
        toChange.enabled = !toChange.enabled
      }
    }

    const save = (acceptAll: boolean = false, rejectAll: boolean = false) => {
      if (acceptAll) {
        cookiesConfig.value.forEach((c: any) => (c.enabled = true))
      }
      if (rejectAll) {
        cookiesConfig.value.forEach((c: any) => (c.enabled = false))
      }
      nextTick(() => {
        emit('save')
      })
    }

    return {
      cookiesGroups,
      cookiesConfig,
      mapedCookies,
      toggleCookie,
      save,
    }
  },
})
</script>
<style lang="scss">
.settings-wrapper {
  @apply grid gap-5;

  .bottom {
    @apply grid gap-5;

    .top {
      @apply grid md:grid-cols-2 gap-5;
    }
  }

  input {
    @apply text-primary-black focus:ring-black;
  }
}
</style>