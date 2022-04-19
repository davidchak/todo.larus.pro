import React from "react"
import { ITask } from '../../entities/task/Task.interface';
import { StoreTaskPropsTypes, TaskListDefaultValueType } from "./task.hook.types";


export function useTaskHook(): StoreTaskPropsTypes {

	const [taskList, setTask] = React.useState<TaskListDefaultValueType>([])

	const addTask = (task: ITask) => {
		setTask([task, ...taskList]);
	};

	const removeTask = (id: string) => {
		setTask(taskList.filter(task => task.id !== id));
	};

	return {
		taskList,
		addTask,
		removeTask,
	}
}