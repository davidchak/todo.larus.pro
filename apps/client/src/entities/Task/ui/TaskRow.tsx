import { ITaskModel } from "../model";

export interface ITaskRowUiProps {
	task: ITaskModel,
}

// TODO: Реализовать html & css
export const TaskRowUi = ({ task }: ITaskRowUiProps) => {
	return (<div>{ JSON.stringify(task, null, 2) }</div>)
}