import { ITaskModel, RootTaskTopic } from "entities/Task";
import { RootProjectTopic } from "entities/Project";
import { RootTaskGroupTopic } from "entities/TaskGroup";
import { RootUserTopic } from "entities/User";
import { IBusMessage } from "shared/bus";

(async () => {
	RootTaskTopic.subscribe((topics, data) => {
		const { timestamp, payload } = data as IBusMessage<ITaskModel>;
		console.log(`${topics}::${timestamp}}::${payload.id}`)
	});
	
	RootProjectTopic.subscribe((topics, data) => {
		console.log(`${topics}::${JSON.stringify(data)}`)
	});
	
	RootTaskGroupTopic.subscribe((topics, data) => {
		console.log(`${topics}::${JSON.stringify(data)}`)
	});

	RootUserTopic.subscribe((topics, data) => {
		console.log(`${topics}::${JSON.stringify(data)}`)
	});
})()