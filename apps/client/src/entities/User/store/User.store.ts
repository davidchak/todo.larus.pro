import { create } from "zustand"; 
import { UserModelType } from "../types";
import { devtools } from "zustand/middleware";
 

type UserWithoutPassword = Omit<UserModelType, "password">

interface IUserStore {
	user: UserWithoutPassword | null,
	addUser: (payload: UserWithoutPassword) => void;
	clear: () => void;
} 

export const useUserStore = create<IUserStore>()(
	devtools(
		(set) => ({
			user: null,
			addUser: (payload) => set({user: payload }),
			clear: () => set({user: null})
		})
	)
)