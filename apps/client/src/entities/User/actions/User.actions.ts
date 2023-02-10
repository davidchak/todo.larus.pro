import { plainToInstance } from "class-transformer";
import { CreateUserDTO, UserModelType } from "../types";
import { UserModel } from "../models/User.model";
import { useUserStore } from "../store/User.store";
import { createUserAsyncApi } from "../api/User.api";


/**
 * Создание пользователя через запрос api и сохранение ответа в стор с возвратом инстанса.
 * @param { CreateUserDTO } payload - данные пользователя для создания 
 * @returns { UserModelType } - инстанс пользователя
 */
export const createUserAsync = async function(payload: CreateUserDTO):Promise<UserModelType|null>{

	try {
		// запрос в api
		const apiResult = await createUserAsyncApi(payload);

		// преобразуем к модели
		const user = plainToInstance(UserModel, apiResult);

		// записываем в стор
		useUserStore.setState({user});

		return user;
	} catch (error){
		if(error instanceof Error){
			// TODO: обработать ошибку и отправить в лог-коллектор
			console.log(error.message);
		}
	}

	return null;
};

export const deleteUser = function(){};
export const updateUser = function(){};
