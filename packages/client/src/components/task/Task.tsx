import React from 'react';
import { css, jsx } from '@emotion/react';
import cn from 'classnames';
import { Button } from '../button/Button';
import { ITask } from '../../entities/task/Task.interface';
import { useStoreContext } from '../../store/Store.hook';


type TaskPropsType = {
	task: ITask;
}

export const Task = ({ task }: TaskPropsType) => {

	const { removeTask } = useStoreContext();

	const taskStyles = css({
		width: '400px',
		height: '40px',
		border: '1px solid grey'
	})

	const taskClass = cn({
		taskStyles: true
	})

	return <div className={taskClass}>
		<span>{task.name}</span>
		<span>
			<Button text='remove' action={() => removeTask(task.id)} />
		</span>
	</div>
} 