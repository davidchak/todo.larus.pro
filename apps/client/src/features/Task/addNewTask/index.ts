import { ITaskModel, TaskEntity } from "entities/Task";


// export const addTask = async (task: ITaskModel) => {
export const addNewTask = async () => {
	try {
		// TODO: валидировать входные параметры и передать их пропсами
		const newTask = await TaskEntity.add();
		// FIXME: Заменить вывод на вызов логгера(отправить в топик логгера)
		console.log(`New TASK: ${JSON.stringify(newTask, null, 2)}`);
		return newTask;
	}	catch(err) {
		// FIXME: Заменить вывод на вызов логгера(отправить в топик логгера)
		console.log(err)
		// FIXME: Прервать и вывести предупреждение
		return null;
	}
}