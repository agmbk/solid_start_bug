import { createMiddleware } from '@solidjs/start/middleware';

const log = (...args: unknown[]): void => {
	console.debug('[', new Date().toISOString(), ']', '-', ...args);
};

export default createMiddleware({
	onBeforeResponse: [
		(evt): void => {
			log(
				'Response',
				evt.response.status,
				'|',
				'Elapsed',
				Math.round(performance.now() - evt.locals.perf),
				'ms',
			);
		},
	],
	onRequest: [
		(evt): void => {
			evt.locals.perf = performance.now();
			// todo
			// evt.locals.nonce = crypto.randomBytes(16).toString('base64');

			log(evt.request.method, evt.request.url, evt.request.headers.get('user-agent'));
		},
	],
});
