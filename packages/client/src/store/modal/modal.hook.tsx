import React from "react"
import { StoreModalPropsTypes } from "./modal.hook.types";


export function useModalHook(): StoreModalPropsTypes {

	const [modalIsOpen, showModal] = React.useState(false);

	const setModalVisibility = () => {
		showModal(!modalIsOpen);
	};

	return {
		modalIsOpen,
		setModalVisibility
	}
}