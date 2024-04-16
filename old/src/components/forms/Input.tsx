import { type JSX } from 'solid-js';

import FormErrors from '~/components/forms/FormErrors';
import { clsx } from '~/utils/css';
import { splitProps } from '~/utils/solid';

import styles from './Input.module.scss';

type EmailInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & Props;

type Props = {
	class?: string;
	errors?: ErrorInfo[] | string;
};

export default function Input(props: EmailInputProps): JSXElement {
	const [customProps, emailProps] = splitProps<EmailInputProps, Props>(props, [
		'class',
		'errors',
	]);

	return (
		<div class={styles.wrapper}>
			<div class={styles.errors}>
				<FormErrors errors={customProps.errors} />
			</div>
			<input
				{...emailProps}
				class={clsx(customProps.errors && styles.errored, customProps.class)}
			/>
		</div>
	);
}
