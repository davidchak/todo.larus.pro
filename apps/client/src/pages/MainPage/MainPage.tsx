import { useState } from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import { mainPageLoader } from "./index";
// import { Block } from "entities/Block/ui/Block";
import { TaskEntity } from "entities/Task";
import { ITaskModel, TaskModel } from "entities/Task/model";
import { Button, theme } from "antd";
import ReactJson from 'react-json-view';

const { useToken } = theme;

const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;
	const [task, setTask] = useState<ITaskModel |null>(null)
	const token = useToken();

	const handleClick = async () => {
		const newTask = await TaskEntity.add();

		if (newTask instanceof TaskModel){
			setTask(newTask)
		}
	}

  return (<div>
    <h1>Main Page</h1>
		<Button onClick={handleClick} type="primary" title="Загрузка пользовательских данных" size="middle">Кнопка 2</Button>
		<hr />
		<ReactJson src={task || {}} />

		{/* <Block /> */}
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
