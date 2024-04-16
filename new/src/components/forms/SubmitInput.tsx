import { clsx } from '~/utils/css';

import LoaderSVG from '~/assets/svg/loader/dual-ring-loader.svg?component-solid';

import styles from './SubmitInput.module.scss';

export type FormProps = {
	class?: string;
	submitting?: boolean;
	value?: string;
};

export default function SubmitInput(props: FormProps): JSXElement {
	return (
		<div
			class={clsx(
				styles.submitContainer,
				props.class,
				props.submitting && styles.submitting,
			)}>
			<input disabled={props.submitting} role="button" type="submit" value={props.value} />
			<LoaderSVG height="50%" width="50%" />
		</div>
	);
}
