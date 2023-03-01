import { ITaskGroupModel } from "../model";

export interface ITaskGroupUiProps {
	taskGroup: ITaskGroupModel,
}

// TODO: Реализовать html & css
export const TaskGroupUi = ({ taskGroup }: ITaskGroupUiProps) => {
	return (<div>{ JSON.stringify(taskGroup, null, 2) }</div>)
}