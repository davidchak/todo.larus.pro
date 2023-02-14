import { ITaskModel, TaskModel } from "./model";
import { addTaskEventAsync } from "./events";


export interface ITaskEntity {
	// TODO: добавить payload
	add: () => Promise<ITaskModel>
}

export const TaskEntity: ITaskEntity = {
	add: addTaskEventAsync,
}