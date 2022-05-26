import styles from './MenuItemsGroup.module.scss';
import { IMenuLink } from '../../../store/menu/menu.types';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { MenuItemsLink } from '../menuItemsLink/MenuItemsLink';
import useMenu from '../../../store/menu/menu.hooks';
import { Button } from "../button/Button";
import { SizeEnum } from '../styles.constant'


type MenuItemsGroupPropsType = {
	title: string;
	slug: string;
	items: IMenuLink[];
}


export const MenuItemsGroup = ({ title, slug, items }: MenuItemsGroupPropsType) => {
	const [isOpen, setOpen] = useState(false);
	const { activeMenuGroup, setActiveMenuGroup } = useMenu();

	useEffect(() => {
		if (activeMenuGroup !== slug) {
			setOpen(false);
		}
	}, [activeMenuGroup]);

	const clickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
		setActiveMenuGroup(slug);
		setOpen(!isOpen);
	}

	const ItemsGroupStyles = cn(
		styles['menu-item__items-group'],
		isOpen && styles['menu-item__items-group_open']
	)

	return <div className={styles['menu-item']}>
		<Button
			size={SizeEnum.md}
			fullWidth={true}
			text={title}
			action={clickHandler}
			withBorder={false}
			withBackground={true} />
		<div className={ItemsGroupStyles}>
			{
				items.map(
					(item, index) =>
						<Button
							key={index}
							action={() => console.log(item.title)}
							size={SizeEnum.md}
							withBorder={true}
							fullWidth={true}
							text={item.title}
						/>
				)}
		</div>
	</div>
}