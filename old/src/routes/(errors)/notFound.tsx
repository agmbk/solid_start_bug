import { Title, useNavigate } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

import { Path } from '~/config';
import { SITE_NAME } from '~/constants/seo';

import styles from './notFound.module.scss';

export default function Page(): JSXElement {
	const navigate = useNavigate();

	function redirectToHome(): void {
		const navigate_to = Path.FEED;

		if (top) top.location.href = navigate_to;
		else navigate(navigate_to, { replace: true });
	}

	return (
		<>
			<HttpStatusCode code={404} />
			<Title>{SITE_NAME}</Title>
			<main class={styles.main} role="main">
				<h1 class="font-bold text-xl">Oh non ! La page n'existe pas.</h1>

				<button class={styles.button} onClick={redirectToHome}>
					Retourner à l'accueil
				</button>
			</main>
		</>
	);
}
