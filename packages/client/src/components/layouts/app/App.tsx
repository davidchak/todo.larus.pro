import { MenuLayout } from '../menuLayout/MenuLayout';
import { ContentLayout } from '../contentlayout/ContentLayout';
import { FlexContainer } from '../../ui/flexContainer/FlexContainer';
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