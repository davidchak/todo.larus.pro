import React from "react"
import { css, jsx } from "@emotion/react";
import classNames from "classnames";
import { Task } from "../../components/task/Task";


type TaskType = {
	id: string,
	name: string
}

type TaskListPropsType = {
	tasks: TaskType[]
}

export const TaskList = (props: TaskListPropsType) => {

	const { tasks } = props;

	return <div>
		{tasks.map(item => <Task key={item.id} text={item.name} />)}
	</div>
}