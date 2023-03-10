import { RootTaskTopic } from "entities/Task";
import { RootProjectTopic } from "entities/Project";
import { RootTaskGroupTopic } from "entities/TaskGroup";
import { RootUserTopic } from "entities/User";

(async () => {
	RootTaskTopic.subscribe((topics, data) => {
		console.log(`${topics}::${JSON.stringify(data)}`)
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