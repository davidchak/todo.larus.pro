import { UUIDTokenType,  } from "types";
import { UserModelType } from "../types";


export class UserModel implements UserModelType {
	id!: UUIDTokenType;
	email!: string;
}