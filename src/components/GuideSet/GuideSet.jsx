import { useState } from 'react';
import styles from './GuideSet.module.css';

import GuideStep from '../GuideStep/GuideStep';
const GuideStepsSetHeader = ({
	setTitle,
	onToggleContent,
	isContentVisible,
}) => {
	return (
		<div className={styles.heading}>
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

const GuideStepsSetFooter = ({ content }) => {
	if (!content) return null;
	return (
		<div className={styles.userGuideFooter}>
			<p>{content}</p>
		</div>
	);
};

//реализовать + -
export default function GuideSet({ data }) {
	const [isContentVisible, setIsContentVisible] = useState(true);

	const toggleContentVisibility = () => {
		setIsContentVisible(prevState => !prevState);
	};

	return (
		<div className={styles.guideStepSet}>
			<GuideStepsSetHeader
				setTitle={data[0].setHeader}
				onToggleContent={toggleContentVisibility}
				isContentVisible={isContentVisible}
			/>

			<ul className={styles.guideSet}>
				{data.map(set => {
					return (
						<li>
							<div>{set.setHeader}</div>
							<div>
								{set.setBody.map(step => (
									<GuideStep {...step} />
								))}
							</div>
							<div>{set.setFooter}</div>
						</li>
					);
				})}
			</ul>

			<GuideStepsSetFooter content={data[0].setFooter} />
		</div>
	);
}
