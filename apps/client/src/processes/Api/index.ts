// README: Интерфейс для управления всем приложением
// Написать отдельный API для управления через cli
import { addTaskAsync, getTaskList, deleteTaskAsync, subscribeToTaskList } from "entities/Task";

const features = {
	Task: {
		getTaskList,
		addTaskAsync,
		deleteTaskAsync,
		subscribeToTaskList
	}
}

declare global {
	interface Window {
		api: any;
	}
}

window.api = features || {};
