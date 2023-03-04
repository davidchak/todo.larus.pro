import { useEffect, useState } from "react";
import { ITaskModel } from "entities/Task/model";
import { Button, theme } from "antd";
import { CodeEditor } from "widgets/CodeEditor";
import { TaskEventBus } from "features/bus";
import { useTaskStore } from "entities/Task"; 
import { v4 } from "uuid";


const { useToken } = theme;

const MainPage = () => {
  // const data = useLoaderData() as  typeof mainPageLoader;
	const { tasklist, createTaskAsync } = useTaskStore((state) => state);
	const token = useToken();

	// FIXME: Вынести в features создание новой таски
	// FIXME: Вынести в features отображение списка задач
	const handleClick = async () => {
		const ch = v4();
		const newTask = await createTaskAsync({
			title: `Task title ${ch}`,
			description: `Task description ${ch}`,
			done: false
		})
		await TaskEventBus.emit(newTask);
	}

	// useEffect(() => {
	// 	const unsubscribe = TaskEventBus.subscribe<ITaskModel>(
	// 		(topic, data) => {
	// 			console.log(`[${topic}]::${JSON.stringify(data)}`)
	// 			if(data){
	// 				setTask(data.payload);
	// 			}
	// 		}
	// 	)
	// 	return function(){
	// 		unsubscribe();
	// 	}
	// }, [])

  return (<div style={{padding: "24px"}}>
    <h1>Main Page</h1>
		<Button onClick={handleClick} type="primary" title="Загрузка пользовательских данных" size="middle">Кнопка 2</Button>
		<br />
		<br />
		<CodeEditor doc={JSON.stringify(tasklist, null, 2)} />

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
