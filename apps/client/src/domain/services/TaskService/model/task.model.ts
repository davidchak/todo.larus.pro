import { ITaskModel } from "../types";


export class TaskModel implements ITaskModel {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
  completedAt!: Date|null;
  done!: boolean;
}
