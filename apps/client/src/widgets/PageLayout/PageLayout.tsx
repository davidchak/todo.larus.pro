import { Outlet } from "react-router-dom" 
import { Layout } from "@consta/uikit/Layout";
import styles from "./PageLayout.module.scss";


export const PageLayout = () => {
	return (<Layout className={styles['page']} direction="column">
		{/* <Layout>
			<div style={{ height: "60px" }}>Header</div>
		</Layout> */}
		<Layout direction="row" style={{ height: "inherit" }}>
			<Layout style={{ width: "240px" }}>Left</Layout>
			<Layout className={styles['page-content']}>
				<Outlet />
			</Layout>
			<Layout style={{ width: "72px" }}>Tools</Layout>
		</Layout>
	</Layout>)
}