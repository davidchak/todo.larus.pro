import React from 'react';
import cn from 'classnames';
import { TaskList } from './layouts/tasklist/TaskList';
import { AddTaskForm } from './layouts/addTaskForm/AddTaskForm';


function App() {

	let AppClass = cn({
		app: true
	});

	return (
		<div className={AppClass}>
			<AddTaskForm />
			<TaskList />
		</div>
	);
}

export default App;
