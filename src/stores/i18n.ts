import { defineStore } from "pinia"
import type { Translation } from "../plugins/content/types/Post";

export const useI18nStore = defineStore('i18n', () => {

	const routeParamsByLang = ref<Translation>();

	function setRouteParams(value: Translation) {
		routeParamsByLang.value = value;
	}

	function getRouteParams() {
		return routeParamsByLang.value;
	}

	return {
		getRouteParams,
		setRouteParams
	}
})