// @refresh reload

import { createHandler, StartServer } from '@solidjs/start/server';
import { THEME_COLOR } from '~/constants/seo';
import config from '~/config';
import { Show } from 'solid-js';

declare module '@solidjs/start/server' {
	interface RequestEventLocals {
		nonce: string;
		perf: number;
	}
}

const GA_TRACKING_ID = '';

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => {
			return (
				<html
					lang="fr"
					style={{
						'background-color': THEME_COLOR,
					}}>
				<head>
					<meta charset="UTF-8" />
					<meta content="width=device-width, initial-scale=1" name="viewport" />
					<meta content="dark light" name="color-scheme" />
					{assets}
					<script
						textContent={`function gtag(){dataLayer.push(arguments)}window.dataLayer||=[],gtag("js",new Date),gtag("config","${GA_TRACKING_ID}");`} />
				</head>
				<body>
				<div
					id="app">
					{children}
				</div>
				{scripts}
				<Show when={config.PROD}>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
				</Show>
				</body>
				</html>
			);
		}}
	/>
));

