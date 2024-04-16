import { A } from 'solid-start';

import { clsx } from '~/utils/css';

import styles from './Footer.module.scss';

export type FooterProps = {
	class?: string;
	withLinks?: boolean;
};

export default function Footer(props: FooterProps): JSXElement {
	return (
		<footer class={clsx(styles.footer, props.class)}>
			{props.withLinks && (
				<ul>
					<li>
						<a href="/#faq">FAQ</a>
					</li>
					<li>
						<a href="/#">S'abonner</a>
					</li>

					<li>
						<A activeClass={styles.hidden} href="/login">
							S'identifier
						</A>
					</li>
				</ul>
			)}
		</footer>
	);
}
