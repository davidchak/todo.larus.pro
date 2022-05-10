import styles from './MenuItemsGroup.module.scss';
import { IMenuLink } from '../../../store/menu/menu.types';



type MenuItemsGroupPropsType = {
	title: string;
	items: IMenuLink[];
}


export const MenuItemsGroup = ({ title, items }: MenuItemsGroupPropsType) => {
	return <div className={styles['menu-items-group']}>
		<div>{title}</div>
		{items.map((item, index) => <div key={index}>{item.title}</div>)}
	</div>
}