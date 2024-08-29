import GuideSetsList from '../GuideSetsList/GuideSetsList';
import styles from './MainContent.module.css';

import { useState } from 'react';
// import StepsMockDataTwo from '../data/StepsMockDataTwo';
import mockData from '../../data/MockData';
// import mockDataTwo from '../../data/MockDataTwo';
// import GuideStepSet from './guides/GuideStepsSet';

const MainContentHeader = ({ title, description }) => {
	return (
		<div className={styles.mainContentHeader}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

const MainContentFooter = ({ info }) => {
	return (
		<div className={styles.mainContentFooter}>
			<div>{info}</div>
		</div>
	);
};

const MainContentBody = ({ children }) => {
	return <div className={styles.mainContentBody}>{children}</div>;
};

const MainContentBodyOld = () => {
	const [steps, setSteps] = useState(mockData);
	const [guideSteps, setGuideSteps] = useState(mockData);

	const handleSaveStep = newStep => {
		setSteps(prevSteps => [...prevSteps, newStep]);
	};

	const handleEditStep = updatedStep => {
		setSteps(prevSteps =>
			prevSteps.map(step => (step.id === updatedStep.id ? updatedStep : step))
		);
	};

	const handleDeleteStep = stepId => {
		setSteps(prevSteps => prevSteps.filter(step => step.id !== stepId));
	};

	return (
		<>
			<div className={styles.mainContentBody}>
				<div className={styles.main}></div>
			</div>
		</>
	);
};

export default function MainContent() {
	return (
		<div className={styles.mainContent}>
			<MainContentHeader
				title='User Guide'
				description='User guides are a type of technical documentation that enables customers and end-users with step-by-step instructions on how to execute a task or process.'
			/>

			<MainContentBody>
				<GuideSetsList />
			</MainContentBody>
			<MainContentFooter info='2024 Your Company. All rights reserved.' />
		</div>
	);
}
