import { Bus } from "shared/bus";

export const PROJECT_ROOT_TOPIC = "PROJECT_TOPIC";
export const PROJECT_CREATE_TOPIC = "PROJECT_TOPIC.CREATE";
export const PROJECT_UPDATE_TOPIC = "PROJECT_TOPIC.UPDATE";
export const PROJECT_DELETE_TOPIC = "PROJECT_TOPIC.DELETE";

const RootProjectTopic = new Bus(PROJECT_ROOT_TOPIC);
const CreateProjectTopic = new Bus(PROJECT_CREATE_TOPIC);
const UpdateProjectTopic = new Bus(PROJECT_UPDATE_TOPIC);
const DeleteProjectTopic = new Bus(PROJECT_DELETE_TOPIC);

export {
	RootProjectTopic,
	CreateProjectTopic,
	UpdateProjectTopic,
	DeleteProjectTopic
}