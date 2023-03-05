import { Button } from "@consta/uikit/Button"
import { Layout } from "@consta/uikit/Layout"
import { addNewTaskAsync } from "features/Task";
import { v4 } from "uuid";

export interface IContentPageHeaderProps { 
	page: string
}

export const ContentPageHeader = ({ page }: IContentPageHeaderProps) => {
	// TODO: переписать на открытие модалки для создания задачи
	const handleClick = async () => {
		const ch = v4();
		await addNewTaskAsync({
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			done: false,
			owner: null
		})
	}

	return (<Layout style={{ height: "64px", gap: "64px", paddingLeft: "10px", alignItems: "center" }}>
		<div>{ page.toUpperCase() }</div>
		<Button label="Создать" onClick={ handleClick }/>
	</Layout>)
}