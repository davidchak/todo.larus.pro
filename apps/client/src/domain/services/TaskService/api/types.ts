import { ITaskEntity } from "../entity/types";
import { GetOneTaskDTO,  CreateTaskDTO, UpdateTaskDTO, DeleteTaskDTO } from "../dto/types";


export type GetTasksResponseType = {
  data: ITaskEntity[] | null
}

export type GetOneTaskResponseType = {
  data: ITaskEntity | null
}

export interface ITaskApi {
  getTasks: () => Promise<GetTasksResponseType | null>;
  getTaskById: (payload: GetOneTaskDTO) => Promise<GetOneTaskResponseType | null>;
  updateTask: (payload: UpdateTaskDTO) => Promise<null>;
  createTask: (payload: CreateTaskDTO) => Promise<null>;
  deleteTask: (payload: DeleteTaskDTO) => Promise<null>;
}
