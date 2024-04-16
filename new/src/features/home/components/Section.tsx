import styles from './Section.module.scss';

type SectionProps = {
	children?: JSXElement;
};

export default function Section(props: SectionProps): JSXElement {
	return <section class={styles.section}>{props.children}</section>;
}
