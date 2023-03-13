import { plainToInstance } from "class-transformer";
import { IUserModel } from "entities/User/model";
import { BaseModelSystemType, BaseModelDatetimeType } from "shared/types/base.entity.types";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const enum TaskStatusEnum {
	pending = "PENDING",
	inWork = "IN_WORK",
	done = "DONE"
}

export interface ITaskModel extends BaseModelSystemType, BaseModelDatetimeType {
	title: string,
	description: string,
	status: TaskStatusEnum,
	owner: IUserModel | null,
}

export class TaskModel implements ITaskModel {
	id!: string;
	type!: string;
	title!: string;
	description!: string;
	status!: TaskStatusEnum;
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

export type FilterTaskDTO = {
	status: TaskStatusEnum & null
}

export interface ITaskState {
	taskList: ITaskModel[];
	taskFilters: null;
	computed: {
		filteredTaskList: ITaskModel[]; 
	}
	
	createTask: (payload: CreateTaskDTO) => ITaskModel;
	// deleteAsync: (payload: DeleteTaskDTO) => Promise<void>;
	// updateAsync: (payload: UpdateTaskDTO) => Promise<ITaskModel>;
	setTaskFilter: (payload:FilterTaskDTO) => void;
}

export const useTaskStore = create<ITaskState>()(
	persist(
		(set, get) => ({
			taskList: [],
			taskFilters: null,
			
			// Filtered tasklist
			computed: {
				get filteredTaskList(){
					const currentFilter = get().taskFilters;
					return currentFilter ? get().taskList.filter(task => task.status === currentFilter) : get().taskList;
				}
// const updateTaskAsync = async (payload) => {
// 	console.log(payload);
// }
// const deleteTaskAsync = async (payload) => {
// 	console.log(payload);
// }

			},


			createTask: (payload: CreateTaskDTO) => {
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
			},

			// README: установка фильтра только по статусу, при необходимости расширить
			setTaskFilter: (payload: FilterTaskDTO) => set({ taskFilters: payload.status })
		}),
		{
			name: "task_store"
		}
	)
)