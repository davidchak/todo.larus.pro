import { TaskEventBus } from "features/EventBus";

export type callbackType = (token: string, data?: any) => void;

/**
 * Подписка на событие создания задачи
 * @param cb 
 * @returns 
 */
export const subscribeToTaskAdd = (cb: callbackType) => {
	const unsubscribe = TaskEventBus.subscribe(cb);
	return () => unsubscribe();
}