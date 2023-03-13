import { v4 } from "uuid";
import {  TaskStatusEnum, useTaskStore } from "../model";

const { taskList, createTask } = useTaskStore.getState();

const addTaskAsync = async () => {
	const ch = v4();

	createTask({
		title: `Task title ${ch}`,
		description: `Task description ${ch}`,
		status: TaskStatusEnum.pending,
		owner: null
	})
}

const getTaskList = async () => {
	return taskList;
}


export {
	getTaskList,
	addTaskAsync
}