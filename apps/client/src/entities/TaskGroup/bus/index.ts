import { Bus } from "shared/bus";

export const TASK_GROUP_ROOT_TOPIC = "TASK_GROUP_TOPIC";
export const TASK_GROUP_CREATE_TOPIC = "TASK_GROUP_TOPIC.CREATE";
export const TASK_GROUP_UPDATE_TOPIC = "TASK_GROUP_TOPIC.UPDATE";
export const TASK_GROUP_DELETE_TOPIC = "TASK_GROUP_TOPIC.DELETE";

const RootTaskGroupTopic = new Bus(TASK_GROUP_ROOT_TOPIC);
const CreateTaskGroupTopic = new Bus(TASK_GROUP_CREATE_TOPIC);
const UpdateTaskGroupTopic = new Bus(TASK_GROUP_UPDATE_TOPIC);
const DeleteTaskGroupTopic = new Bus(TASK_GROUP_DELETE_TOPIC);

export {
	RootTaskGroupTopic,
	CreateTaskGroupTopic,
	UpdateTaskGroupTopic,
	DeleteTaskGroupTopic
}