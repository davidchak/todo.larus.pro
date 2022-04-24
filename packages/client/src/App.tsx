import { ContentLayout } from './layouts/contentlayout/ContentLayout';
import { MenuLayout } from './layouts/menuLayout/MenuLayout';
import { FlexContainer } from './components/flexContainer/FlexContainer';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';

export const App = () => {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<FlexContainer >
					<MenuLayout />
					<ContentLayout />
				</FlexContainer>
			</BrowserRouter>
		</div>
	);
}