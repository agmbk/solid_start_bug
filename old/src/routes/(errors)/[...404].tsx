import { Navigate } from '@solidjs/router';
import { Title } from 'solid-start';
import { useLocation } from 'solid-start/router';

import { SITE_NAME } from '~/constants/seo';
import { notFoundUrl } from '~/utils/routing';

export default function _404(): JSXElement {
	const location = useLocation();

	return (
		<>
			<Title>{SITE_NAME}</Title>
			<Navigate href={notFoundUrl(location)} />
		</>
	);
}
