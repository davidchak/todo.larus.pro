import { ITaskEntity } from "./types";


export class TaskEntity implements ITaskEntity {
  id!: string;
  title!: string;
  description!: string;
  createdAt!: Date;
  updatedAt!: Date;
  completedAt!: Date|null;
  done!: boolean;
}
