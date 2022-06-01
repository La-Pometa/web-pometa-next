import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin(({ vueApp: vue }) => {
	vue.use(VueGtag, {
		config: {
			id: 'GTM-N6HVNW4'
		},
	})
})