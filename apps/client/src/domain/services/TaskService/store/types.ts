import { ITaskEntity } from "../entity/types"


export interface ITaskState {
  tasks: ITaskEntity[],
  addTask: (task: ITaskEntity) => void
}
