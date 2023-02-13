import { TaskApi } from "./api/task.api"
import { TaskEvents } from "./events/task.events";
import { TaskStore } from "./store/task.store";
import { AxiosInstance } from "axios";


export const TaskService = (http: AxiosInstance) => {
  const taskApi = TaskApi(http);
  const taskStore = TaskStore();
  const taskEvents = TaskEvents(taskApi, taskStore );

  return {
    ...taskEvents
  }
}
