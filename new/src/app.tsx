import { MetaProvider, Title } from '@solidjs/meta';
import { Router, RouteSectionProps } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { ErrorBoundary, onMount, Suspense } from 'solid-js';

import ErrorMessage from '~/components/error/ErrorMessage';
import { SITE_NAME } from '~/constants/seo';

// eslint-disable-next-line no-restricted-imports
import '~/assets/styles/global.scss';

export default function App(): JSXElement {
	return (
		<Router
			root={props => (
				<ErrorBoundary fallback={ErrorMessage}>
					<ApplyBaseProviders {...props}>
						<Suspense>
							<Main {...props}>{props.children}</Main>
						</Suspense>
					</ApplyBaseProviders>
				</ErrorBoundary>
			)}>
			<FileRoutes />
		</Router>
	);
}

function Main(props: RouteSectionProps): JSXElement {
	onMount(() => {
		history.scrollRestoration = 'manual';

		window.scrollTo = document.body.scrollTo.bind(document.body);
		window.scrollBy = document.body.scrollBy.bind(document.body);
		window.scroll = document.body.scroll.bind(document.body);
	});

	return (
		<>
			<Title>{SITE_NAME}</Title>
			{props.children}
		</>
	);
}

function ApplyBaseProviders(props: RouteSectionProps): JSXElement {
	return (
		<MetaProvider>
			{props.children}
		</MetaProvider>
	);
}
