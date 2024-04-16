import MockupImageSmall from '~/assets/img/laptop-mockup-small.webp';
import MockupImage from '~/assets/img/laptop-mockup.webp';
import MockupVideo from '~/assets/video/laptop-mockup.mp4';

import Mockup from './Mockup';

import styles from './LaptopMockup.module.scss';

export default function LaptopMockup(): JSXElement {
	return (
		<Mockup
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus."
			title="Lorem ipsum dolor sit amet">
			<video autoplay class={styles.video} loop muted playsinline tabIndex="-1">
				<source src={MockupVideo} type="video/mp4" />
			</video>
			<picture class={styles.image}>
				<source media="(max-width: 500px)" srcset={MockupImageSmall} />
				<img alt="" srcset={MockupImage} />
			</picture>
		</Mockup>
	);
}
