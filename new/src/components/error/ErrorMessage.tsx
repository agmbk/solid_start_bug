import { isServer } from 'solid-js/web';

import { reportError } from '~/utils';

import styles from './ErrorMessage.module.scss';
import { onMount } from 'solid-js';

export default function ErrorMessage(error: unknown, _reset: VoidFunction): JSXElement {
	if (error instanceof TypeError) {
		// Failed to load a chunk after a new release
		if (
			/The requested module|Failed to fetch dynamically imported module/.test(error.message)
		) {
			if (!isServer) {
				location.reload();
				// eslint-disable-next-line solid/components-return-once
				return null;
			}
		}
	}

	onMount(() => {
		reportError(error, true);
	});

	return (
		<div class={styles.container}>
			<h1>Désolé, une erreur est survenue</h1>
			<button onClick={(): void => window.location.reload()}>Réessayer</button>
		</div>
	);
}
