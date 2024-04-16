import { type JSX } from 'solid-js';

import { splitProps } from '~/utils/solid';

export type SvgProps = Props & Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, keyof Props>;

type Props = {
	aspectRatio?: string;
	style?: JSX.CSSProperties;
};

export default function Svg(props: SvgProps): JSXElement {
	const [, componentProps] = splitProps<SvgProps, Props>(props, [
		'aspectRatio',
		'style',
	]);

	return (
		<img
			role="presentation"
			{...componentProps}
			alt={props.alt ?? ''}
			src={props.src}
			style={{
				...props.style,
				'aspect-ratio': props.aspectRatio ?? undefined,
			}}
		/>
	);
}
