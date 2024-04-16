import { type Accessor } from 'solid-js';

import { clsx } from '~/utils/css';

import styles from './Logo.module.scss';
import { A, useMatch } from '@solidjs/router';

type LogoProps = {
	class?: string;
	disabled?: boolean;
	height?: number | string;
	href?: string;
	state?: unknown;
};

export default function Logo(props: LogoProps): JSXElement {
	const href: Accessor<string> = () => props.href ?? '/';
	const match = useMatch(href);
	const disabled: Accessor<boolean> = () => !!match() || !!props.disabled;

	return (
		<A
			aria-current={match() ? 'page' : undefined}
			aria-disabled={disabled()}
			aria-label="logo"
			class={clsx(styles.logo, props.class, disabled() && styles.disabled)}
			href={href()}
			state={props.state}
			tabIndex={disabled() ? -1 : undefined}
		>HOME</A>
	);
}
