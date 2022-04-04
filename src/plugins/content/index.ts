import Content from "./content";
import { SliceRender } from "./components"

export default defineNuxtPlugin((app) => {
	app.vueApp.component("SliceRender", SliceRender);

	const config = useRuntimeConfig();

	return {
		provide: {
			content: new Content(config.WP_URL)
		}
	}
})