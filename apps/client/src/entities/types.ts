/**
 * uuid токен
 */
export type UUIDTokenType = string;

/**
 * Базовый класс для всех entity
 */
export type BaseModelType = {
	id: UUIDTokenType
	model_type: string
}

/**
 * Базовый интерфейс создания entity 
 */
export interface IEntity<T extends BaseModelType> {
	getById: (payload: T["id"]) => T;  
	createAsync: (payload: Partial<Omit<T, "id"|"model_type">>) => Promise<T>; 
	updateAsync: (payload: Partial<Pick<T, "id"|"model_type">>) => Promise<T>; 
	deleteAsync: (payload: T["id"]) => Promise<void>; 
}