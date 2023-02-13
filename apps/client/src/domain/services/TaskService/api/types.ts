import { ITaskEntity } from "../entity/types";
import { GetOneTaskDTO,  CreateTaskDTO, UpdateTaskDTO, DeleteTaskDTO } from "../dto/types";


export type GetTasksResponseType = {
  data: ITaskEntity[]
}

export type CreateTasksResponseType = {
  data: ITaskEntity
}

export type UpdateTasksResponseType = {
  data: ITaskEntity
}

export type DeleteTasksResponseType = {
  data: ITaskEntity
}

export type GetOneTaskResponseType = {
  data: ITaskEntity
}

export interface ITaskApi {
  getTasks: () => Promise<GetTasksResponseType | null>;
  getTaskById: (payload: GetOneTaskDTO) => Promise<GetOneTaskResponseType | null>;
  updateTask: (payload: UpdateTaskDTO) => Promise<UpdateTasksResponseType | null>;
  createTask: (payload: CreateTaskDTO) => Promise<CreateTasksResponseType | null>;
  deleteTask: (payload: DeleteTaskDTO) => Promise<DeleteTasksResponseType | null>;
}
