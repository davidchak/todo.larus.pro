import PubSub from "pubsub-js";
import { plainToInstance } from "class-transformer";
import { ITaskModel, TaskModel } from "../model";
import { v4 } from "uuid";
import { TASK_ADD_TOPIC } from "shared/constants/eventTopics";


export type addTaskEventAsyncType = () => Promise<ITaskModel>

/**
 * Создание новой задачи
 * @param payload 
 * @returns 
 */
export const addTaskEventAsync: addTaskEventAsyncType = async (payload: Partial<ITaskModel>) => {
	return new Promise((resolve) => {
		const created = plainToInstance(TaskModel, {
			id: v4(),
			name: "test",
			description: "test",
			done: false,
			createdAt: new Date().toISOString(),
			updatedAt: null,
			completedAt: null,
		});
		return resolve(created);
	})
}