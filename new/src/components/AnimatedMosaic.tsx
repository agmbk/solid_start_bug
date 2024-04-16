import { createSignal, For, onMount } from 'solid-js';

import TmdbBackDrop from '~/components/images/TmdbBackDrop';
import TmdbPoster from '~/components/images/TmdbPoster';
import { clsx } from '~/utils/css';

import styles from './AnimatedMosaic.module.scss';
import { randomize } from '~/utils/array';

export type Image = {
	path: string;
	type: 'backdrop' | 'poster';
};

export type AnimatedMosaicProps = {
	class?: string;
};

type RowProps = {
	class?: string;
	images: Image[];
	index: number;
	onImageLoad: () => void;
};

function Row(props: RowProps): JSXElement {
	return (
		<div
			class={clsx(styles.row, props.class)}
			style={{
				'--index': props.index,
			}}>
			<For each={[...props.images, ...props.images]}>
				{(image): JSXElement =>
					image.type === 'backdrop' ? (
						<TmdbBackDrop
							fetchpriority="high"
							height="100%"
							onLoad={props.onImageLoad}
							size="w342"
							src={image.path}
							width="auto"
						/>
					) : (
						<TmdbPoster
							fetchpriority="high"
							height="100%"
							onLoad={props.onImageLoad}
							size="w154"
							src={image.path}
							width="auto"
						/>
					)
				}
			</For>
		</div>
	);
}

export default function AnimatedMosaic(props: AnimatedMosaicProps): JSXElement {
	const [loadedImages, setLoadedImages] = createSignal(0);

	let imagesCount = 0;
	let mosaic!: HTMLDivElement;

	for (const row of MOSAIC) {
		randomize(row);
		imagesCount += row.length;
	}

	function incrementLoadedImages(): void {
		// Divided by 2 because all images are duplicated
		setLoadedImages(p => p + 0.5);
	}

	onMount(() => {
		const images = Array.from(mosaic.querySelectorAll('img'));

		for (const image of images) {
			if (image.complete && image.naturalHeight !== 0) {
				incrementLoadedImages();
			} else {
				image.addEventListener('load', incrementLoadedImages);
			}
		}
	});

	return (
		<div
			class={clsx(
				styles.mosaicWrapper,
				props.class,
				// Allow 3 images to be missing
				loadedImages() - imagesCount + 3 >= 0 && styles.mosaicWrapperVisible,
			)}>
			<div
				class={styles.mosaic}
				ref={mosaic}
				style={{
					'--rows': MOSAIC.length,
				}}>
				<Row
					class={styles.duration2}
					images={MOSAIC[0]!}
					index={0}
					onImageLoad={incrementLoadedImages}
				/>
				<Row
					class={styles.duration1}
					images={MOSAIC[1]!}
					index={1}
					onImageLoad={incrementLoadedImages}
				/>
				<Row
					class={styles.duration2}
					images={MOSAIC[2]!}
					index={2}
					onImageLoad={incrementLoadedImages}
				/>
				<Row
					class={styles.duration3}
					images={MOSAIC[3]!}
					index={3}
					onImageLoad={incrementLoadedImages}
				/>
				<Row
					class={styles.duration1}
					images={MOSAIC[4]!}
					index={4}
					onImageLoad={incrementLoadedImages}
				/>
				<Row
					class={styles.duration3}
					images={MOSAIC[5]!}
					index={5}
					onImageLoad={incrementLoadedImages}
				/>
			</div>
		</div>
	);
}

