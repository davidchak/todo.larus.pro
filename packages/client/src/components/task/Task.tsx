import React from 'react';
import { Button } from '../button/Button';
import { ITask } from '../../entities/task/Task.interface';
import { useStoreContext } from '../../store/Store.hook';
import styles from './Task.module.css';


type TaskPropsType = {
	task: ITask;
}

export const Task = ({ task }: TaskPropsType) => {

	const { removeTask, setModalVisibility } = useStoreContext();

	return <div className={styles.task} onClick={setModalVisibility}>
		<span className={styles.task__name}>{task.name}</span>
		<span className={styles.task__control}>
			<Button text='remove' action={() => removeTask(task.id)} />
		</span>
	</div>
} 