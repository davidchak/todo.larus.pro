import React, { ReactNode } from "react"

type StoreProviderPropsType = {
	children: ReactNode
}

type TaskType 

interface IStoreContext {
	tasks:
	addTask: (text: string) => void;
	removeTask: (id: string) => void;
};

export const StoreContext = React.createContext(defaultContextValue)

export const StoreProvider = ({ children }: StoreProviderPropsType) => {
	const value = {

	}

	return <StoreContext.Provider value={ value } >
		{ children }
		< /StoreContext.Provider>
}