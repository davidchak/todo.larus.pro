import React from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import styles from './AddTaskForm.module.css';
import useMenu from '../../../store/menu/menu.hooks';
import useTask from '../../../store/task/task.hooks';
import { title } from "process";


export const AddTaskForm = () => {

	const { activeMenuSection } = useMenu();
	const { addTask } = useTask();
	const [value, setValue] = React.useState('');

	const inputHandler = (newValue: string) => {
		setValue(newValue);
	}

	const buttonClickHandler = () => {
		if (value.length < 2) {
			return;
		}

		if (activeMenuSection && activeMenuSection.length > 0) {
			addTask(value, activeMenuSection);
			setValue('');
		}
	}

	return <div className={styles.form}>
		<Input placeholder="Новая задача" value={value} onChange={inputHandler}></Input>
		<Button text='add' action={buttonClickHandler} />
	</div>
}