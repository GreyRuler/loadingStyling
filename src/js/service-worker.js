import { registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';

// eslint-disable-next-line no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
	'https://loadingstyling.onrender.com/news',
	new NetworkFirst({
		cacheName: 'news',
	}),
);
