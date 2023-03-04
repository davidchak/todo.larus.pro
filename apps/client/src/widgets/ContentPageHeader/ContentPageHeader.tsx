import { Button } from "@consta/uikit/Button"
import { Layout } from "@consta/uikit/Layout"
import { TaskEventBus } from "features/bus";
import { IUserModel, useUserStore } from "entities/User/model";
import { useTaskStore } from "entities/Task";
import { v4 } from "uuid";

export interface IContentPageHeaderProps { 
	page: string
}

export const ContentPageHeader = ({ page }: IContentPageHeaderProps) => {
	const createTaskAsync = useTaskStore((state) => state.createTaskAsync);
	const createUserAsync = useUserStore((state) => state.createUserAsync)

	// FIXME: Вынести в features создание новой таски
	// FIXME: Вынести в features отображение списка задач
	const handleClick = async () => {
		const ch = v4();
		const newTask = await createTaskAsync({
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			done: false,
			owner: await createUserAsync({
				email: "admin@mail.ru",
				authToken: "notoken",
				active: true,
				lastLogin: new Date()
			}) as IUserModel
		})
		await TaskEventBus.emit(newTask);
	}

	return (<Layout style={{ height: "64px", gap: "64px", paddingLeft: "10px", alignItems: "center" }}>
		<div>{ page.toUpperCase() }</div>
		<Button label="Создать" onClick={ handleClick }/>
	</Layout>)
}