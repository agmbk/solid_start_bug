import { createHandler, renderStream, StartServer } from 'solid-start/entry-server';

export default createHandler(
	({ forward }) => {
		return async (event): Promise<Response> => {
			const request = event.request;

			console.debug(
				`[${new Date().toISOString()}] ${request.method} ${request.url} ${Array.from(
					request.headers.entries(),
				)}`,
			);
			return forward(event);
		};
	},
	renderStream(event => <StartServer event={event} />),
);
