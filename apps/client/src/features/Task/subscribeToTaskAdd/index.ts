import { CreateTaskTopic } from "entities/Task";

export type callbackType = (token: string, data?: any) => void;

/**
 * Подписка на событие создания задачи
 * @param cb 
 * @returns 
 */
export const subscribeToTaskAdd = (cb: callbackType) => {
	const unsubscribe = CreateTaskTopic.subscribe(cb);
	return () => unsubscribe();
}