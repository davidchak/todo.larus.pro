import { IProject } from "../project/project.entity";

export interface ITask {
	id: string,
	createdAt: Date,
	title: string,
	project: string,
}