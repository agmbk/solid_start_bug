import { createEffect, createSignal, For, on, Show } from 'solid-js';
import { A } from 'solid-start';

import Logo from '~/components/images/Logo';
import { type Path } from '~/config';
import useWindowListener from '~/hooks/useWindowListener';
import { clsx } from '~/utils/css';

import styles from './Header.module.scss';

export type NavigationItem = {
	href: Path;
	label: string;
};

export type HeaderProps = {
	accessoryRight?: HTMLElement | JSXElement;
	class?: string;
	// Fixed at the top of the page with a black background when scrolled
	fixed?: boolean;
	logoClass?: string;
	logoDisableHref?: boolean;
	logoHref?: string;
	logoState?: unknown;
	navigationItems?: NavigationItem[];
};

export default function Header(props: HeaderProps): JSXElement {
	const scroll = useWindowListener('scroll');
	const [isTop, setIsTop] = createSignal(true);

	createEffect(
		on(scroll, () => {
			props.fixed && setIsTop(scrollY === 0);
		}),
	);

	return (
		<header
			class={clsx(
				styles.header,
				props.class,
				props.fixed && styles.fixed,
				props.fixed && !isTop() && styles.headerBlack,
			)}>
			<div class={styles.wrapper}>
				<Logo
					class={clsx(styles.logo, props.logoClass)}
					disabled={props.logoDisableHref}
					href={props.logoHref}
					state={props.logoState}
				/>
				<Show when={props.navigationItems?.length}>
					<nav class={styles.nav}>
						<For each={props.navigationItems}>
							{({ href, label }): JSXElement => (
								<A activeClass={styles.disabled} href={href}>
									{label}
								</A>
							)}
						</For>
					</nav>
				</Show>
			</div>
			{props.accessoryRight}
		</header>
	);
}
