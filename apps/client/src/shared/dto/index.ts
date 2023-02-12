import { EntityModelBaseType } from "types";

/**
 * Базовый dto создания нового объекта
 */
export type CreateDTO<T> = {
	[K in keyof T]: T[K]
}

/**
 * Базовый dto обновления существующего объекта
 */
export type UpdateDTO<T> = {
	[K in keyof T]+?: T[K]
}

/**
 * Базовый dto удаления существующего объекта
 */
export type DeleteDTO<T extends EntityModelBaseType> = T["id"]


