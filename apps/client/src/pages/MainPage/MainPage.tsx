import { useState } from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import { Suspense } from "react";
// import { mainPageLoader } from "./index";
import { H1 } from "shared/ui/H1";
import { H3 } from "shared/ui/H3";
<<<<<<< HEAD
import { ITaskModel, TaskModel } from "entities/Task/model";
import { TaskEntity } from "entities/Task";


=======
import { UserEntity } from "entities/User";
import { UserModelType } from "entities/User/types";
import { UserModel } from "entities/User/models/User.model";
import { Block } from "entities/Block/ui/Block";
>>>>>>> 57cacbb (update)

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
    <H1>Main Page</H1>
		{
			task && <H3>{ JSON.stringify(task, null, 2) }</H3>
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
