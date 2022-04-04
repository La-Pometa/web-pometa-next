import WPAPI from "wpapi";

export default class Content {
	private wp: WPAPI;

	public constructor(apiUrl: string) {
		this.wp = new WPAPI({ endpoint: apiUrl });
	}
}