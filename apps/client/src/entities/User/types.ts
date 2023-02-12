import { EntityModelBaseType, UUIDTokenType } from "types";
import { CreateDTO, DeleteDTO, UpdateDTO } from "shared/dto";

/**
 * "Базовая" модель пользователя
 */
export type BaseUserFieldsType = {
	email: string;
	password: string; 
}

/**
 * Полный тип пользователя (все поля)
 */
export type UserModelType = BaseUserFieldsType & EntityModelBaseType

export type CreateUserDTO = CreateDTO<BaseUserFieldsType>;
export type DeleteUserDTO = DeleteDTO<UserModelType>; 
export type UpdateUserDTO = UpdateDTO<UserModelType>; 

export type LoginUserDTO = {
	email: string;
	password: string;
}

export type LogoutUserDTO = {
	email: string;
	password: string;
}

export type CreateUserActionType = (payload: CreateUserDTO) => Promise<BaseUserFieldsType | Error>
export type DeleteUserActionType = (payload: DeleteUserDTO) => Promise<void | Error>
export type UpdateUserActionType = (payload: UpdateUserDTO) => Promise<void | Error>
export type LoginUserActionType = (payload: LoginUserDTO) => Promise<UUIDTokenType | Error>
export type LogoutUserActionType = (payload: LogoutUserDTO) => Promise<void | Error>