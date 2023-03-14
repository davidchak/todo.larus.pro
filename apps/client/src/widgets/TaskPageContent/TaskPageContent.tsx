import { Layout } from "@consta/uikit/Layout"
import { TaskListToolBar } from "features/TaskListToolBar";
import { TaskList } from "features/TaskList";


export const TaskPageContent = () => {
	return (
		<Layout direction="column" flex={1} style={{ height: "inherit" }}>
			<TaskListToolBar />
			<TaskList />
		</Layout>
	)
}