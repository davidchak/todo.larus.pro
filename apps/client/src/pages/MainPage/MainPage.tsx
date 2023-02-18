import { useState } from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import { mainPageLoader } from "./index";
// import { Block } from "entities/Block/ui/Block";
import { TaskEntity } from "entities/Task";
import { ITaskModel, TaskModel } from "entities/Task/model";
import { Button, theme } from "antd";
import ReactJson, { InteractionProps } from 'react-json-view';
import { CodeEditor } from "widgets/blocks/CodeEditor";

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

  return (<div style={{padding: "24px"}}>
    <h1>Main Page</h1>
		<Button onClick={handleClick} type="primary" title="Загрузка пользовательских данных" size="middle">Кнопка 2</Button>
		<br />
		<br />
		<CodeEditor doc={JSON.stringify(task, null, 2)} />
		{/* <ReactJson 
			src={task || {}} 
			iconStyle="square" 
			collapseStringsAfterLength={80} 
			enableClipboard={false}
			displayObjectSize={false}
			displayDataTypes={false}
			onEdit={handleEditJson}
			collapsed={false}
			style={{ border: "1px solid grey", borderRadius: "4px" }}
		/> */}

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
