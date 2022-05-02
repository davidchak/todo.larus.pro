import { MenuLayout } from './components/layouts/menuLayout/MenuLayout';
import { FlexContainer } from './components/ui/flexContainer/FlexContainer';
import { ContentLayout } from './components/layouts/contentlayout/ContentLayout';
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