import { BaseModelSystemType } from "shared/types/base.entity.types"

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
// TODO: переделать или удалить
export type DeleteDTO<T extends BaseModelSystemType> = T["id"]


