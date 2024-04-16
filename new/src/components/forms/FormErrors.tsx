import { For, Show } from 'solid-js';

import { isArray } from '~/utils/validation';

import styles from './FormErrors.module.scss';

type FormErrorsProps = {
	errors?: ErrorInfo[] | string;
};

/**
 * Display form errors.
 *
 * Needs to be wrapped due to multiple children possible
 * @param props
 * @constructor
 */
export default function FormErrors(props: FormErrorsProps): JSXElement {
	return (
		<Show when={props.errors}>
			<Show
				fallback={<p class={styles.error}>{props.errors as string}</p>}
				when={isArray(props.errors)}>
				<For each={props.errors as ErrorInfo[]}>
					{(error): JSXElement => <p class={styles.error}>{error.message}</p>}
				</For>
			</Show>
		</Show>
	);
}
