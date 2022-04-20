import { BlockRender } from "./components";
import * as blocks from '~~/src/blocks';

export default defineNuxtPlugin((app) => {
	app.vueApp.component("BlockRender", BlockRender);

	return {
		provide: {
			blocks
		}
	}
})