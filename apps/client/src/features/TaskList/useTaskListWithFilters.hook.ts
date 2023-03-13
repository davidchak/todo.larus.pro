// import { useTaskStore } from "entities/Task";
import 

export const useTaskListWithFilters = () => {
	const { taskList, taskFilters } = useTaskStore(state => state);

	return {
		taskList: taskFilters ? taskList.filter(task => task.status === taskFilters) : taskList
	}
}