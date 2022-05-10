import { add, remove } from './task.reducer';
import { useAppDispatch, useAppSelector } from '..';
import { ITask } from './task.entity';

export default function useTask() {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(state => state.tasks.tasks);

	const addTask = (title: string, project: string) => {
		dispatch(add({ title, project }));
	};

	const removeTask = (taskId: string) => {
		dispatch(remove(taskId));
	};

	return {
		tasks,
		addTask,
		removeTask
	}
}
