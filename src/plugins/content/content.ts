import WPAPI from "wpapi";
export default class Content extends WPAPI {
	public path: WPAPI.WPRequestFactory
	public members: WPAPI.WPRequestFactory
	public projects: WPAPI.WPRequestFactory
	public landings: WPAPI.WPRequestFactory

	public constructor(apiUrl: string) {
		super({ endpoint: apiUrl })
		this.path = this.registerRoute('wp/v2', '/path')
		this.members = this.registerRoute('wp/v2', '/member')
		this.projects = this.registerRoute('wp/v2', '/project')
		this.landings = this.registerRoute('wp/v2', '/landing')
	}

}