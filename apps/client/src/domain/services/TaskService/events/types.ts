import { CreateTaskDTO } from "../dto/types";
import { ITaskEntity } from "../entity/types";
import { EventCallbackType, EventUnsubscribeType  } from "../../../../shared/types/event.types";


export interface ITaskEvents {
  createTaskEvent: (payload: CreateTaskDTO) => Promise<void>
  onTaskCreatedEvent: (cb: EventCallbackType<ITaskEntity>) => EventUnsubscribeType
}
