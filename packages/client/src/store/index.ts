import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import taskReducer from "./task/task.reducer";
import modalReducer from "./modal/modal.reducer";
import projectReducer from "./project/project.reducer";


export const store = configureStore({
	reducer: {
		tasks: taskReducer,
		projects: projectReducer,
		modal: modalReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector