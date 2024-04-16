import { clsx } from '~/utils/css';

import TmdbImage, { type TmdbImageProps } from './TmdbImage';

import styles from './TmdbPoster.module.scss';

export type TmdbPosterProps = TmdbImageProps;

export default function TmdbPoster(props: TmdbPosterProps): JSXElement {
	return <TmdbImage {...props} class={clsx(styles.posterRatio, props.class)} />;
}
