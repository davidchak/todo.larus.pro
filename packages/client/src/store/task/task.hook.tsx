import React from "react"
import { ITask } from '../../entities/task/Task.interface';

type TaskListDefaultValueType = ITask[];

export const useTaskHook = () => {

	const [taskList, setTask] = React.useState<TaskListDefaultValueType>([])

	const addTask = (task: ITask) => {
		setTask([...taskList, task]);
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