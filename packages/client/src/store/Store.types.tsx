import { ReactNode } from "react"
import { ITask } from "../entities/task/Task.interface";


export type StoreContextPropsType = {
	taskList: ITask[],
	addTask: (task: ITask) => void;
	removeTask: (id: string) => void;
}

export type StoreProviderPropsType = {
	children: ReactNode
}