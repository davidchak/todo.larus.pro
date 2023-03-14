// import { useTaskStore } from "entities/Task";
import { useState, useEffect } from "react";
import { ITaskModel, subscribeToTaskList } from "entities/Task"; 

export const useTaskListWithFilters = () => {

	const [taskList, setTaskList] = useState<ITaskModel[]>([]);

	useEffect(() => {
		const unsubscribe = subscribeToTaskList(setTaskList);
		return unsubscribe;
	}, [])
	
	return {
		taskList
	}
}