/* @refresh reload */
import { ErrorBoundary, Show } from 'solid-js';
import { NoHydration } from 'solid-js/web';
import { Body, FileRoutes, Head, Html, Routes, Scripts, Title } from 'solid-start';

import ErrorMessage from '~/components/error/ErrorMessage';
import config from '~/config';
import { SITE_NAME, THEME_COLOR } from '~/constants/seo';

import './global';

// eslint-disable-next-line no-restricted-imports
import '~/assets/styles/global.scss';

const GA_TRACKING_ID = '';

export default function Root(): JSXElement {
	return (
		<Html lang="fr">
			<Head>
				<Title>{SITE_NAME}</Title>
				<NoHydration>
					<meta charset="UTF-8" />
					<meta content="width=device-width, initial-scale=1" name="viewport" />
					<meta content="dark light" name="color-scheme" />
					{/* PWA */}
					{/*<link href='/manifest.webmanifest' rel='manifest' />*/}
					<meta content={THEME_COLOR} name="theme-color" />
					{/* Icons */}
					{/*<link href='/icon.svg' rel='icon' type='image/svg+xml' />*/}
					{/*<link href='/favicon.ico' rel='icon' type='image/x-icon' />*/}
					{/*<link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />*/}
					{/*<link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />*/}
					{/*<link href='/favicon-48x48.png' rel='icon' sizes='48x48' type='image/png' />*/}
					{/*<link href='/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png' />*/}
					{/*<link*/}
					{/*	href='/android-icon-144x144.png'*/}
					{/*	rel='icon'*/}
					{/*	sizes='144x144'*/}
					{/*	type='image/png'*/}
					{/*/>*/}
					{/*<link*/}
					{/*	href='/android-icon-192x192.png'*/}
					{/*	rel='icon'*/}
					{/*	sizes='192x192'*/}
					{/*	type='image/png'*/}
					{/*/>*/}
					{/*<link*/}
					{/*	href='/android-icon-512x512.png'*/}
					{/*	rel='icon'*/}
					{/*	sizes='512x512'*/}
					{/*	type='image/png'*/}
					{/*/>*/}
					{/* Translate */}
					<meta content="fr" http-equiv="content-language" />
					<meta content="notranslate" name="google" />
					{/* SEO */}
					<meta content={SITE_NAME} name="title" />
					<meta content="General" name="rating" />
					<meta content={SITE_NAME} name="application-name" />
					<meta content={SITE_NAME} name="copyright" />
					{/* Apple */}
					<meta content="yes" name="mobile-web-app-capable" />
					<meta content="yes" name="apple-mobile-web-app-capable" />
					<meta content={SITE_NAME} name="apple-mobile-web-app-title" />
					<meta content={THEME_COLOR} name="apple-mobile-web-app-status-bar-style" />
					{/*<link color={COLOR} href='/safari-pinned-tab.svg' rel='mask-icon' />*/}
					{/*<link href='/apple-icon-57x57.png' rel='apple-touch-icon' sizes='57x57' />*/}
					{/*<link href='/apple-icon-60x60.png' rel='apple-touch-icon' sizes='60x60' />*/}
					{/*<link href='/apple-icon-72x72.png' rel='apple-touch-icon' sizes='72x72' />*/}
					{/*<link href='/apple-icon-76x76.png' rel='apple-touch-icon' sizes='76x76' />*/}
					{/*<link href='/apple-icon-114x114.png' rel='apple-touch-icon' sizes='114x114' />*/}
					{/*<link href='/apple-icon-120x120.png' rel='apple-touch-icon' sizes='120x120' />*/}
					{/*<link href='/apple-icon-144x144.png' rel='apple-touch-icon' sizes='144x144' />*/}
					{/*<link href='/apple-icon-152x152.png' rel='apple-touch-icon' sizes='152x152' />*/}
					{/*<link href='/apple-icon-180x180.png' rel='apple-touch-icon' sizes='180x180' />*/}
					{/* Microsoft */}
					{/*<meta content={SITE_NAME} name='msapplication-tooltip' />*/}
					{/*<meta content='no' name='msapplication-tap-highlight' />*/}
					{/*<meta content='/mstile-150x150.png' name='msapplication-TileImage' />*/}
					{/*<meta content={THEME_COLOR} name='msapplication-TileColor' />*/}
					{/*<meta content={THEME_COLOR} name='msapplication-navbutton-color' />*/}
					{/*<meta content='/' name='msapplication-starturl' />*/}
					{/*<meta*/}
					{/*	content={`name=${SITE_NAME};action-uri=/;icon-uri=/favicon.ico`}*/}
					{/*	name='msapplication-task'*/}
					{/*/>*/}
					<script
						textContent={`function gtag(){dataLayer.push(arguments)}window.dataLayer||=[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}");`}/>
				</NoHydration>
			</Head>
			<Body>
				<ErrorBoundary fallback={ErrorMessage}>
					{/*<Suspense fallback={<HomeScreen />}>*/}
					<Routes>
						<FileRoutes />
					</Routes>
					{/*</Suspense>*/}
				</ErrorBoundary>
				<Scripts />
				<Show when={config.PROD}>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
				</Show>
			</Body>
		</Html>
	);
}
