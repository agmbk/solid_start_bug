import { Navigate, useLocation } from '@solidjs/router';


import { SITE_NAME } from '~/constants/seo';
import { notFoundUrl } from '~/utils/routing';
import { Title } from '@solidjs/meta';

export default function _404(): JSXElement {
	const location = useLocation();

	return (
		<>
			<Title>{SITE_NAME}</Title>
			<Navigate href={notFoundUrl(location)} />
		</>
	);
}
