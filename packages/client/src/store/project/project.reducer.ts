import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { IProject } from "./project.entity";


interface ProjectState {
	projects: IProject[],
	activeProject: IProject | undefined
}

const initialState: ProjectState = {
	projects: [],
	activeProject: undefined
}

const ProjectReducer = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addProject(state, action: PayloadAction<string>) {
			let project: IProject = {
				id: v4(),
				createdAt: new Date(),
				title: action.payload
			};

			state.projects.push(project)

			if (state.projects.length === 1) {
				state.activeProject = project;
			}
		},
		removeProject(state, action) { },
		updateProject(state, action) { },
		setActive(state, action: PayloadAction<IProject>) {
			if (state.activeProject && state.activeProject.id !== action.payload.id) {
				state.activeProject = action.payload;
			}
		}
	}
})

export const { addProject, removeProject, updateProject, setActive } = ProjectReducer.actions;

export default ProjectReducer.reducer;