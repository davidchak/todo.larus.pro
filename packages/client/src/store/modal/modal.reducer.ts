import { createSlice } from "@reduxjs/toolkit";


interface ModalState {
	isOpen: boolean
}

const initialState: ModalState = {
	isOpen: false
}

const ModalReducer = createSlice({
	name: "modal",
	initialState,
	reducers: {
		setOpen(state) {
			state.isOpen = !state.isOpen;
		}
	}
})

export const { setOpen } = ModalReducer.actions;

export default ModalReducer.reducer;