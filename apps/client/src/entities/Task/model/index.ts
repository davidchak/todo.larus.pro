import { UUIDTokenType } from "types";


export interface ITaskModel {
	id: UUIDTokenType,
	title: string,
	description: string,
	done: boolean,
	createdAt: Date,
	updatedAt: Date | null,
	completedAt: Date | null
}

export class TaskModel implements ITaskModel {
	id!: string;
	title!: string;
	description!: string;
	done!: boolean;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}