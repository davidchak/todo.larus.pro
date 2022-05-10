import { TaskList } from '../tasklist/TaskList';
import { AddTaskForm } from '../../ui/addTaskForm/AddTaskForm';
import styles from './ContentLayout.module.scss';


export const ContentLayout = () => {
	return (
		<div className={styles.content}>
			<AddTaskForm />
			<TaskList />
		</div>
	);
}

