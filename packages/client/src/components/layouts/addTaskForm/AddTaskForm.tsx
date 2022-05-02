import React from "react";
import { Input } from "../../ui/input/Input";
import { Button } from "../../ui/button/Button";
import styles from './AddTaskForm.module.css';
import { useAppDispatch, useAppSelector } from "../../../store";
import { addTask } from "../../../store/task/task.reducer";


export const AddTaskForm = () => {

	const dispatch = useAppDispatch();
	const activeProject = useAppSelector(state => state.projects.activeProject);
	const projects = useAppSelector(state => state.projects.projects);

	const [value, setValue] = React.useState('');

	const inputHandler = (newValue: string) => {
		setValue(newValue);
	}

	const buttonClickHandler = () => {
		if (value.length < 2) {
			return;
		}

		if (activeProject && projects.length > 0) {
			dispatch(addTask({ title: value, project: activeProject }));
			setValue('');
		}
	}

	return <div className={styles.form}>
		<Input placeholder="Новая задача" value={value} onChange={inputHandler}></Input>
		<Button text='add' action={buttonClickHandler} />
	</div>
}