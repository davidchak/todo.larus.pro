import { plainToInstance } from "class-transformer";
import { IUserModel } from "entities/User/model";
import { BaseModelSystemType, BaseModelDatetimeType } from "entities/types";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ITaskModel extends BaseModelSystemType, BaseModelDatetimeType {
	title: string,
	description: string,
	done: boolean,
	owner: IUserModel,
}

export class TaskModel implements ITaskModel {
	id!: string;
	type!: string;
	title!: string;
	description!: string;
	done!: boolean;
	owner!: IUserModel;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

export type CreateTaskDTO = Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
export type DeleteTaskDTO = Pick<ITaskModel, "id" >;
export type UpdateTaskDTO = Partial<Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

export interface ITaskState {
	taskList: ITaskModel[];
	// getById: (payload: ITaskModel["id"]) => ITaskModel|null;
	createTaskAsync: (payload: CreateTaskDTO) => Promise<ITaskModel|Error>;
	// deleteAsync: (payload: DeleteTaskDTO) => Promise<void>;
	// updateAsync: (payload: UpdateTaskDTO) => Promise<ITaskModel>;
}

export const useTaskStore = create<ITaskState>()(
	persist(
		(set, get) => ({
			taskList: [],

			createTaskAsync: async (payload: CreateTaskDTO) => {
				// FIXME: Заменить на работу с api
				const newTask = plainToInstance(TaskModel, {
					id: v4(),
					type: "TaskModel",
					createdAt: new Date(),
					updatedAt: null,
					completedAt: null,
					...payload
				})

				set({ taskList: [ ...get().taskList, newTask] })

				return newTask;
			}
		}),
		{
			name: "task_store"
		}
	)
)