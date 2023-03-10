import { Bus } from "shared/bus";

export const TASK_ROOT_TOPIC = "TASK_TOPIC";
export const TASK_CREATE_TOPIC = "TASK_TOPIC.CREATE";
export const TASK_UPDATE_TOPIC = "TASK_TOPIC.UPDATE";
export const TASK_DELETE_TOPIC = "TASK_TOPIC.DELETE";

const RootTaskTopic = new Bus(TASK_ROOT_TOPIC);
const CreateTaskTopic = new Bus(TASK_CREATE_TOPIC);
const UpdateTaskTopic = new Bus(TASK_UPDATE_TOPIC);
const DeleteTaskTopic = new Bus(TASK_DELETE_TOPIC);

export {
	RootTaskTopic,
	CreateTaskTopic,
	UpdateTaskTopic,
	DeleteTaskTopic
}