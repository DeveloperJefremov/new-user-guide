import styles from './App.module.css';
import FirstSideBar from './components/Layout/FirstSideBar';
import SecondSideBar from './components/Layout/SecondSideBar';

import MainContentBody from './components/layout/MainContentBody';

function App() {
	return (
		<div className={styles.App}>
			<FirstSideBar />

			<SecondSideBar />
			<MainContentBody />
		</div>
	);
}

export default App;
