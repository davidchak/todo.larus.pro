import React from "react";
import { StoreContext } from "./Store";


export function useStoreContext() {
	const context = React.useContext(StoreContext)
	if (context === undefined) {
		throw new Error('useCountState must be used within a CountProvider')
	}
	return context
}