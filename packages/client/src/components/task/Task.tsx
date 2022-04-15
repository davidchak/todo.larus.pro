import React from 'react';
import { css, jsx } from '@emotion/react';
import cn from 'classnames';
import { Button } from '../button/Button';


type TaskPropsType = {
	id: string,
	text: string,
	remove: (id: string) => void;
}


export const Task = ({ id, text, remove }: TaskPropsType) => {

	const taskStyles = css({
		width: '100%',
		height: '100%',
	})

	const taskClass = cn({
		taskStyles: true
	})

	return <div className='taskClass'>
		<span>{text}</span>
		<span>
			<Button text='remove' action={remove(id)} />
		</span>
	</div>
} 