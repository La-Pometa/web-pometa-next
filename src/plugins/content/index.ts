import Content from "./content";
import { Seo } from "./seo";

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	return {
		provide: {
			content: new Content(config.WP_URL),
			seo: new Seo()
		}
	}
})