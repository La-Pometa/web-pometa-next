import Content from "./content";

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	return {
		provide: {
			content: new Content(config.WP_URL)
		}
	}
})