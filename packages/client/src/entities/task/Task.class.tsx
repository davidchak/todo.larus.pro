import { ITask } from "./Task.interface";

export class Task implements ITask {
	id!: string;
	name!: string;

	constructor(id: string, name: string) { }
}