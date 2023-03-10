import { Bus } from "shared/bus";

export const USER_ROOT_TOPIC = "USER_TOPIC";
export const USER_LOGIN_TOPIC = "USER_TOPIC.LOGIN";
export const USER_LOGOUT_TOPIC = "USER_TOPIC.LOGOUT";

const RootUserTopic = new Bus(USER_ROOT_TOPIC);
const LoginUserTopic = new Bus(USER_LOGIN_TOPIC);
const LogoutUserTopic = new Bus(USER_LOGOUT_TOPIC);

export {
	RootUserTopic,
	LoginUserTopic,
	LogoutUserTopic
}