import React from 'react';
import { Button } from '../button/Button';
import { ITask } from '../../../store/task/task.entity';

import styles from './Task.module.css';
import { useAppDispatch } from '../../../store';
import { removeTask } from "../../../store/task/task.reducer";

type TaskPropsType = {
	task: ITask;
}

export const Task = ({ task }: TaskPropsType) => {
	const dispatch = useAppDispatch();

	const remove = () => dispatch(removeTask(task.id));

	return <div className={styles.task}>
		<span className={styles.task__name}>{task.title}</span>
		<span className={styles.task__control}>
			<Button
				text='remove'
				action={remove} />
		</span>
	</div>
} 