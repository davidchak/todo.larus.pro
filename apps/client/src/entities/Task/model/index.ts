import { plainToInstance } from "class-transformer";
import { IUserModel } from "entities/User/model";
import { BaseModelSystemType, BaseModelDatetimeType } from "shared/types/base.entity.types";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ITaskModel extends BaseModelSystemType, BaseModelDatetimeType {
	title: string,
	description: string,
	done: boolean,
	owner: IUserModel | null,
}

export class TaskModel implements ITaskModel {
	id!: string;
	type!: string;
	title!: string;
	description!: string;
	done!: boolean;
	owner!: IUserModel | null;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

// TODO: переписать dto на глобальные
export type CreateTaskDTO = Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
// TODO: переписать dto на глобальные
export type DeleteTaskDTO = Pick<ITaskModel & BaseModelSystemType, "id" >;
// TODO: переписать dto на глобальные
export type UpdateTaskDTO = Required<Pick<BaseModelSystemType, "id">> & Partial<Omit<ITaskModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

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