import { plainToInstance } from "class-transformer";
import { ITaskModel } from "entities/Task";
import { BaseModelSystemType, BaseModelDatetimeType } from "entities/types";
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IProjectModel extends BaseModelSystemType, BaseModelDatetimeType {
	title: string,
	description: string,
	taskIds: ITaskModel[],
}

export class ProjectModel implements IProjectModel {
	id!: string;
	type!: string;
	title!: string;
	description!: string;
	taskIds!: ITaskModel[];
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

export type CreateProjectDTO = Omit<IProjectModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
export type DeleteProjectDTO = Pick<IProjectModel, "id" >;
export type UpdateProjectDTO = Partial<Omit<IProjectModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

export interface IProjectState {
	projects: IProjectModel[];
	// getById: (payload: IProjectModel["id"]) => IProjectModel|null;
	createProjectAsync: (payload: CreateProjectDTO) => Promise<IProjectModel|Error>;
	// deleteAsync: (payload: DeleteProjectDTO) => Promise<void>;
	// updateAsync: (payload: UpdateProjectDTO) => Promise<IProjectModel>;
}

export const useProjectStore = create<IProjectState>()(
	persist(
		(set, get) => ({
			projects: [],

			createProjectAsync: async ({ taskIds=[], ...args }: CreateProjectDTO) => {
				// FIXME: Заменить на работу с api
				const newProject = plainToInstance(ProjectModel, {
					id: v4(),
					type: "ProjectModel",
					createdAt: new Date(),
					updatedAt: null,
					completedAt: null,
					taskIds,
					...args,
				})

				set({ projects: [ ...get().projects, newProject] })

				return newProject;
			}
		}),
		{
			name: "project_store"
		}
	)
)