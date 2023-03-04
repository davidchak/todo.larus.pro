import { create } from "zustand";
import { ITaskModel } from "entities/Task";


export interface ITaskState {
	tasklist: ITaskModel[];
	addTask: (task: ITaskModel) => void;
	removeTask: (id: ITaskModel['id']) => void;
}

export const useTaskStore = create<ITaskState>()(
	(set, get) => ({
		tasklist: [],
		addTask: (task) => set((state) => ({ tasklist: [...state.tasklist, task] })),
		removeTask: (id) => set((state) => ({ tasklist: state.tasklist.filter(task => task.id !== id) }))
	})
)