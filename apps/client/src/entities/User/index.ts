import { createUserAsync } from  "./actions/User.actions";
import { UserModel } from "./models/User.model";


const UserEntity = {
	[Symbol.for("model_name")]: "user_entity",
	createUserAsync,
}

export {
	UserEntity,
	UserModel
}