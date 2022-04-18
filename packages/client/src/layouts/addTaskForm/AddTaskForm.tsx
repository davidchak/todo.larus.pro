import React from "react";
import { useStoreContext } from "../../store/Store.hook";
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { TaskEntity } from '../../entities/task/Task.class';
import { v4 as uuid } from 'uuid';
import styles from './AddTaskForm.module.css';

export const AddTaskForm = () => {

	const { addTask } = useStoreContext();
	const [value, setValue] = React.useState('');

	const inputHandler = (newValue: string) => {
		setValue(newValue);
	}

	const buttonClickHandler = () => {
		addTask(new TaskEntity(uuid(), value))
		setValue('');
	}

	return <div className={styles.form}>
		<Input placeholder="Новая задача" value={value} onChange={inputHandler}></Input>
		<Button text='add' action={buttonClickHandler} />
	</div>
}