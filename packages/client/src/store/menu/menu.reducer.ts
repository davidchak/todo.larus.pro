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
	]
}

const MenuReducer = createSlice({
	name: "menu",
	initialState,
	reducers: {
		addMenuGroupItem(state, action: PayloadAction<string>) { }
		// addProject(state, action: PayloadAction<string>) {
		// 	let project: IProject = {
		// 		id: v4(),
		// 		createdAt: new Date(),
		// 		title: action.payload
		// 	};

		// 	state.projects.push(project)

		// 	if (state.projects.length === 1) {
		// 		state.activeProject = project;
		// 	}
		// },
		// removeProject(state, action) { },
		// updateProject(state, action) { },
		// setActive(state, action: PayloadAction<IProject>) {
		// 	if (state.activeProject && state.activeProject.id !== action.payload.id) {
		// 		state.activeProject = action.payload;
		// 	}
		// }
	}
})

export const { addMenuGroupItem } = MenuReducer.actions;

export default MenuReducer.reducer;