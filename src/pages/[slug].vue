<script setup lang="ts">
import { createError } from 'h3'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from 'vue-i18n-routing'
import { useI18nStore } from '../stores/i18n'
import type { Page, Post } from '../plugins/content/types'
const localePath = useLocalePath()

const router = useRouter()
const { ssrContext, payload } = useNuxtApp()

const route = useRoute()
const { $content, $seo } = useNuxtApp()
const { locale, fallbackLocale } = useI18n()


const { slug } = route.params
const key = `${slug}_${locale.value}`;
const { data, error } = await useAsyncData<Post | Page>(
  key,
  () => $content.path().slug(slug.toString()).param('lang', locale.value).get()
)

if (error.value) {

  delete payload.data[key]
  delete payload._errors[key]


  const errorCaptured = error.value as any

  const redirections = errorCaptured.response.body.redirections || []
  const redirectFrom = localePath(`/${slug.toString()}`);
  const redirectTo = redirections.find(redirect => redirect.from === redirectFrom);

  if (redirectTo) {

    if (ssrContext) {
      const { res } = ssrContext.event
      res.writeHead(redirectTo.code || 301, { Location: redirectTo.to });
      res.end();
    } else {
      router.push({ path: redirectTo.to })
    }

  } else {
    throwError(
      createError({
        statusCode: errorCaptured.status,
        message: JSON.parse(errorCaptured.response.text).message,
      })
    )
  }


}
const i18nStore = useI18nStore()

i18nStore.setRouteParams(data.value.translation)

useHead($seo.getHead(data.value as Post))

</script>
<template>
  <component :is="`single-${data.type}`" v-if="data" :data="data"></component>
</template>
