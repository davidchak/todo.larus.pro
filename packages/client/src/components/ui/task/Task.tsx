import { ITask } from '../../../store/task/task.entity';
import cn from 'classnames';
import styles from './Task.module.scss';
import useTask from '../../../store/task/task.hooks';
import useHover from '../../../hooks/useHover';
import { useRef } from 'react';



type TaskPropsType = {
	task: ITask;
}

export const Task = ({ task }: TaskPropsType) => {
	const ref = useRef(null);
	const { removeTask } = useTask();
	const isHovering = useHover(ref);

	const TaskStyles = cn(
		styles.task,
		isHovering && styles.task_hover
	)

	return <div ref={ref} className={TaskStyles}>
		<span className={styles.task__complete}>
			<span onClick={() => removeTask(task.id)}>complete</span>
		</span>
		<div className={styles.task__content}>
			<span className={styles.task__name}>{task.title}</span>
			<div className={styles.task__icons}>
				<span>alert on</span>
				<span>hide status</span>
			</div>
		</div>
		<span className={styles.task__tags}>tags</span>
		<span className={styles.task__date}>date end</span>
		<span className={styles.task__control}>config</span>
	</div>
} 