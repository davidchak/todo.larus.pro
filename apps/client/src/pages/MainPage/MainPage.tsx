import { useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { mainPageLoader } from "./index";
import { H1 } from "shared/ui/H1";
import { H3 } from "shared/ui/H3";
import { UserEntity } from "entities/User";
import { UserModelType } from "entities/User/types";
import { UserModel } from "entities/User/models/User.model";

const MainPage = () => {
  const data = useLoaderData() as  typeof mainPageLoader;
	const [user, setUser] = useState<UserModelType |null>(null)

	const handleClick = async () => {
		const newUser = await UserEntity.createUserAsync({
			email: "admin@mail.ru",
			password: "1234"
		})

		if (newUser instanceof UserModel){
			setUser(newUser)
		}
	}

  return (<div>
    <H1>Main Page</H1>
		{
			user && <H3>{ JSON.stringify(user, null, 2) }</H3>
		}
		<button onClick={handleClick}>Проверка загрузки пользователя</button>
		<Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
  </div>)
}

export { MainPage }
