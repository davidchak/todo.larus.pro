import React from "react"
import { useTaskHook } from './task/task.hook';
import { StoreContextPropsType, StoreProviderPropsType } from './Store.types';


export const StoreContext = React.createContext<StoreContextPropsType | undefined>(undefined);

export function StoreProvider({ children }: StoreProviderPropsType): JSX.Element {

	const value = {
		...useTaskHook()
	};

	return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}