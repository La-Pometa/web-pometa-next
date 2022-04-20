import { defineStore } from "pinia"

export const useI18nStore = defineStore('i18n', () => {

	const routeParamsByLang = ref<Record<string, Record<string, string>>>();

	function setRouteParams(value: Record<string, Record<string, string>>) {
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