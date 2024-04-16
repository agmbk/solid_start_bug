import Logo from '~/components/images/Logo';

import styles from './HomeScreen.module.scss';

export default function HomeScreen(): JSXElement {
	return (
		<main class={styles.wrapper} role="main">
			<Logo />
		</main>
	);
}
