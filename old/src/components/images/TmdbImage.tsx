import { type JSX } from 'solid-js';

import { TMDB_IMAGE_ORIGIN } from '~/constants/tmdb';
import { clsx } from '~/utils/css';
import { splitProps } from '~/utils/solid';

import styles from './TmdbImage.module.scss';

export type BackDropSize = 'original' | 'w300' | 'w780' | 'w1280';
export type PosterSize = 'original' | 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780';
export type StillSize = 'original' | 'w92' | 'w185' | 'w300';
export type ProfileSize = 'h632' | 'original' | 'w45' | 'w185';
export type LogoSize = 'original' | 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500';

export type TmdbImageProps = JSX.ImgHTMLAttributes<HTMLImageElement> & Props;

type Props = {
	class?: string;
	size: BackDropSize | LogoSize | PosterSize | ProfileSize | StillSize;
	src: string;
};

export function tmdbImagePath(
	path: string,
	size: BackDropSize | LogoSize | PosterSize | ProfileSize | StillSize,
): string {
	return `${TMDB_IMAGE_ORIGIN}/t/p/${size}${path}`;
}

export default function TmdbImage(props: TmdbImageProps): JSXElement {
	const [componentProps, imgProps] = splitProps<TmdbImageProps, Props>(props, [
		'class',
		'size',
		'src',
	]);

	return (
		<img
			{...imgProps}
			alt={props.alt ?? ''}
			class={clsx(styles.image, componentProps.class)}
			src={tmdbImagePath(componentProps.src, componentProps.size)}
		/>
	);
}
