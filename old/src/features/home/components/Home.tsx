import { A } from 'solid-start';

import { Path } from '~/config';
import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import Hero from './Hero';
import LaptopMockup from './mockup/LaptopMockup';
import TvMockup from './mockup/TvMockup';
import { type RegisterFormState } from './RegisterForm';
import Section from './Section';

import styles from './Home.module.scss';

export type HomeState = RegisterFormState;

export default function Home(): JSXElement {
	return (
		<>
			<Header
				accessoryRight={
					<A class={styles.loginButton} href={Path.LOGIN}>
						S'identifier
					</A>
				}
				class={styles.header}
				logoClass={styles.headerLogo}
			/>
			<main class={styles.main} role="main">
				<Hero />
				<Section>
					<TvMockup />
				</Section>
				<Section>
					<LaptopMockup />
				</Section>
			</main>
			<Footer class={styles.footer} withLinks />
		</>
	);
}
