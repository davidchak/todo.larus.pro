import { Outlet } from "react-router-dom" 
import { Layout } from "antd"
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageHeader } from "widgets/PageHeader"
import { PageSider, MenuItemType} from "widgets/PageSider";
import styles from "./PageLayout.module.scss";


function getMenuItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItemType[],
): MenuItemType {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItemType;
}

// TODO: Сделать генератор меню из JSON(в сторе хронящися?)
const items: MenuItemType[] = [
  getMenuItem('Option 1', '1', <PieChartOutlined />),
  getMenuItem('Option 2', '2', <DesktopOutlined />),
  getMenuItem('User', 'sub1', <UserOutlined />, [
    getMenuItem('Tom', '3'),
    getMenuItem('Bill', '4'),
    getMenuItem('Alex', '5'),
  ]),
  getMenuItem('Team', 'sub2', <TeamOutlined />, [getMenuItem('Team 1', '6'), getMenuItem('Team 2', '8')]),
  getMenuItem('Files', '9', <FileOutlined />),
];


export const PageLayout = () => {
	return (<Layout className={styles['page']}>
		<PageSider items={items} />
		<Layout>
			<PageHeader />
			<Layout className={styles['page-content']}>
				<Outlet />
			</Layout>
		</Layout>
	</Layout>)
}