import { v4 } from "uuid";
import {  ITaskModel, TaskStatusEnum, useTaskStore } from "../model";

const addTaskAsync = async () => {
	const { createTask } = useTaskStore.getState();
	
	const ch = v4();

	createTask({
		title: `Task title ${ch}`,
		description: `Task description ${ch}`,
		status: TaskStatusEnum.pending,
		owner: null
	})
};

const deleteTaskAsync = async ({id}: {id: string}) => {
	const { deleteTask } = useTaskStore.getState();
	
	deleteTask({id});
}

/**
 * Возвращает текущий список задач, не реактивно!
 * @returns ITaskModel[]
 */
const getTaskList = () => {
	return useTaskStore.getState().taskList;
}

/**
 * Подписка на обновление списка задач.
 * Возвращает текущий список сразу и последующие обновления.
 * @param cb - колбэк
 * @returns unsubscribe function 
 */
const subscribeToTaskList = (cb: (data: ITaskModel[]) => void) => {
	let current = useTaskStore.getState().taskList;

	// Вызываем сразу чтобы получить текущие значения, а не ждать обновления
	cb(current);

	const unsubscribe = useTaskStore.subscribe((state) => {
		cb(state.taskList);
	}) 

	return unsubscribe;
}

export {
	getTaskList,
	addTaskAsync,
	deleteTaskAsync,
	subscribeToTaskList
}