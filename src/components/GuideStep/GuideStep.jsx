import { useState } from 'react';
import styles from './GuideStep.module.css';

const role = 'admin';

export default function GuideStep({
	id,
	order,
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
			{role === 'admin' ? <div>GuideStep: item for create</div> : null}
			<div>GuideStep: {title}</div>
		</>
	);
}
