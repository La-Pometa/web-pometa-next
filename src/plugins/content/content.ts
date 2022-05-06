import WPAPI from "wpapi";
export default class Content extends WPAPI {
	public path: WPAPI.WPRequestFactory
	public members: WPAPI.WPRequestFactory

	public constructor(apiUrl: string) {
		super({ endpoint: apiUrl })
		this.path = this.registerRoute('wp/v2', '/path')
		this.members = this.registerRoute('wp/v2', '/member')
	}

}