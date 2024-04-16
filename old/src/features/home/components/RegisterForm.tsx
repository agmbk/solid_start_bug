import { preventDefault } from '@solid-primitives/event-listener';
import { type Location } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { useLocation } from 'solid-start/router';

import EmailInput from '~/components/forms/EmailInput';
import SubmitInput from '~/components/forms/SubmitInput';
import { clsx } from '~/utils/css';
import { inputValue } from '~/utils/events';

import styles from './RegisterForm.module.scss';

export type RegisterFormState = {
	email?: string;
};

export type RegisterFormProps = {
	class?: string;
};

export default function RegisterForm(props: RegisterFormProps): JSXElement {
	const location: Location<RegisterFormState> = useLocation();
	const [email, setEmail] = createSignal<string>(location.state?.email ?? '');

	let input!: HTMLInputElement;

	function handleRegister(): void {
		console.log('handleRegister');
	}

	return (
		// eslint-disable-next-line solid/reactivity
		<form class={clsx(styles.form, props.class)} onSubmit={preventDefault(handleRegister)}>
			<p class={styles.text}>
				Lorem ipsum dolor sit amet. Register now
			</p>
			<div class={styles.inputWrapper}>
				<EmailInput
					class={styles.mailInput}
					onInput={inputValue(setEmail)}
					ref={input}
					value={email()}
				/>
				<SubmitInput class={styles.submitButton} value="Commencer" />
			</div>
		</form>
	);
}
