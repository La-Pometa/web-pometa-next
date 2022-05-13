import { defineStore } from "pinia"
import type { Translation } from "../plugins/content/types/Post";

export const useI18nStore = defineStore('i18n', () => {

	let routeParamsByLang: Translation = {};

	function setRouteParams(value: Translation) {
		routeParamsByLang = value;
	}

	function getRouteParams() {
		return routeParamsByLang;
	}

	return {
		getRouteParams,
		setRouteParams
	}
})