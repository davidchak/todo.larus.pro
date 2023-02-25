import { ITaskModel, TaskModel } from "./model";
import { IEntity } from "entities/types";
import { plainToInstance } from "class-transformer";
import { v4 } from "uuid";

export class TaskEntity implements IEntity<ITaskModel> {
	static async createAsync(payload: Partial<ITaskModel>){
		return await new Promise((resolve) => {
			const newTask = plainToInstance(TaskModel, { 
				id: v4(),
				model_type: "Task",
				...payload 
			});
			resolve(newTask);
		}) 
	} 
}

export type {
	ITaskModel
}