import React from "react";
import { TaskPropertiesModalPropsTypes } from "./TaskPropertiesModal.types";
import styles from './TaskPropertiesModal.module.css';
import { useStoreContext } from "../../store/Store.hook";

export const TaskPropertiesModal = ({ }: TaskPropertiesModalPropsTypes) => {
	const { modalIsOpen, setModalVisibility } = useStoreContext();
	return modalIsOpen ? <div className={styles.task_propeties_modal} onClick={setModalVisibility}>Modal</div> : null
}