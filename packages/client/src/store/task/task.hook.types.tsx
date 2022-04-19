import { ITask } from "../../entities/task/Task.interface";

export type TaskListDefaultValueType = ITask[];

export type StoreTaskPropsTypes = {
	taskList: ITask[],
	addTask: (task: ITask) => void;
	removeTask: (id: string) => void;
}
