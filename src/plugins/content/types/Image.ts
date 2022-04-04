/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */

export interface Image {
  width: number | string
  height: number | string
  file: string
  sizes: any
  image_meta: ImageMeta
  alt_text: string
  title: string
  pometaImages: number
  original_image?: string
}

export interface ImageMeta {
  aperture: string
  credit: string
  camera: string
  caption: string
  created_timestamp: string
  copyright: string
  focal_length: string
  iso: string
  shutter_speed: string
  title: string
  orientation: string
  keywords?: any[]
}
