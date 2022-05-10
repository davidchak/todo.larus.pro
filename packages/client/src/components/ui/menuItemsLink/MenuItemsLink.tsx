import styles from './MenuItemsLink.module.scss';
import useHover from '../../../hooks/useHover';
import { useRef } from 'react';
import cn from 'classnames';
import useMenu from '../../../store/menu/menu.hooks';

type MenuLinkItemType = {
	title: string;
	slug: string;
}

export const MenuItemsLink = ({ title, slug }: MenuLinkItemType) => {
	const { activeMenuSection, setActiveMenuSection } = useMenu();
	const ref = useRef(null);
	const isHovering = useHover(ref);

	let MenuLinkStyles = cn(
		styles['menu-item__link'],
		isHovering && styles['menu-item__link_hovered'],
		activeMenuSection === slug && styles['menu-item__link_active'],
	)

	const handleClick = () => {
		setActiveMenuSection(slug);
	}

	return < div ref={ref} className={MenuLinkStyles} onClick={handleClick}>
		<span>{title}</span>
	</div >

}