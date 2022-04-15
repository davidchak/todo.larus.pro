import React from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import { TaskList } from './layouts/tasklist/TaskList';
import { Button } from './components/button/Button';

type TaskType = {
	id: string,
	name: string,
};

function App() {

	let AppClass = cn({
		app: true
	});

	let defaultTaskState: TaskType[] = []

	let [tasks, setTask] = React.useState(defaultTaskState);

	const addTask = (taskName: string = 'test') => {

		let newTask: TaskType = {
			id: uuid(),
			name: taskName
		};

		setTask([...tasks, newTask])
	};

	const removeTask = (taskId: string) => {
		setTask(tasks.filter(item => item.id !== taskId))
	};

	return (
		<div className={AppClass}>
			<div>
				<Button text='add' action={addTask} />
			</div>
			<TaskList tasks={tasks} />
		</div>
	);
}

export default App;
