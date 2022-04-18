
import React from "react"
import { css, jsx } from "@emotion/react";
import cn from "classnames";
import { Task } from "../../components/task/Task";
import { useStoreContext } from '../../store/Store.hook';


export const TaskList = () => {

	const taskListClass = cn({
		windth: '100%',
		height: '100%',
	})

	const { taskList } = useStoreContext();

	return <div className='tasklistClass'>
		{taskList.map(item => <Task key={item.id} task={item} />)}
	</div>
}