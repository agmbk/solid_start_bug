import { type JSX } from 'solid-js';

import Input from '~/components/forms/Input';

type EmailInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
	errors?: ErrorInfo[] | string;
};

export default function EmailInput(props: EmailInputProps): JSXElement {
	return (
		<Input
			autocomplete="email"
			maxlength={100}
			name="email"
			placeholder="Adresse e-mail"
			required
			type="email"
			{...props}
		/>
	);
}
