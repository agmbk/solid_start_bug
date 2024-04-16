import AnimatedMosaic from '~/components/AnimatedMosaic';

import RegisterForm from './RegisterForm';

import styles from './Hero.module.scss';

export default function Hero(): JSXElement {
	return (
		<section class={styles.heroWrapper}>
			<AnimatedMosaic class={styles.mosaic} />
			<div class={styles.contentWrapper}>
				<h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
					feugiat.
				</h1>
				<p class={styles.catchPhrase}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
					feugiat.
				</p>
				<RegisterForm class={styles.registerForm} />
			</div>
		</section>
	);
}
