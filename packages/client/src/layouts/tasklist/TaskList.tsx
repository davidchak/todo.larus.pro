import React from "react"
import { css, jsx } from "@emotion/react";
import classNames from "classnames";
import { Task } from "../../components/task/Task";
import { useStoreContext } from '../../store/Store.hook';


type TaskType = {
	id: string,
	name: string
}

type TaskListPropsType = {
	taskList: TaskType[]
}

export const TaskList = () => {

	const { taskList, removeTask } = useStoreContext();

	return <div>
		{taskList.map(item => <Task key={item.id} task={item} />)}
	</div>
}