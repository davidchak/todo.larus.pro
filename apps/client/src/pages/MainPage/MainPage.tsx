import { useState } from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import { mainPageLoader } from "./index";
import { Block } from "entities/Block/ui/Block";
import { TaskEntity } from "entities/Task";
import { ITaskModel, TaskModel } from "entities/Task/model";

const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;
	const [task, setTask] = useState<ITaskModel |null>(null)

	const handleClick = async () => {
		const newTask = await TaskEntity.add();

		if (newTask instanceof TaskModel){
			setTask(newTask)
		}
	}

  return (<div>
    <h1>Main Page</h1>
		{
			task && <h3>{ JSON.stringify(task, null, 2) }</h3>
		}
		<button onClick={handleClick}>Проверка загрузки пользователя</button>

		<Block />
		{/* <Suspense fallback={<p>Loading...</p>}>
      <Await
        resolve={ data }
        errorElement={
          <p>Await Error!</p>
        } >
          {
            (data) => {
              return (<code>{ JSON.stringify(data.task, null, 2) }</code>)
            }
          }
      </Await>
    </Suspense> */}
  </div>)
}

export { MainPage }
