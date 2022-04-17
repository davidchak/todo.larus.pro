import React from 'react';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import { TaskList } from './layouts/tasklist/TaskList';
import { Button } from './components/button/Button';
import { useStoreContext } from './store/Store.hook';
import { Task } from './entities/task/Task.class';

type TaskType = {
	id: string,
	name: string,
};

function App() {

	let AppClass = cn({
		app: true
	});

	const { addTask } = useStoreContext();

	const newTask = new Task(uuid(), "Test");

	return (
		<div className={AppClass}>
			<div>
				<Button text='add' action={() => addTask(newTask)} />
			</div>
			<TaskList />
		</div>
	);
}

export default App;
