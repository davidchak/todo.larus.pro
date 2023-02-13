import { api as apiConstants } from "../../../../shared/constants";
import { AxiosInstance } from "axios";
import { ITaskApi, GetOneTaskResponseType, GetTasksResponseType } from "./types";
import { CreateTaskDTO, UpdateTaskDTO, DeleteTaskDTO, GetOneTaskDTO } from "../dto/types";
import { isAxiosError } from "axios";


export const TaskApi = function(http: AxiosInstance):ITaskApi {

  const getTasks = async () => {
    try {
      const { data, status, statusText  } = await http.get<GetTasksResponseType>(apiConstants.API_TASKS_URL);

      if(status !== 200){
        console.log(`error: ${status} - ${statusText}`)
        return null;
      }

      return data;

    } catch (error) {
      if (isAxiosError(error)) {
        console.log(`error:  ${error.message}`);
        return null;
      } else {
        console.log(`error: ${error}`)
        return null
      }
    }
  }

  const getTaskById = async (payload: GetOneTaskDTO) => {
    try {
      const {data, status, statusText  } = await http.get<GetOneTaskResponseType>(apiConstants.API_TASKS_URL);

      if(status !== 200){
        console.log(`error: ${status} - ${statusText}`)
        return null;
      }

      return data;

    } catch (error) {
      if (isAxiosError(error)) {
        console.log(`error:  ${error.message}`);
        return null;
      } else {
        console.log(`error: ${error}`)
        return null
      }
    }
  }

  const deleteTask = async (payload: DeleteTaskDTO) => {
    try {
      const { status, statusText } = await http.get<GetOneTaskResponseType>(apiConstants.API_TASKS_URL);

      if(status !== 204){
        console.log(`error: ${status} - ${statusText}`)
        return null;
      }

      return null;

    } catch (error) {
      if (isAxiosError(error)) {
        console.log(`error:  ${error.message}`);
        return null;
      } else {
        console.log(`error: ${error}`)
        return null
      }
    }
  }

  const updateTask = async (payload: UpdateTaskDTO ) => {
    try {
      const { status, statusText } = await http.get<null>(apiConstants.API_TASKS_URL);

      if(status !== 204){
        console.log(`error: ${status} - ${statusText}`)
        return null;
      }

      return null;

    } catch (error) {
      if (isAxiosError(error)) {
        console.log(`error:  ${error.message}`);
        return null;
      } else {
        console.log(`error: ${error}`)
        return null
      }
    }
  }

  const createTask = async (payload: CreateTaskDTO ) => {
    try {
      const { data, status, statusText } = await http.get<null>(apiConstants.API_TASKS_URL);

      if(status !== 201){
        console.log(`error: ${status} - ${statusText}`)
        return null;
      }

      return data;

    } catch (error) {
      if (isAxiosError(error)) {
        console.log(`error:  ${error.message}`);
        return null;
      } else {
        console.log(`error: ${error}`)
        return null
      }
    }
  }

  return {
    getTasks,
    getTaskById,
    deleteTask,
    updateTask,
    createTask
  }
}

