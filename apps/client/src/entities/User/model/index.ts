import { plainToInstance } from "class-transformer";
import { BaseModelSystemType, BaseModelDatetimeType } from "shared/types/base.entity.types"
import { v4 } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IUserModel extends BaseModelSystemType, BaseModelDatetimeType {
	email: string,
	authToken: string,
	active: boolean,
	lastLogin: Date,
}

export class UserModel implements IUserModel {
	id!: string;
	type!: string;
	email!: string;
	authToken!: string;
	active!: boolean;
	lastLogin!: Date;
	createdAt!: Date;
	updatedAt!: Date | null;
	completedAt!: Date | null;
}

export type CreateUserDTO = Omit<IUserModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >;
export type DeleteUserDTO = Pick<IUserModel, "id" >;
export type UpdateUserDTO = Partial<Omit<IUserModel, keyof BaseModelSystemType | keyof BaseModelDatetimeType >>

export interface IUserState {
	user: IUserModel | null;
	// getById: (payload: IUserModel["id"]) => IUserModel|null;
	createUserAsync: (payload: CreateUserDTO) => Promise<IUserModel|Error>;
	// deleteAsync: (payload: DeleteUserDTO) => Promise<void>;
	// updateAsync: (payload: UpdateUserDTO) => Promise<IUserModel>;
}

export const useUserStore = create<IUserState>()(
	persist(
		(set, get) => ({
			user: null,

			createUserAsync: async (payload: CreateUserDTO) => {
				// FIXME: Заменить на работу с api
				const newUser = plainToInstance(UserModel, {
					id: v4(),
					type: "UserModel",
					createdAt: new Date(),
					updatedAt: null,
					completedAt: null,
					...payload
				})

				set({ user: newUser })

				return newUser;
			}
		}),
		{
			name: "user_store"
		}
	)
)