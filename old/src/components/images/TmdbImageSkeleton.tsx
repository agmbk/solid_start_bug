import { type JSX } from 'solid-js';

import { clsx } from '~/utils/css';
import { splitProps } from '~/utils/solid';

import styles from './TmdbImage.module.scss';

export type TmdbImageSkeletonProps = JSX.ImgHTMLAttributes<HTMLDivElement> & Props;

type Props = {
	class?: string;
};

export default function TmdbImageSkeleton(props: TmdbImageSkeletonProps): JSXElement {
	const [componentProps, imgProps] = splitProps<TmdbImageSkeletonProps, Props>(props, ['class']);

	return <div {...imgProps} class={clsx(styles.image, componentProps.class)} />;
}
