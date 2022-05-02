import { TaskList } from '../tasklist/TaskList';
import { AddTaskForm } from '../addTaskForm/AddTaskForm';
import { TaskPropertiesModal } from '../taskPropertiesModal/TaskPropertiesModal';
import styles from './ContentLayout.module.scss';


export const ContentLayout = () => {
	return (
		<div className={styles.content}>
			<AddTaskForm />
			<TaskList />
		</div>
	);
}

