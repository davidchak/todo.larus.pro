import { BaseModelType } from "entities/types";


export interface ITaskModel extends BaseModelType {
	title: string,
	description: string,
	done: boolean,
	createdAt: Date,
	updatedAt: Date | null,
	completedAt: Date | null
}

export class TaskModel implements ITaskModel {
	id!: string;
	model_type!: string;
	title!: string;
	description!: string;
	done!: boolean;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}