import { TaskListHeader } from "widgets/TaskListHeader";
import { Layout } from "@consta/uikit/Layout";
import { TaskListToolBar } from "widgets/TaskListToolBar";
import { TaskList } from "features/TaskList";


const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;

  return (
	<Layout direction="column" style={{ gap: "8px", width: "inherit", height: "inherit" }}>
		<TaskListHeader />
		<hr style={{ width: "100%" }} />
		<TaskListToolBar />
		<TaskList />
	</Layout>)
}

// {/* <Block /> */}
// {/* <Suspense fallback={<p>Loading...</p>}>
// 	<Await
// 		resolve={ data }
// 		errorElement={
// 			<p>Await Error!</p>
// 		} >
// 			{
// 				(data) => {
// 					return (<code>{ JSON.stringify(data.task, null, 2) }</code>)
// 				}
// 			}
// 	</Await>
// </Suspense> */}
export { MainPage }
