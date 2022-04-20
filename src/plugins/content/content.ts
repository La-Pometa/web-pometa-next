import WPAPI from "wpapi";
export default class Content extends WPAPI {

	public constructor(apiUrl: string) {
		super({ endpoint: apiUrl })
	}
}