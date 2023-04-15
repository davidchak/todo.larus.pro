import { v4 } from "uuid";
import { ITaskModel, TaskModel, TaskStatusEnum } from "../model";
import { taskStore } from "../store";
import { TaskCreateTopic, TaskDeleteTopic } from "../bus";
import { plainToInstance } from "class-transformer";

export const TaskActions = () => {

	const createTaskAsync = async () => {
		const prevState = taskStore.getState().tasklist;

		const ch = v4();
		const newTask = plainToInstance(TaskModel, {
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			status: TaskStatusEnum.pending,
			owner: null
		})
		
		taskStore.setState({
			tasklist: [...prevState, newTask]
		})
	
		TaskCreateTopic.emit(newTask);

		return Promise.resolve(newTask);
	};


	const deleteTaskAsync = async ({ id }: Pick<ITaskModel, "id">) => {
		const prevState = taskStore.getState().tasklist;
		
		taskStore.setState({
			tasklist: prevState.filter(task => task.id !== id)
		})

		// TODO: Проверить что задача удалилась
		TaskDeleteTopic.emit({ id })

		return Promise.resolve(true);
	}

	// TODO: Дописать функционал
	// const updateTaskAsync 

	const setTaskFilterAsync = (payload: { status: ITaskModel["status"] | null }) => {
		taskStore.setState({
			taskFilters: { 
				byStatus: payload.status
			}
		})

		// TODO: Выпихнуть событие в шину

		return Promise.resolve(true);
	}

	return {
		createTaskAsync,
		deleteTaskAsync,
		setTaskFilterAsync
	}

}