import { plainToInstance } from "class-transformer";
import { ITaskModel } from "entities/Task/model";
import { IUserModel } from "entities/User/model";
import { BaseModelDatetimeType, BaseModelSystemType } from "shared/types/base.entity.types";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ITaskGroupModel extends BaseModelSystemType, BaseModelDatetimeType {
	name: string,
	taskIds: ITaskModel[],
	owner: IUserModel
}

export class TaskGroupModel implements ITaskGroupModel {
	id!: string;
	type!: string;
	name!: string;
	taskIds!: ITaskModel[];
	owner!: IUserModel;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

export type CreateTaskGroupDTO = Omit<ITaskGroupModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
export type DeleteTaskGroupDTO = Pick<ITaskGroupModel & BaseModelSystemType, "id" >;
export type UpdateTaskGroupDTO = Partial<Omit<ITaskGroupModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

export interface ITaskGroupState {
	taskGroupList: ITaskGroupModel[],
	createTaskGroupAsync: (payload: CreateTaskGroupDTO) =>  Promise<ITaskGroupModel|Error>;
}

export const useTaskGroupStore = create<ITaskGroupState>()(
	persist(
		(set, get) => ({
			taskGroupList: [],
			createTaskGroupAsync: async ({ taskIds = [], ...args  }: CreateTaskGroupDTO) => {

				// FIXME: Заменить на работу с api
				const newTaskGroup = plainToInstance(TaskGroupModel, {
					id: v4(),
					type: "TaskGroupModel",
					createdAt: new Date(),
					updatedAt: null,
					completedAt: null,
					taskIds,
					...args
				})

				set({ taskGroupList: [ ...get().taskGroupList, newTaskGroup] });

				return newTaskGroup;
			}

		}),
		{
			name: "task-group_store"
		}
	)
)