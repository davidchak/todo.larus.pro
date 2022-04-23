import { ContentLayout } from './layouts/contentlayout/ContentLayout';
import { MenuLayout } from './layouts/menuLayout/MenuLayout';
import { FlexContainer } from './components/flexContainer/FlexContainer';
import { DirectionEnum } from './components/flexContainer/FlexContainer.types';
import styles from './App.module.scss';

export const App = () => {
	return (
		<div className={styles.app}>
			<FlexContainer >
				<MenuLayout />
				<ContentLayout />
			</FlexContainer>
		</div>
	);
}