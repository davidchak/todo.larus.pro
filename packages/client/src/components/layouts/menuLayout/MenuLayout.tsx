import styles from "./MenuLayout.module.scss";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { addProject, setActive } from "../../../store/project/project.reducer";
import { FlexContainer } from "../../ui/flexContainer/FlexContainer";
import { DirectionEnum, JustifyContentEnum } from "../../ui/flexContainer/FlexContainer.types";

export const MenuLayout = () => {
	const projects = useAppSelector(state => state.projects.projects);
	const dispatch = useAppDispatch();
	const [inputValue, setInputValue] = useState("");

	const inputHandler = (newVal: string) => {
		setInputValue(newVal);
	}

	const buttonHandler = () => {
		if (inputValue.length > 2) {
			dispatch(addProject(inputValue));
			setInputValue("");
		}
	}

	return <div className={styles.menu}>
		<div>
			<Input placeholder="Новый проект" value={inputValue} onChange={inputHandler} />
			<Button action={buttonHandler} text='Добавить' />
		</div>
		<FlexContainer direction={DirectionEnum.column} >
			{projects.map(project => <Button key={project.id} action={() => dispatch(setActive(project))} text={project.title} />)}
		</FlexContainer>
	</div>
}