import styles from "./MenuLayout.module.scss";
import { useAppSelector, useAppDispatch } from "../../../store";
import { MenuItemsGroup } from "../../ui/menuItemsGroup/MenuItemsGroup";

export const MenuLayout = () => {
	const menuGroups = useAppSelector(state => state.menu.menuGroups);

	return <div className={styles.menu}>
		{menuGroups.map(group => <MenuItemsGroup title={group.title} items={group.items} />)}
	</div>
}