import { type Location } from '@solidjs/router';

import { Path } from '~/config';


export function getFullUrl(location: Location | URL): string {
	return location.pathname + location.hash + location.search;
}

export function notFoundUrl(location: Parameters<typeof getFullUrl>[0]): string {
	const params = {
		p: getFullUrl(location),
	};
	return `${Path.NOT_FOUND}?${new URLSearchParams(params)}`;
}
