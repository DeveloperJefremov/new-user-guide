import { useState } from 'react';
import styles from './GuideStep.module.css';

const role = 'admin.';

const GuideStepHeader = ({
	// order,
	title,
	isContentVisible,
	toggleContentVisibility,
}) => {
	return (
		<div className={styles.stepHeader}>
			<div className={styles.headerLeft}>
				<h3>{title}</h3>
				{/* <p>{order}</p> */}
			</div>
			<div className={styles.headerRight}>
				<button className={styles.showBtn} onClick={toggleContentVisibility}>
					{isContentVisible ? 'Hide' : 'Show'}
				</button>
				<button className={styles.editBtn}>Edit</button>
				<button className={styles.deleteBtn}>Delete</button>
			</div>
		</div>
	);
};

export default function GuideStep({
	id,
	// order,
	title,
	description,
	elementId,
	imgChecked,
	imgWidth,
	imgHeight,
	imageUrl,
}) {
	const [mode, setMode] = useState('display');

	return (
		<>
			<div className={styles.step}>
				{role === 'admin' ? <div>GuideStep: item for create</div> : null}
				<GuideStepHeader title={title} />

				{/* <div>GuideStep: {title}</div> */}
			</div>
		</>
	);
}
