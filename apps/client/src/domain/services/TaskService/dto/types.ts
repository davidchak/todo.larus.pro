import { CreateDTO } from "../../../../shared/dto/create.dto"
import { UpdateDTO } from "../../../../shared/dto/update.dto"
import { ITaskEntity } from "../entity/types"


export type CreateTaskDTO = CreateDTO<ITaskEntity>

export type UpdateTaskDTO = UpdateDTO<ITaskEntity>

export type DeleteTaskDTO = ITaskEntity["id"]

export type GetOneTaskDTO = ITaskEntity["id"]
