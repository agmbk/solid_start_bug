import styles from './Mockup.module.scss';

export type MockupProps = {
	children: JSXElement;
	description: string;
	title: string;
};

export default function Mockup(props: MockupProps): JSXElement {
	return (
		<div class={styles.wrapper}>
			<div class={styles.textContainer}>
				<h2>{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<div>{props.children}</div>
		</div>
	);
}
