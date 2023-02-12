import { http } from "shared/services/api";
import { API_USERS_URL } from "shared/constants/apiLinks";
import { CreateUserDTO, BaseUserModelType } from "../types";


/**
 * Создание нового пользователя
 * @param { CreateUserDTO } payload - необходимые поля для создания пользователя
 * @returns { BaseUserModelType | Error }
 */
const createUserAsyncApi = async function (payload: CreateUserDTO): Promise<BaseUserModelType|Error>{
	const result = await http.post<BaseUserModelType>(API_USERS_URL, payload);

	if(result.status !== 201){
		return new Error(JSON.stringify({
			text: result.statusText,
			code: result.status
		}))
	}

	return result.data;
};

export {
	createUserAsyncApi
}