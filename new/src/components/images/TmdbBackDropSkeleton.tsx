import TmdbImageSkeleton, {
	type TmdbImageSkeletonProps,
} from '~/components/images/TmdbImageSkeleton';
import { clsx } from '~/utils/css';

import styles from './TmdbBackDrop.module.scss';

export type TmdbBackDropSkeletonProps = TmdbImageSkeletonProps;

export default function TmdbBackDropSkeleton(props: TmdbBackDropSkeletonProps): JSXElement {
	return <TmdbImageSkeleton {...props} class={clsx(styles.backdropRatio, props.class)} />;
}
