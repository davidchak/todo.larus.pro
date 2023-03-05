import { useTaskStore } from "entities/Task";
import { CreateTaskDTO } from "entities/Task";
import { TaskEventBus } from "features/EventBus";

export const addNewTaskAsync = async (payload: CreateTaskDTO) => {
	const { createTaskAsync } = useTaskStore.getState();

	try {
		// TODO: отправить в api и результат вернуть в createTaskAsync		
		const newTask = await createTaskAsync(payload)

		// TODO: отправляем в history topic с инфой ос создании;
		await TaskEventBus.emit(newTask);
	} catch (err) {
		// TODO: отправляем в лог с ошибками
		if(err instanceof Error){
			console.error(`Ошибка создания задачи: ${err.message}`);
		}
		console.error(err);
	}
}

