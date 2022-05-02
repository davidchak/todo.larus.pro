import { FlexContainerPropsTypes, DirectionEnum, AlignItemsEnum, JustifyContentEnum, GapEnum } from "./FlexContainer.types";
import cn from 'classnames';
import styles from './FlexContainer.module.scss';


export const FlexContainer = ({
	children,
	direction = DirectionEnum.row,
	justifyContent = JustifyContentEnum.start,
	alignItems = AlignItemsEnum.start,
	gap = GapEnum.md,
}: FlexContainerPropsTypes) => {

	// TODO: реализовать сборку классов или стилей на основе входных данных
	const flexContainerClasses = cn(
		styles['flex-container'],
		direction == DirectionEnum.row ? styles['flex-container-row'] : null,
		direction == DirectionEnum.column ? styles['flex-container-column'] : null,
	)

	return <div className={flexContainerClasses}>{children}</div>
}