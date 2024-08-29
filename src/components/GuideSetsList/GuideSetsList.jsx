import { useState } from 'react';
import mockData from '../../data/MockData';
import GuideSet from '../GuideSet/GuideSet';
import styles from './GuideSetsList.module.css';

export default function GuideSetsList() {
	const [guideSetsList, setGuideSetsList] = useState(mockData);
	// console.log(mockData);

	return (
		<div className={styles.guideSetsList}>
			<h2>Guide Topics:</h2>
			{guideSetsList.map(guideSet => (
				<GuideSet data={guideSet.data} key={guideSet.id} />
			))}
		</div>
	);
}
