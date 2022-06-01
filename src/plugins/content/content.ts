import WPAPI from "wpapi";
import axios from "axios";
import type { Post } from "./types";
export default class Content extends WPAPI {
	public path: WPAPI.WPRequestFactory
	public members: WPAPI.WPRequestFactory
	public projects: WPAPI.WPRequestFactory
	public landings: WPAPI.WPRequestFactory
	public cookies: WPAPI.WPRequestFactory
	private endpoint: string

	public constructor(apiUrl: string) {
		super({ endpoint: apiUrl })
		this.endpoint = apiUrl
		this.path = this.registerRoute('wp/v2', '/path')
		this.members = this.registerRoute('wp/v2', '/members')
		this.projects = this.registerRoute('wp/v2', '/projects')
		this.landings = this.registerRoute('wp/v2', '/landings')
		this.cookies = this.registerRoute('wp/v2', '/cookies')
	}

	async postFormCf7(fields: any[], formId: number) {
		const formData = new FormData()

		fields.forEach((field) => {
			formData.append(field.name, field.value)
		})

		const res = await axios({
			method: 'post',
			url: `${this.endpoint}/contact-form-7/v1/contact-forms/${formId}/feedback`,
			data: formData,
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		return res.data
	}

	public getMeta(post: Post, key: string): any | null {
		if (key in post.embedded.postmeta) {
			return post.embedded.postmeta[key]
		}

		return null
	}
}