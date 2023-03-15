import { ITaskState } from ".";

export const filteredTaskList = (state: ITaskState) => state.taskFilters ? state.taskList.filter(task => task.status === state.taskFilters): state.taskList; 
export const taskList = (state: ITaskState) => state.taskList; 
export const taskListFilters = (state: ITaskState) => state.taskFilters;