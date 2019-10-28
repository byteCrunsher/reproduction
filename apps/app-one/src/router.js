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
	let newPath = '/' + to.path.split('/').pop();
	const matchingRoutes = router.options.routes.filter(
		route => route.path === newPath
	);
	const isPathInRoutes = matchingRoutes.length > 0;

	if (newPath === router.history.base || !isPathInRoutes) {
		newPath = '/';
	}

	let storagePath;

	if (router.currentRoute.path !== newPath) {
		router.push(newPath);
		storagePath = newPath;
	} else {
		storagePath = to.path;
	}

	localStorage.subAppRouteUpdate = storagePath;
});

export default router;
