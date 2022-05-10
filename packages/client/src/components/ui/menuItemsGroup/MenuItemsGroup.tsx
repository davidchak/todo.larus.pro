import styles from './MenuItemsGroup.module.scss';
import { IMenuLink } from '../../../store/menu/menu.types';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { MenuItemsLink } from '../menuItemsLink/MenuItemsLink';
import useMenu from '../../../store/menu/menu.hooks';


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
		<div className={styles['menu-item__group']} onClick={clickHandler}>
			<span>{title}</span>
		</div>
		<div className={ItemsGroupStyles}>
			{items.map((item, index) => <MenuItemsLink key={index} title={item.title} slug={item.slug} />)}
		</div>
	</div>
}