import Vue from 'vue';
import Router from 'vue-router';

import One from './views/One.vue';
import Two from './views/Two.vue';

Vue.use(Router);

const router = new Router({
	base: '/app-one/',
	mode: 'history',
	routes: [
		{
			path: '/',
			component: One,
		},
		{
			path: '/two',
			component: Two,
		},
	],
});

if (window.location !== window.parent.location) {
	const browserUrl = top.location.href;
	history.replaceState(null, null, browserUrl);
}

router.afterEach((to, from) => {
	console.log({ urlToAppend: to.path });
	localStorage.subAppRouteUpdate = to.path;
});

export default router;
