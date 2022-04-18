import { ITask } from "./Task.interface";

export class TaskEntity implements ITask {
	id!: string;
	name!: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}