import { v4 } from "uuid";
import {  ITaskListFilter, ITaskModel, TaskStatusEnum, useTaskStore } from "../model";
import { TaskCreateTopic, TaskDeleteTopic } from "../bus";
import { filteredTaskList, taskListFilters } from "../model/selectors";

export const addTaskAsync = async () => {
	const { createTask } = useTaskStore.getState();
	
	const ch = v4();
	const newTask = createTask({
		title: `Task title ${ch}`,
		description: `Task description ${ch}`,
		status: TaskStatusEnum.pending,
		owner: null
	})
	TaskCreateTopic.emit(newTask);
};

export const deleteTaskAsync = async ({id}: {id: string}) => {
	const { deleteTask } = useTaskStore.getState();
	
	// TODO: Вернуть true/false при удалении
	deleteTask({id});
	
	
	// TODO: Проверить что задача удалилась
	TaskDeleteTopic.emit({id});
}

/**
 * Возвращает текущий список задач, не реактивно!
 * @returns ITaskModel[]
 */
export const getTaskList = () => {
	return useTaskStore.getState().taskList;
}


export const setTaskFilter = (payload: { status: TaskStatusEnum | null }) => {
	useTaskStore.setState({
		taskFilters: payload.status
	})
}

/**
 * Подписка на обновление списка задач.
 * Возвращает текущий список сразу и последующие обновления.
 * @param cb - колбэк
 * @returns unsubscribe function 
 */
export const subscribeToTaskList = (cb: (data: ITaskModel[]) => void) => {
	let current = useTaskStore.getState().taskList;

	// Вызываем сразу чтобы получить текущие значения, а не ждать обновления
	cb(current);

	const unsubscribe = useTaskStore.subscribe((state) => {
		cb(filteredTaskList(state));
	}) 

	return unsubscribe;
}

export const subscribeToTaskListChange = (cb: (data: ITaskListFilter["status"]) => void) => {
	let current = useTaskStore.getState().taskFilters;
	
	cb(current as ITaskListFilter["status"]);

	const unsubscribe = useTaskStore.subscribe((state) => {
		cb(taskListFilters(state) as ITaskListFilter["status"]);
	}) 

	return unsubscribe;
}