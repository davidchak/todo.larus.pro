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
  getMenuItem('Задачи и Проекты', '1', <PieChartOutlined />, [
		getMenuItem('Задачи', '1-1'),
		getMenuItem('Проекты', '1-2'),
	]),
  getMenuItem('Автоматизация', '2', <DesktopOutlined />, [
		getMenuItem('Базнес-процессы', '2-1'),
		getMenuItem('Боты', '2-2'),
	]),
  getMenuItem('Настройки', '3', <UserOutlined />, [
    getMenuItem('Шаблоны задач', '3-1'),
    getMenuItem('Настройки пользователя', '3-2'),
  ]),
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