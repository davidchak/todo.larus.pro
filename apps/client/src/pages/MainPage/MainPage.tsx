import { ContentPageHeader } from "widgets/ContentPageHeader";
import { Layout } from "@consta/uikit/Layout";
import { TaskToolBar } from "widgets/TaskToolBar";
import { TaskList } from "widgets/TaskList";


const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;

  return (
	<Layout direction="column" style={{ gap: "8px", width: "inherit", height: "inherit" }}>
		<ContentPageHeader page="Задачи" />
		<hr style={{ width: "100%" }} />
		<TaskToolBar />
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
