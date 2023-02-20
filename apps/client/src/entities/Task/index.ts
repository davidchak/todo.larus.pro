import { ITaskModel } from "./model";
import { addTaskEventAsync } from "./events";


interface ITaskEntity {
	// TODO: добавить payload
	add: () => Promise<ITaskModel>
}

export const TaskEntity: ITaskEntity = {
	add: addTaskEventAsync,
}

export type {
	ITaskModel,
	ITaskEntity
}