import { useState } from "react";
import { Layout, Menu } from "antd"
import type { MenuProps } from 'antd';


export type MenuItemType = Required<MenuProps>['items'][number];

export interface IPageSiderProps {
	items: MenuItemType[];
}

export const PageSider = ({ items }: IPageSiderProps) => {
	const [collapsed, setCollapsed] = useState(false);

	return (<Layout.Sider collapsible collapsed={ collapsed } onCollapse={(value) => setCollapsed(value)}>
			<div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
		</Layout.Sider>)
}