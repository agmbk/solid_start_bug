import { clsx } from '~/utils/css';

import TmdbImage, { type TmdbImageProps } from './TmdbImage';

import styles from './TmdbBackDrop.module.scss';

export type TmdbBackDropProps = TmdbImageProps;

export default function TmdbBackDrop(props: TmdbBackDropProps): JSXElement {
	return <TmdbImage {...props} class={clsx(styles.backdropRatio, props.class)} />;
}
