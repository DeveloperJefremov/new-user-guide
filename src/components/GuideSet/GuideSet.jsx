import { useState } from 'react';
import styles from './GuideSet.module.css';

import GuideStep from '../GuideStep/GuideStep';
const GuideSetHeader = ({ setTitle, onToggleContent, isContentVisible }) => {
	return (
		<div className={styles.guideSetHeader}>
			<h2>{setTitle}</h2>
			<div className={styles.buttonContainer}>
				<button className={styles.launchButton}>Launch</button>
				<button className={styles.toggleButton} onClick={onToggleContent}>
					{isContentVisible ? '-' : '+'}
				</button>
			</div>
		</div>
	);
};

const GuideSetFooter = ({ content }) => {
	if (!content) return null;
	return (
		<div className={styles.guideSetFooter}>
			<p>{content}</p>
		</div>
	);
};

export default function GuideSet({ data, adminMode }) {
	const [isContentVisible, setIsContentVisible] = useState(false);

	const toggleContentVisibility = () => {
		setIsContentVisible(prevState => !prevState);
	};

	return (
		<div className={styles.guideSet}>
			<GuideSetHeader
				setTitle={data[0].setHeader}
				onToggleContent={toggleContentVisibility}
				isContentVisible={isContentVisible}
			/>

			{isContentVisible && (
				<ul>
					{/* <li>
						<GuideStep key='0' title='createNewStep' />
					</li> */}
					{data.map(set => (
						<li key={set.setHeader}>
							<div>
								{set.setBody.map((step, index) => (
									<GuideStep key={index} {...step} />
								))}
							</div>
						</li>
					))}
				</ul>
			)}

			{isContentVisible && <GuideSetFooter content={data[0].setFooter} />}
		</div>
	);
}
