import { ITaskModel } from "../model";

export interface ITaskUiProps {
	task: ITaskModel,
}

// TODO: Реализовать html & css
export const TaskUi = ({ task }: ITaskUiProps) => {
	return (<div>{ JSON.stringify(task, null, 2) }</div>)
}