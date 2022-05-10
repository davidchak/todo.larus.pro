import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuGroup, IMenuLink, MenuState } from "./menu.types"


const initialState: MenuState = {
	menuGroups: [
		{
			title: 'Задачи',
			slug: 'tasks',
			items: [
				{
					id: 'dasda78gbfwdfgg',
					slug: 'vazhnie',
					title: 'Важные'
				},
				{
					id: 'dasdasfgbfwaq',
					slug: 'today',
					title: 'На сегодня'
				},
				{
					id: 'dasdasfgbfwdfgg',
					slug: 'week',
					title: 'На неделю'
				},
				{
					id: 'dasdasfgbfwdf99gg',
					slug: 'category1',
					title: 'Своя категория 1'
				},
				{
					id: 'dasdasfgb4fwdf99g9',
					slug: 'category2',
					title: 'Своя категория 2'
				},
			]
		},
		{
			title: 'Настройки',
			slug: 'config',
			items: [
				{
					id: 'dasda78gbfwd44fgg',
					slug: 'visual',
					title: 'Оформление'
				},
			]
		},
	],
	activeGroup: 'tasks',
	activeSection: '',
}

const MenuReducer = createSlice({
	name: "menu",
	initialState,
	reducers: {
		addMenuGroupItem(state, action: PayloadAction<string>) { },

		setActiveGroup(state, action: PayloadAction<string>) {
			state.activeGroup = action.payload;
		},

		setActiveSection(state, action: PayloadAction<string>) {
			state.activeSection = action.payload;
		}
	}
})

export const { setActiveGroup, setActiveSection } = MenuReducer.actions;

export default MenuReducer.reducer;