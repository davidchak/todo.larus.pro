import styles from "./MenuLayout.module.scss";
import { useAppSelector, useAppDispatch } from "../../../store";
import { MenuItemsGroup } from "../../ui/menuItemsGroup/MenuItemsGroup";

export const MenuLayout = () => {
	const menuGroups = useAppSelector(state => state.menu.menuGroups);

	return <div className={styles.menu}>
		{menuGroups.map((group, index) => <MenuItemsGroup key={index} title={group.title} slug={group.slug} items={group.items} />)}
	</div>
}