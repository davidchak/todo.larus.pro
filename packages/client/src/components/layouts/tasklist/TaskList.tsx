
import cn from "classnames";
import { Task } from "../../ui/task/Task";
import { useAppSelector, useAppDispatch } from "../../../store";


export const TaskList = () => {
	const tasks = useAppSelector(state => state.tasks.tasks);

	const taskListClass = cn({
		windth: '100%',
		height: '100%',
	})


	return <div className='tasklistClass'>
		{tasks.map(task => <Task key={task.id} task={task} />)}
	</div>
}