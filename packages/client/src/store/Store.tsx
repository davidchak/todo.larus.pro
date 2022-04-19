import React from "react"
import { StoreProviderPropsType } from './Store.types';
import { useTaskHook } from './task/task.hook';
import { useModalHook } from "./modal/modal.hook";
import { StoreTaskPropsTypes } from "./task/task.hook.types";
import { StoreModalPropsTypes } from "./modal/modal.hook.types";


export const StoreContext = React.createContext<StoreTaskPropsTypes & StoreModalPropsTypes | undefined>(undefined);

export function StoreProvider({ children }: StoreProviderPropsType): JSX.Element {

	const value = {
		...useTaskHook(),
		...useModalHook(),
	};

	return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}