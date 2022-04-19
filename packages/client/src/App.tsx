import React from 'react';
import cn from 'classnames';
import { TaskList } from './layouts/tasklist/TaskList';
import { AddTaskForm } from './layouts/addTaskForm/AddTaskForm';
import { TaskPropertiesModal } from './layouts/taskPropertiesModal/TaskPropertiesModal';


function App() {

	let AppClass = cn({
		app: true
	});

	return (
		<div className={AppClass}>
			<AddTaskForm />
			<TaskList />
			<TaskPropertiesModal />
		</div>
	);
}

export default App;