const MOSAIC = [
	[
		// Need 11 posters, backdrops count as 2 posters TODO: Remove 1
		{
			path: '/qLenDQT9JaxAPZXMUkVGp7Vn0YC.jpg',
			type: 'backdrop',
		},
		{
			path: '/wa3VatSElQ5Mz4uWGggibLbpAGs.jpg',
			type: 'poster',
		},
		{
			path: '/om1SVXxmzyCUF0xvgXNrB7st9V3.jpg',
			type: 'poster',
		},
		{
			path: '/eyYe662h0Zzgo1OcppHLHGfHkmt.jpg',
			type: 'backdrop',
		},
		{
			path: '/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
			type: 'poster',
		},
		{
			path: '/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
			type: 'poster',
		},
		{
			path: '/eVAWIrSefE84rhKHCeNHEy5rVmy.jpg',
			type: 'backdrop',
		},
		{
			path: '/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg',
			type: 'poster',
		},
		{
			path: '/hjtBxl6rlm8rnUt8F47TDJzdOp8.jpg',
			type: 'poster',
		},
	],
	[
		// Need 13 posters, backdrops count as 2 posters

		// 1. House of the dragon
		{
			path: '/lpdzTdAkspzmvrkKeTJoIjlPh16.jpg',
			type: 'backdrop',
		},
		// 2. L'été où je suis devenue jolie
		{
			path: '/4kwJCsv023P4HYeVxxRA2lnipnF.jpg',
			type: 'poster',
		},
		// 3. The Boys
		{
			path: '/5W3dl6met7ABOmsZBubNgYfZqe1.jpg',
			type: 'backdrop',
		},
		// 4. Harry Potter : à l'école des sorciers
		{
			path: '/rpFxYBmIOrUUHamhJ1A2AWRqAl1.jpg',
			type: 'poster',
		},
		// 5. Fast X
		{
			path: '/27u4kBGGOQLqizEudJAOWMkvhip.jpg',
			type: 'backdrop',
		},
		// 6. Les gardiens de la galaxie
		{
			path: '/3LubzLBosZ5PuNB1tCqfmVXlJ03.jpg',
			type: 'poster',
		},
		// 7. Scream
		{
			path: '/ekCmmEhQ9xyvIlxlXkH6bwuTXIW.jpg',
			type: 'poster',
		},
		// 8. Rick et Morty
		{
			path: '/5aIUlqC6855aXGewFHSyji0nYjp.jpg',
			type: 'backdrop',
		},
		// 9. Friends
		{
			path: '/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
			type: 'poster',
		},
	],
	[
		// Need 12 posters, backdrops count as 2 posters TODO: Remove 1
		// 1. Nos pires amis 2
		{
			path: '/cWZLmQPFE9sgFxzZsxq0i36zyVE.jpg',
			type: 'poster',
		},
		// 2. Interstellar
		{
			path: '/th5UkDLIa7yyma9UYDAWaIgDh6z.jpg',
			type: 'poster',
		},
		// 3. Stranger things
		{
			path: '/nviyFKko4Uk1mqHxehvxGhnMHFV.jpg',
			type: 'backdrop',
		},
		// 5. Barbie
		{
			path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
			type: 'poster',
		},
		// 6. Grand turismo
		{
			path: '/gYoHiSFCYdnWZKXZhdH2R7LBbm6.jpg',
			type: 'backdrop',
		},
		// 7. Openheimer
		{
			path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',

			type: 'poster',
		},
		// 8. Spider-man across the spider verse
		{
			path: '/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg',
			type: 'backdrop',
		},
		// 9. Les simpsons
		{
			path: '/s70jNqYx4OdTTI2rjhI3eDI4HTr.jpg',
			type: 'poster',
		},
		// 10. Prey
		{
			path: '/fl05mRLLFDvk85dxKWZiaer1PX0.jpg',
			type: 'backdrop',
		},
	],
	[
		// Need 11 posters, backdrops count as 2 posters
		// 1. Ça: chapitre 2
		{
			path: '/pWiALkHml93SWMdq2NSBFkfWOkJ.jpg',
			type: 'poster',
		},
		// 2. Naruto 2002
		{
			path: '/xppeysfvDKVx775MFuH8Z9BlpMk.jpg',
			type: 'poster',
		},
		// 3. Mission impossible : Dead Reckoning
		{
			path: '/bXrBhISfpGmzZISphU5wcKKsgPm.jpg',
			type: 'backdrop',
		},
		// 4. John Wick : chapitre 4
		{
			path: '/jAMVKvqxdNbUY2YQWhCclYI6coP.jpg',
			type: 'poster',
		},
		// 5. Avatar 2 : la voie de l'eau
		{
			path: '/5oulqKn9t2I1KAF3SylDk6StsI8.jpg',
			type: 'backdrop',
		},
		// 6. Élémentaire
		{
			path: '/rzY5kUJJ1zGfingV2oHyyxtlGNa.jpg',
			type: 'poster',
		},
		// 7. Indiana Jones et le Cadran de la destinée
		{
			path: '/64TyGedJPmfwfO0dIQWFDLIw1U7.jpg',
			type: 'poster',
		},
		// 8. Ahsoka
		{
			path: '/mzBsZtr8ePoec8Iuh3E6pJOck6.jpg',
			type: 'backdrop',
		},
	],
	[
		// Need 10 posters, backdrops count as 2 posters
		// 1. Mercredi
		{
			path: '/AqXnyD3qi6fHJ5hdZrudTvpFkai.jpg',
			type: 'backdrop',
		},
		// 2. Twilight, chapitre 1 : Fascination
		{
			path: '/8phJ4i9m1tBDJbOwwQPvdeWhN2h.jpg',
			type: 'poster',
		},
		// 3. Transformers : Rise Of The Beasts
		{
			path: '/kq6AYN96FjWSZQVRYpAPmBAVq2s.jpg',
			type: 'poster',
		},
		// 4. The Last of Us
		{
			path: '/rYv1xgTI2Vc2CmdBPeWHG3eDayj.jpg',
			type: 'backdrop',
		},
		// 5. Westworld
		{
			path: '/ALlSU9du9iRiKIIoY1sREGNqQ5.jpg',
			type: 'poster',
		},
		// 6. Avengers : Infinity War
		{
			path: '/icUSGFn22cP2BQ0tXCIsykWVCQ.jpg',
			type: 'backdrop',
		},
		// 7. Euphoria
		{
			path: '/rcFB8My9vDZYMODqkWEw6me96Uo.jpg',
			type: 'poster',
		},
	],
	[
		// Need 6 posters, backdrops count as 2 posters
		// 1. Breaking Bad
		{
			path: '/whL1DXc6TDGYxtuvVRKRCRWvqni.jpg',
			type: 'backdrop',
		},
		// 2. Inception
		{
			path: '/rWDkbJlIyqN8KcqXajh9sZMwGzo.jpg',
			type: 'backdrop',
		},
		{
			path: '/uuE1A2BSNMjvjpyA4LWIhExsn49.jpg',
			type: 'backdrop',
		},
	],
] satisfies JaggedArray<Image>;
