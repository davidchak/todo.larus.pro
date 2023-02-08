import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { mainPageLoader } from "./index";
import { ITask } from "./types";

const MainPage = () => {
  const data = useLoaderData() as  typeof mainPageLoader;

  return (<div>
    <h3>Main Page</h3>
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

export default MainPage;
