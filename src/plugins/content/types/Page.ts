/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
// Generated by https://quicktype.io
import type { Block } from '../../blocks/components/types'
import type { HeadTag } from './HeadTag'
import type { Image } from './Image'
import type { Translation } from './Post'
export interface Page {
  id: number
  date: string
  date_gmt: string
  guid: Content
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Content
  content: Content
  excerpt: Content
  author: number
  featured_media: number
  parent: number
  menu_order: number
  comment_status: string
  ping_status: string
  template: string
  meta: any[]
  author_info: AuthorInfo
  tax_info: any[]
  meta_info: MetaInfo
  slices: Slice[]
  featured_source: boolean
  current_lang: string
  translation: Translation
  yoast_head: string
  yoast_head_json: PageYoastHeadJSON
  lang: string
  translations: Translations
  pll_sync_post: any[]
  head_tags: HeadTag[]
  blocks: Block[],
  _links: PageLinks
  _embedded: Embedded
}


export interface Embedded {
  author: EmbeddedAuthor[]
}

export interface EmbeddedAuthor {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: Record<string, string>
  pll_duplicate_content: boolean
  yoast_head: string
  yoast_head_json: AuthorYoastHeadJSON
  head_tags: HeadTag[]
  _links: AuthorLinks
}

export interface AuthorLinks {
  self: About[]
  collection: About[]
}

export interface About {
  href: string
}

export interface AuthorYoastHeadJSON {
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_url: string
  og_site_name: string
  og_image: OgImage[]
  twitter_card: string
  schema: Schema
}

export interface OgImage {
  url: string
}

export interface Robots {
  index: string
  follow: string
  'max-snippet': string
  'max-image-preview': string
  'max-video-preview': string
}

export interface Schema {
  '@context': string
  '@graph': Graph[]
}

export interface Graph {
  '@type': string
  '@id': string
  url?: string
  name?: string
  description?: string
  potentialAction?: PotentialAction[]
  inLanguage?: string
  isPartOf?: Breadcrumb
  breadcrumb?: Breadcrumb
  itemListElement?: ItemListElement[]
  image?: GraphImage
  sameAs?: string[]
  mainEntityOfPage?: Breadcrumb
  datePublished?: string
  dateModified?: string
}

export interface Breadcrumb {
  '@id': string
}

export interface GraphImage {
  '@type': string
  '@id': string
  inLanguage: string
  url: string
  contentUrl: string
  caption: string
}

export interface ItemListElement {
  '@type': string
  position: number
  name: string
  item?: string
}

export interface PotentialAction {
  '@type': string
  target: string[] | TargetClass
  'query-input'?: string
}

export interface TargetClass {
  '@type': string
  urlTemplate: string
}

export interface PageLinks {
  self: About[]
  collection: About[]
  about: About[]
  author: ReplyElement[]
  replies: ReplyElement[]
  'version-history': VersionHistory[]
  'predecessor-version': PredecessorVersion[]
  'wp:attachment': About[]
  curies: Cury[]
}

export interface ReplyElement {
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface AuthorInfo {
  id: string
  name: string
  image: Content
  url: string
}

export interface Content {
  rendered: string
}

export interface Slice {
  type: string
  position: number
  params: Params
}

export type Params = Record<string, any>

export interface Box {
  type: string
  position: number
  description: string
  title: string
  link: string
  image: Image
  color: string
}
export interface Slide {
  position: number
  type: string
  title: string
  html: string
  link: string
  image: Image
  color: string
}

export interface MetaInfo {
  inline_featured_image: string
  _edit_last: string
  _edit_lock: string
  '_yoast_wpseo_estimated-reading-time-minutes': string
  content_group: string
  slider: string
  slider_description: string
  _animac_slider: string
  _animac_slider_description: string
}

export interface Translations {
  ca: number
  es: number
  en: number
}

export interface PageYoastHeadJSON {
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_url: string
  og_site_name: string
  article_modified_time: string
  twitter_card: string
  schema: Schema
}
