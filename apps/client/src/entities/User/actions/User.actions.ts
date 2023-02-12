import { plainToInstance } from "class-transformer";
import { CreateUserFnType } from "../types";
import { UserModel } from "../models/User.model";
import { generateUUID } from "shared/helpers/idGenerators";
import { useUserStore } from "../store/User.store";



export const createUserAsync: CreateUserFnType = function(payload){
	return new Promise((resolve, reject) => {
		let user = plainToInstance(UserModel, {
			id: generateUUID(),
			email: payload.email,
			password: payload.password	
		})
		console.log(`New user: ${user}`)
		resolve(user)
	})
};

export const deleteUser = function(){};
export const updateUser = function(){};
