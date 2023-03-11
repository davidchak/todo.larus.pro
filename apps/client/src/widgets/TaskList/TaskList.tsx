import { Layout } from "@consta/uikit/Layout";
import { useTaskStore, TaskRowUi } from "entities/Task";

// TODO: Заменить на таблицу
// TODO: Добавить пагинацию 
export const TaskList = () => {
	const taskList = useTaskStore((state) => state.taskList);

	return (<Layout direction="column" style={{
		overflowY: "scroll", background: "rgba(247, 248, 249, .66)", backdropFilter: "blur(20px)", height: "inherit" }}>
		{ taskList.map(task => <TaskRowUi key={ task.id } task={ task } />) }
	</Layout>)
}