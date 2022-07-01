
import type { RouteLocation } from "vue-router"
import { useRedirectsStore } from "@/stores/redirects"

export default defineNuxtPlugin((app) => {

	const PGRedirectCheck = () => {

		const { list: redirects } = useRedirectsStore()

		const { ssrContext } = app;
		const router = useRouter();

		const doCheck = (to: RouteLocation) => {
			const thisred = redirects.find(redirect => redirect.from === to.path);

			if (thisred) {
				const code = thisred.code || 301;
				return { code, location: thisred.to }
			}

			return null
		}
		if (ssrContext) {
			const { event, url } = ssrContext;
			const to = router.resolve(url);
			const { res } = event

			const checked = doCheck(to)

			if (checked) {
				res.writeHead(checked.code, { Location: checked.location });
				res.end();
			}

		}

		router.beforeEach((to, _from) => {
			const checked = doCheck(to)

			if (checked) {
				return checked.location;
			}
		});

	}

	return {
		provide: { PGRedirectCheck }
	}

})