import { useLocalePath, useSwitchLocalePath } from 'vue-i18n-routing'
import type { RawLocation, RouteLocation } from '@intlify/vue-router-bridge';
import type { Locale } from '@intlify/vue-i18n-bridge';
import { useI18n } from 'vue-i18n'
import { useI18nStore } from '@/stores/i18n';


export function localePath(route: RawLocation | RouteLocation, locale?: Locale) {
	const localePath = useLocalePath()
	return localePath(route, locale)
}

export function switchLocalePath(locale: string) {
	const router = useRouter()
	const i18nStore = useI18nStore()
	const { locale: currentLocale } = useI18n()

	const switchLocalePath = useSwitchLocalePath()

	const originalRoute = switchLocalePath(locale)

	const resolvedRoute = router.resolve({
		path: originalRoute,
	})

	const routeParams = i18nStore.getRouteParams()

	if (routeParams && locale in routeParams) {
		const newParams = routeParams[locale];

		if (Object.keys(newParams).length > 0) {
			for (const key in newParams) {
				if (key in resolvedRoute.params && routeParams[currentLocale.value][key] === resolvedRoute.params[key]) {

					resolvedRoute.params[key] = newParams[key]
				}
			}
		}
	}

	const newRoute = router.resolve(resolvedRoute)

	return newRoute.path
}

export default { localePath, switchLocalePath };