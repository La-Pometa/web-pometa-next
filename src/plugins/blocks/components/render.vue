<script setup lang="ts">
import type { VNode } from 'vue'
import { h } from 'vue'
import type { Block } from './types'

const { $blocks } = useNuxtApp()

const props = defineProps<{ blocks: Block[] }>()

// function that converts to an string from kebab case to camel case with the first letter capitalized
const toUpperCamelCase = (str: string) =>
  str
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^[a-z]/, (g) => g.toUpperCase())

const getHtmlParams = (html: string) => {
  const params = html.match(/<([a-z]+)([^>]*)>/)

  if (params) {
    const paramsAsObject = {}

    params[2].split(/\s(?=(?:[^"]|"[^"]*")*$)/).forEach((param) => {
      if (param) {
        const [key, value] = param.split('=')

        paramsAsObject[key] = value ? value.replace(/"/g, '') : ''
      }
    })

    return paramsAsObject
  }

  return null
}

const getHtmlContent = (html: string) => {
  const content = html.match(/<[a-z]+\s*[^>]*>([\s\S]*)<\/[a-z]+>/)?.[1]

  if (content) {
    return content
  }

  return ''
}

const getHtmlTag = (html: string) => {
  const tag = html.match(/<([a-z]+)/)

  if (tag) {
    return tag[1]
  }

  return null
}

const generateVnodeTreeFromString = (html: string) => {
  const tag = getHtmlTag(html)
  const params = getHtmlParams(html)
  const content = getHtmlContent(html)

  if (tag) {
    return h(tag, params, content ? generateVnodeTreeFromString(content) : null)
  }

  return html
}

const generateVnodesWithChildren = (blocks: Block[]): VNode[] => {
  return blocks.map(
    ({ blockName, attrs, innerBlocks, innerHTML, innerContent }) => {
      if (blockName && toUpperCamelCase(blockName) in $blocks) {
        const component = $blocks[toUpperCamelCase(blockName)]

        const vnode: VNode = h(
          component,
          {
            props: attrs,
          },
          innerBlocks.length ? generateVnodesWithChildren(innerBlocks) : null
        )

        return vnode
      } else if (innerContent) {
        const tag = getHtmlTag(innerHTML)
        const content = getHtmlContent(innerHTML)

        console.log(
          innerContent.map((string: string | null) => {
            if (string === null) {
              return null
            }

            return {
              tag: getHtmlTag(string),
            }
          })
        )

        const vnode: VNode = h(
          tag,
          getHtmlParams(innerHTML),
          innerBlocks.length
            ? generateVnodesWithChildren(innerBlocks)
            : content
            ? generateVnodeTreeFromString(content)
            : null
        )

        return vnode
      } else {
        return h('div', {
          domProps: {
            innerHTML,
          },
        })
      }
    }
  )
}

const render = () => {
  if (props.blocks.length) {
    return h(
      'div',
      {
        class: 'block-render',
      },
      generateVnodesWithChildren(props.blocks)
    )
  }
}
</script>

<template>
  <render />
</template>

<!-- <style lang="scss">
.the-content {
  @apply container mx-auto py-5 px-3;
}
.components {
  @apply space-y-8 sm:space-y-16;

  .the-content:first-child {
    @apply mt-8 sm:mt-16;
  }
}
</style> -->
