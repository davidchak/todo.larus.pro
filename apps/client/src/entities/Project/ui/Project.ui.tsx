import { IProjectModel } from "../model";

export interface IProjectUiProps {
	project: IProjectModel,
}

// TODO: Реализовать html & css
export const ProjectUi = ({ project }: IProjectUiProps) => {
	return (<div>{ JSON.stringify(project, null, 2) }</div>)
}