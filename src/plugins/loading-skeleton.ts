import Skeleton from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"

export default defineNuxtPlugin(({ vueApp: vue }) => {
	vue.use(Skeleton);
})