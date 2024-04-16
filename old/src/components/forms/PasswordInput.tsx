import { type JSX } from 'solid-js';

import Input from '~/components/forms/Input';

type PasswordInputProps = RequiredPartial<
	JSX.InputHTMLAttributes<HTMLInputElement>,
	'autocomplete'
> & {
	errors?: ErrorInfo[] | string;
};

export default function PasswordInput(props: PasswordInputProps): JSXElement {
	return (
		<Input
			maxlength={100}
			minLength={8}
			name="password"
			placeholder="Mot de passe"
			required
			type="password"
			{...props}
		/>
	);
}
