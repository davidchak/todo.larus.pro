import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { useStore } from "zustand";
import { ITaskModel }  from "../model";

export interface ITaskListState {
	tasklist: ITaskModel[],
	taskFilters: {
		byStatus: ITaskModel["status"] | null,
	}
}

export const taskStore = createStore<ITaskListState>()(
	persist(
		(set, get) => ({
			tasklist: [],
			taskFilters: {
				byStatus: null
			}
		})
		, {
			name: 'task-store'
		}
	)
)

// React hook
export const useTaskListStore = () => {
	const { tasklist, taskFilters } = useStore(taskStore);

	return {
		tasklist,
		taskFilters
	}
}