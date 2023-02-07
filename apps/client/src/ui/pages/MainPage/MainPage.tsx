import { useLoaderData } from "react-router-dom";


const MainPage = () => {
  const config = useLoaderData();
  return (<div>
    <h3>Main Page</h3>
    <code>{ JSON.stringify(config, null, 2) }</code>
  </div>)
}

export default MainPage;
