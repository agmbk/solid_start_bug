import { preventDefault } from '@solid-primitives/event-listener';
import { type Location, useSearchParams } from '@solidjs/router';
import { createEffect, createSignal, onMount } from 'solid-js';
import { A, Title, useNavigate } from 'solid-start';
import { useLocation } from 'solid-start/router';

import AnimatedMosaic from '~/components/AnimatedMosaic';
import EmailInput from '~/components/forms/EmailInput';
import FormErrors from '~/components/forms/FormErrors';
import PasswordInput from '~/components/forms/PasswordInput';
import SubmitInput from '~/components/forms/SubmitInput';
import { Path } from '~/config';

import Footer from '~/layouts/Footer';
import Header from '~/layouts/Header';
import { clsx } from '~/utils/css';
import { inputValue } from '~/utils/events';

import styles from './login.module.scss';
import { voidFunction } from '~/utils';

export type LoginParams = {
	p?: string;
};

export type LoginState = {
	email?: string;
};

export default function Page(): JSXElement {
	const navigate = useNavigate();
	const location: Location<LoginState> = useLocation();
	const [searchParams] = useSearchParams<Partial<LoginParams>>();

	const [email, setEmail] = createSignal<string>('');
	const [password, setPassword] = createSignal<string>('');
	const [errors, setErrors] = createSignal<Record<string, ErrorInfo[]>>();
	const [globalError, setGlobalError] = createSignal<string>('');

	let emailInput!: HTMLInputElement;
	let passwordInput!: HTMLInputElement;

	onMount(() => {
		setEmail(emailInput.value);
		setPassword(passwordInput.value);
	});

	createEffect(() => {
		if (!emailInput.checkValidity()) return;

		const state: LoginState = {
			email: email(),
		};
		history.replaceState(state, '');
	});

	return (
		<>
			<Title>Connexion</Title>
			<AnimatedMosaic class={styles.mosaic} />
			<Header class={styles.header} logoClass={styles.headerLogo} />
			<main class={styles.main} role="main">
				<form class={styles.form} onSubmit={preventDefault(voidFunction)}>
					<h1>Connexion</h1>
					<div class={styles.inputs}>
						<EmailInput
							errors={errors()?.email}
							onInput={inputValue(setEmail)}
							ref={emailInput}
							value={location.state?.email ?? ''}
						/>
						<PasswordInput
							autocomplete="current-password"
							errors={errors()?.password}
							onInput={inputValue(setPassword)}
							ref={passwordInput}
						/>
						{/*<A href={Path.LOGIN}>Mot de passe oublié ?</A> todo */}
					</div>
					<div class={clsx(styles.inputs, styles.submitContainer)}>
						<SubmitInput submitting={false} value="S'identifier" />
						<p class={styles.paragraph}>
							Première fois ?{' '}
							<A
								href={Path.HOME}
								state={{
									email: location.state?.email ?? '',
								}}>
								Register now
							</A>
						</p>
						<div class={styles.errors}>
							<FormErrors errors={globalError()} />
						</div>
					</div>
				</form>
			</main>
			<Footer class={styles.footer} withLinks />
		</>
	);
}
