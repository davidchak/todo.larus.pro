import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { ITask } from "./task.entity";


interface TaskState {
	tasks: ITask[]
}

const initialState: TaskState = {
	tasks: []
}

const TaskReducer = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		add(state, action: PayloadAction<Pick<ITask, "title" | "project">>) {
			let task: ITask = {
				id: v4(),
				createdAt: new Date(),
				title: action.payload.title,
				project: action.payload.project
			};

			state.tasks.push(task)
		},
		remove(state, action: PayloadAction<string>) {
			state.tasks = state.tasks.filter(item => item.id !== action.payload)
		}
	}
})

export const { add, remove } = TaskReducer.actions;

export default TaskReducer.reducer;