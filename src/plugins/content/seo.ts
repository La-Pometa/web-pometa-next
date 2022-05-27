import type { Page, Post } from "./types"

export class Seo {

	public getTitle(page: Post | Page): string | undefined {
		if ('head_tags' in page) {
			return page.head_tags
				.filter((tag) => tag.tag === 'title')
				.map((tag) => tag.content).pop()
		}
		return undefined
	}

	public getMeta(page: Post | Page): any {
		if ('head_tags' in page) {
			return page.head_tags
				.filter((tag) => tag.tag === 'meta')
				.map((tag) => tag.attributes)
		}
		return undefined
	}

	public getLink(page: Post | Page): any {
		if ('head_tags' in page) {
			return page.head_tags
				.filter((tag) => tag.tag === 'link')
				.map((tag) => tag.attributes)
		}
		return undefined
	}

	public getHead(page: Post | Page): any {
		return {
			titleTemplate: this.getTitle(page),
			meta: this.getMeta(page),
			link: this.getLink(page),
		}
	}
}
