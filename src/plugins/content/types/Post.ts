/* eslint-disable camelcase */
export interface Content {
  rendered: string
}

export interface AuthorInfo {
  id: string
  name: string
  image: Content
  url: string
}

export interface MetaInfo {
  _edit_last: string
  _edit_lock: string
  _yoast_wpseo_content_score: string
  '_yoast_wpseo_estimated-reading-time-minutes': string
  _wpb_vc_js_status: string
}

export interface Robots {
  index: string
  follow: string
  'max-snippet': string
  'max-image-preview': string
  'max-video-preview': string
}

export interface Breadcrumb {
  '@id': string
}

export interface ItemListElement {
  '@type': string
  position: number
  name: string
  item?: string
}

export interface Logo {
  '@type': string
  '@id': string
  inLanguage: string
  url: string
  contentUrl: string
  width: number
  height: number
  caption: string
}

export interface TargetClass {
  '@type': string
  urlTemplate: string
}
export interface PotentialAction {
  '@type': string
  target: string[] | TargetClass
  'query-input'?: string
}

export interface TwitterMisc {
  'Tiempo de lectura': string
}

export interface Graph {
  '@type': string
  '@id': string
  name?: string
  url?: string
  sameAs?: string[]
  logo?: Logo
  image?: Breadcrumb
  description?: string
  publisher?: Breadcrumb
  potentialAction?: PotentialAction[]
  inLanguage?: string
  isPartOf?: Breadcrumb
  datePublished?: string
  dateModified?: string
  breadcrumb?: Breadcrumb
  itemListElement?: ItemListElement[]
}

export interface Schema {
  '@context': string
  '@graph': Graph[]
}

export interface YoastHeadJSON {
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  article_publisher: string
  article_modified_time: string
  twitter_card: string
  twitter_site: string
  twitter_misc: TwitterMisc
  schema: Schema
}

export interface Post {
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
  embedded: PostEmbedded
  ping_status: string
  template: string
  meta: any[]
  author_info: AuthorInfo
  tax_info: any[]
  meta_info: MetaInfo
  featured_source: boolean
  yoast_head: string
  yoast_head_json: YoastHeadJSON
}

export interface PostEmbedded {
  postmeta: Record<string, any>;
  taxes: any[];
  taxonomies: Taxonomies;
  author: Author;
}

export interface Author {
  id: string;
  name: string;
  image: any;
  url: string;
}

export interface Taxonomies {
  membertipus: any[];
}
