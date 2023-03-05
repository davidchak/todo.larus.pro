import { Bus } from "shared/bus";

const TASK_TOPIC = "TASK_TOPIC";
const TaskEventBus = new Bus(TASK_TOPIC);

export {
	TaskEventBus
}