import PubSub from "pubsub-js";
import { ITaskApi } from "../api/types";
import { ITaskEvents } from "./types";
import { topics } from "../../../../shared/constants";
import { CreateTaskDTO } from "../dto/types";
import { EventCallbackType } from "../../../../shared/types/event.types";
import { ITaskEntity } from "../entity/types";
import { ITaskState } from "../store/types";


export const TaskEvents = function (taskApi: ITaskApi, taskStore: ): ITaskEvents {

  /**
   * Событие создания задачи
   */
  const createTaskEvent = async function (payload: CreateTaskDTO) {
    try {
      const newTask = await taskApi.createTask(payload);

      if(newTask?.data){
        taskStore.addTask(newTask.data);
      }

      PubSub.publish(topics.TASK_ADD, newTask);

    } catch (e){
      if(e instanceof Error){
        // FIXME: Исправить логирование
        console.log(e.message)
      }
      // FIXME: Исправить логирование
      console.log(e)
    }
  };

  /**
   * Подписка на события создания задачи
   */
  const onTaskCreatedEvent = function (cb: EventCallbackType<ITaskEntity>) {
    const token = PubSub.subscribe(topics.TASK_ADD, (topic, data) => {
      cb(topic, data);
    });

    const unsubscribe = function () {
      PubSub.unsubscribe(token);
    };

    return unsubscribe;
  };

  return {
    createTaskEvent,
    onTaskCreatedEvent
  };
};
