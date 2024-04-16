import TmdbImageSkeleton, {
	type TmdbImageSkeletonProps,
} from '~/components/images/TmdbImageSkeleton';
import { clsx } from '~/utils/css';

import styles from './TmdbPoster.module.scss';

export type TmdbPosterSkeletonProps = TmdbImageSkeletonProps;

export default function TmdbPosterSkeleton(props: TmdbPosterSkeletonProps): JSXElement {
	return <TmdbImageSkeleton {...props} class={clsx(styles.posterRatio, props.class)} />;
}
