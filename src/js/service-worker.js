import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
	'http://localhost:9090/news',
	new NetworkFirst({
		cacheName: 'news',
	}),
);
