import React from "react";
import { TaskPropertiesModalPropsTypes } from "./TaskPropertiesModal.types";
import styles from './TaskPropertiesModal.module.css';
import { useAppSelector, useAppDispatch } from "../../../store";
import { setOpen } from "../../../store/modal/modal.reducer";


export const TaskPropertiesModal = ({ }: TaskPropertiesModalPropsTypes) => {
	const modalIsOpen = useAppSelector(state => state.modal.isOpen);
	const dispatch = useAppDispatch();

	const setModalOpen = () => dispatch(setOpen);

	return modalIsOpen ? <div className={styles.task_propeties_modal} onClick={setModalOpen}>Modal</div> : null
}