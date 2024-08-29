import { useState } from 'react';
import Card from '../../UI/Card';
import GuideStep from './GuideStep'; // Импортируем компонент StepItem
import styles from './GuideStepsSet.module.css';

const GuideStepsSetHeader = ({
	setTitle,
	onToggleContent,
	isContentVisible,

	mode,
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

const GuideStepSet = ({ guideStep, steps, onEditStep, onDeleteStep }) => {
	const [isContentVisible, setIsContentVisible] = useState(true);

	const toggleContentVisibility = () => {
		setIsContentVisible(prevState => !prevState);
	};

	return (
		<>
			<div className={styles.stepsContainer}>
				<GuideStepsSetHeader
					title={guideStep.setTitle}
					onToggleContent={toggleContentVisibility}
					isContentVisible={isContentVisible}
				/>
				{steps.length > 0 && (
					<Card className={styles.stepsContainer}>
						{steps.map(step => (
							<GuideStep
								key={step.id}
								stepData={step}
								onEditStep={onEditStep}
								onDelete={onDeleteStep}
							/>
						))}
					</Card>
				)}
				<GuideStepsSetFooter content={guideStep.setFooter} />
			</div>
		</>
	);
};

export default GuideStepSet;
